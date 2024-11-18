import { JSX, useMemo } from 'react';

export const useFontsizeClassname = (element: keyof JSX.IntrinsicElements): string => {
  return useMemo(() => {
    switch (element) {
      case 'h1':
        return 'text-7xl';
      case 'h3':
        return 'text-3xl';
      case 'p':
        return 'text-base';
      default:
        return 'text-3xl'; // Fallback to a default size
    }
  }, [element]);
}
