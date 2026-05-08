'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Routes where Header/Footer should be hidden
  const hiddenRoutes = ['/login', '/register', '/onboarding', '/dashboard', '/reset-password'];
  const isHidden = hiddenRoutes.some(route => pathname.startsWith(route));

  if (isHidden) return null;

  return <Header />;
}
