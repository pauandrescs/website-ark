'use client';
import { useEffect } from 'react';

export default function ViewCounter({ slug }) {
  useEffect(() => {
    if (!slug) return;

    // Verificar si ya se ha contado esta vista en la sesión actual
    const viewedKey = `viewed_${slug}`;
    const alreadyViewed = sessionStorage.getItem(viewedKey);

    if (!alreadyViewed) {
      // Registrar la vista
      fetch('/api/blog/view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      .then(res => {
        if (res.ok) {
          sessionStorage.setItem(viewedKey, 'true');
        }
      })
      .catch(err => console.error('Failed to log view:', err));
    }
  }, [slug]);

  return null; // Componente invisible
}
