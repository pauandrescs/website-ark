// Example usage of cookie utilities in other components

'use client';

import { useEffect } from 'react';
import { canUseAnalytics, canUseMarketing } from '../lib/cookies';

export default function AnalyticsExample() {
  useEffect(() => {
    // Only load analytics if user has consented
    if (canUseAnalytics()) {
      // Load Google Analytics, Mixpanel, etc.
      console.log('Analytics enabled - loading tracking scripts');
    }
  }, []);

  useEffect(() => {
    // Only show marketing content if user has consented
    if (canUseMarketing()) {
      // Load marketing pixels, retargeting scripts, etc.
      console.log('Marketing cookies enabled - loading marketing scripts');
    }
  }, []);

  return (
    <div>
      {/* Your component content */}
      <p>This component respects user cookie preferences.</p>
    </div>
  );
}