'use client';

import { useEffect } from 'react';
import { getTheme, setTheme } from '@/utils/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedTheme = getTheme();
    if (!savedTheme) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(savedTheme);
    }
  }, []);

  return <>{children}</>;
}
