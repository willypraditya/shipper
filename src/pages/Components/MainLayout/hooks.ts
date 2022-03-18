import { useState } from 'react';

const useMainLayoutHooks = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  return {
    sidebarCollapsed,
    setSidebarCollapsed,
  };
};

export default useMainLayoutHooks;
