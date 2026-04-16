// Cookie management utilities
export const getCookiePreferences = () => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('cookiePreferences');
  return saved ? JSON.parse(saved) : null;
};

export const setCookiePreferences = (preferences) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
};

export const hasUserConsented = () => {
  return getCookiePreferences() !== null;
};

export const canUseAnalytics = () => {
  const prefs = getCookiePreferences();
  return prefs?.analytics || false;
};

export const canUseMarketing = () => {
  const prefs = getCookiePreferences();
  return prefs?.marketing || false;
};

export const canUseFunctional = () => {
  const prefs = getCookiePreferences();
  return prefs?.functional || false;
};