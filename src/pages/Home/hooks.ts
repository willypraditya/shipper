import { useState } from 'react';

const useHomeHooks = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return { loading };
};

export default useHomeHooks;
