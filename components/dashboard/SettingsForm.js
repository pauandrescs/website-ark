'use client';

import { useState } from 'react';
import { updateUserProfile } from '@/lib/actions';
import { Save, User, Globe, Info } from 'lucide-react';

// Official Brand Logos (SVG)
const Logos = {
  Linkedin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  TwitterX: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
};

export default function SettingsForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [formData, setFormData] = useState({
    name: user.name || '',
    bio: user.bio || '',
    linkedin_url: user.linkedin_url || '',
    twitter_url: user.twitter_url || '',
    website_url: user.website_url || '',
    avatar_url: user.avatar_url || ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const result = await updateUserProfile(formData);
      if (result.success) {
        setMessage({ type: 'success', text: 'Profile updated successfully.' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to update profile.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <div className="form-section">
        <h3 className="section-title"><User size={18} /> Personal Information</h3>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})}
            placeholder="Your name"
          />
        </div>
        <div className="input-group">
          <label>Biography</label>
          <textarea 
            rows="4" 
            value={formData.bio} 
            onChange={e => setFormData({...formData, bio: e.target.value})}
            placeholder="Tell us about yourself... This will appear in the Journal."
          ></textarea>
          <p className="input-hint"><Info size={12} /> Markdown or plain text recommended.</p>
        </div>
      </div>

      <div className="form-section">
        <h3 className="section-title"><Globe size={18} /> Social & Web</h3>
        <div className="input-grid">
          <div className="input-group">
            <label><Logos.Linkedin /> LinkedIn URL</label>
            <input 
              type="url" 
              value={formData.linkedin_url} 
              onChange={e => setFormData({...formData, linkedin_url: e.target.value})}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div className="input-group">
            <label><Logos.TwitterX /> Twitter / X URL</label>
            <input 
              type="url" 
              value={formData.twitter_url} 
              onChange={e => setFormData({...formData, twitter_url: e.target.value})}
              placeholder="https://twitter.com/username"
            />
          </div>
        </div>
        <div className="input-group">
          <label><Globe size={14} /> Personal Website</label>
          <input 
            type="url" 
            value={formData.website_url} 
            onChange={e => setFormData({...formData, website_url: e.target.value})}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>

      <div className="form-actions">
        {message.text && (
          <div className={`form-message ${message.type}`}>
            {message.text}
          </div>
        )}
        <button type="submit" disabled={loading} className="btn-save">
          {loading ? 'Saving Changes...' : <><Save size={18} /> Save Changes</>}
        </button>
      </div>

      <style jsx>{`
        .settings-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .form-section {
          background: #fff;
          padding: 32px;
          border-radius: 2px;
          border: 1px solid var(--ark-border);
        }
        .section-title {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        label {
          font-size: 13px;
          font-weight: 500;
          color: #444;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        input, textarea {
          padding: 12px 16px;
          border: 1px solid var(--ark-border);
          border-radius: 2px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s;
          background: #fcfcfc;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--ark-black);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(0,0,0,0.02);
        }
        .input-hint {
          font-size: 12px;
          color: var(--ark-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
        }
        .form-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
        }
        .form-message {
          font-size: 14px;
          padding: 10px 16px;
          border-radius: 2px;
        }
        .form-message.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; }
        .form-message.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
        .btn-save {
          background: var(--ark-black);
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 2px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.2s;
        }
        .btn-save:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .btn-save:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
      `}</style>
    </form>
  );
}
