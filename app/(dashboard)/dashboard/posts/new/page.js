'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createBlogPost } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Send, Settings as SettingsIcon, Image as ImageIcon, UploadCloud } from 'lucide-react';

// Use react-quill-new for React 18 compatibility
const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import('react-quill-new');
  return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
}, { 
  ssr: false,
  loading: () => <div style={{ height: 500, background: '#fcfcfc', border: '1px solid #eee', borderRadius: 12 }}></div>
});
import 'react-quill-new/dist/quill.snow.css';

export default function NewPost() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [error, setError] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [readTime, setReadTime] = useState('1 min read');
  const quillRef = useRef(null);
  const router = useRouter();

  // Automatic Read Duration Calculation
  useEffect(() => {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadTime(`${minutes} min read`);
  }, [content]);

  // Handle Cover Image Upload
  async function handleCoverUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingCover(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) setCoverUrl(data.url);
    } catch (err) {
      console.error('Cover upload failed:', err);
    } finally {
      setUploadingCover(false);
    }
  }

  // Custom Image Handler for ReactQuill
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);

      const quill = quillRef.current;
      const range = quill.getSelection();

      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        
        if (data.url) {
          quill.insertEmbed(range.index, 'image', data.url);
        }
      } catch (err) {
        console.error('Editor image upload failed:', err);
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'blockquote', 'code-block'],
        ['clean']
      ],
      handlers: {
        image: imageHandler
      }
    },
  }), []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      excerpt: formData.get('excerpt'),
      category: formData.get('category'),
      author: formData.get('author'),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: readTime,
      cover: coverUrl || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
      featured: formData.get('featured') === 'on',
      content: content 
    };

    const res = await createBlogPost(data);
    if (res.success) {
      router.push('/dashboard/posts');
      router.refresh();
    } else {
      setError(res.error);
    }
    setLoading(false);
  }

  return (
    <div className="composer-container" style={{ width: '100%', maxWidth: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <div>
          <Link href="/dashboard/posts" style={{ 
            fontSize: 11, color: 'var(--ark-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 
          }}>
            <ArrowLeft size={14} /> Back to Library
          </Link>
          <h1 style={{ fontSize: 32, fontWeight: 500 }}>Compose Journal Essay</h1>
        </div>
        
        <div style={{ display: 'flex', gap: 12 }}>
          <button form="composer-form" type="submit" className="header-cta" style={{ border: 'none', cursor: 'pointer', height: 46, display: 'flex', alignItems: 'center', gap: 10 }} disabled={loading}>
            <Send size={16} /> {loading ? 'Publishing...' : 'Publish Essay'}
          </button>
        </div>
      </div>

      <form id="composer-form" onSubmit={handleSubmit}>
        <div className="composer-grid">
          <div className="composer-main">
            <div style={{ background: '#fff', padding: '40px 60px', border: '1px solid var(--ark-border)', borderRadius: 16, minHeight: '80vh' }}>
              <input 
                type="text" 
                name="title" 
                required 
                placeholder="The Essence of Collective Design..." 
                style={{ width: '100%', fontSize: 42, fontWeight: 500, border: 'none', outline: 'none', padding: '20px 0', borderBottom: '1px solid #f0f0f0', marginBottom: 40, letterSpacing: '-0.02em' }}
              />

              <div className="rich-editor-wrapper">
                <ReactQuill 
                  forwardedRef={quillRef}
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  modules={modules}
                  placeholder="Begin your multidisciplinary journey here..."
                  style={{ height: 'auto', minHeight: 600 }}
                />
              </div>
            </div>
          </div>

          <div className="composer-sidebar">
            <div className="sidebar-card">
              <div className="card-header">
                <ImageIcon size={14} /> Visual Assets
              </div>
              <div className="field-group">
                <label>Hero Cover Image</label>
                {coverUrl ? (
                  <div style={{ position: 'relative', marginBottom: 12 }}>
                    <img src={coverUrl} alt="Cover Preview" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }} />
                    <button onClick={() => setCoverUrl('')} style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer' }}>×</button>
                  </div>
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: 160, 
                    border: '2px dashed #eee', 
                    borderRadius: 12, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'border-color 0.2s'
                  }} className="upload-dropzone">
                    <input type="file" onChange={handleCoverUpload} accept="image/*" style={{ opacity: 0, position: 'absolute', inset: 0, cursor: 'pointer' }} />
                    <div style={{ color: 'var(--ark-muted)', textAlign: 'center' }}>
                      <UploadCloud size={24} style={{ marginBottom: 12 }} />
                      <p style={{ fontSize: 11 }}>{uploadingCover ? 'Uploading...' : 'Upload landscape image'}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="sidebar-card">
              <div className="card-header">
                <SettingsIcon size={14} /> Configuration
              </div>
              
              <div className="field-group">
                <label>Category</label>
                <select name="category">
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Strategy</option>
                  <option>Architecture</option>
                  <option>Finance</option>
                </select>
              </div>

              <div className="field-group">
                <label>Author / Collective Member</label>
                <input 
                  type="text" 
                  name="author" 
                  required 
                  key={session?.user?.name}
                  defaultValue={session?.user?.name || 'ARK Collective'} 
                  style={{ background: '#f0f0f0', color: '#666', cursor: 'not-allowed' }}
                  readOnly
                />
              </div>

              <div className="field-group">
                <label>Read Duration (Auto)</label>
                <input 
                  type="text" 
                  value={readTime} 
                  readOnly 
                  style={{ background: '#f0f0f0', color: 'var(--ark-gold)', fontWeight: 600, cursor: 'not-allowed' }} 
                />
              </div>

              <div className="field-group">
                <label>Summary Excerpt</label>
                <textarea name="excerpt" required placeholder="Describe the core thesis of this essay..."></textarea>
              </div>

              <div className="checkbox-field">
                <input type="checkbox" name="featured" id="featured" />
                <label htmlFor="featured">Feature on global index</label>
              </div>
            </div>

            <button type="submit" className="header-cta" style={{ width: '100%', border: 'none', cursor: 'pointer', height: 50 }} disabled={loading}>
              {loading ? 'Publishing...' : 'Publish Essay'}
            </button>
            {error && <p style={{ color: '#ff4d4f', fontSize: 12, textAlign: 'center', marginTop: 12 }}>{error}</p>}
          </div>
        </div>
      </form>

      <style jsx global>{`
        .composer-grid { display: grid; grid-template-columns: 1fr 320px; gap: 32px; align-items: start; }
        @media (max-width: 1200px) { .composer-grid { grid-template-columns: 1fr; } }
        .composer-sidebar { display: flex; flex-direction: column; gap: 24px; }
        .sidebar-card { background: #fff; padding: 24px; border: 1px solid var(--ark-border); border-radius: 12px; }
        .card-header { font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--ark-muted); margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #f5f5f5; display: flex; align-items: center; gap: 8px; }
        .field-group { margin-bottom: 20px; }
        .field-group label { display: block; font-size: 10px; text-transform: uppercase; color: #999; margin-bottom: 8px; letter-spacing: 0.05em; }
        .field-group input, .field-group select, .field-group textarea { width: 100%; padding: 12px; border: 1px solid #eee; border-radius: 8px; font-size: 13px; background: #fafafa; transition: border-color 0.2s; }
        .field-group textarea { height: 100px; resize: none; }
        .checkbox-field { display: flex; alignItems: center; gap: 10px; font-size: 13px; }
        .upload-dropzone:hover { border-color: var(--ark-gold) !important; }
        .ql-toolbar.ql-snow { border: none !important; border-bottom: 1px solid #f0f0f0 !important; padding: 16px 0 !important; position: sticky; top: 0; background: #fff; z-index: 10; }
        .ql-container.ql-snow { border: none !important; font-family: 'Playfair Display', serif !important; font-size: 20px !important; }
        .ql-editor { padding: 40px 0 !important; line-height: 1.8 !important; color: var(--ark-black); }
        .ql-editor.ql-blank::before { left: 0 !important; font-style: italic !important; color: #ccc !important; }
      `}</style>
    </div>
  );
}
