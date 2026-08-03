import { useMemo } from 'react';
import { navLinks } from '../services/siteContent';

export function useNavigationLinks() {
  return useMemo(() => navLinks, []);
}
