import { createContext, useContext, useMemo } from 'react';
import { features, heroCopy, navLinks, workflowSteps } from '../services/siteContent';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const value = useMemo(
    () => ({
      navLinks,
      features,
      workflowSteps,
      heroCopy,
    }),
    [],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}
