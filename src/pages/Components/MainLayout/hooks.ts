import { useState } from 'react';

const useMainLayoutHooks = () => {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  return {
    sidebarVisible,
    setSidebarVisible,
  };
};

export default useMainLayoutHooks;
