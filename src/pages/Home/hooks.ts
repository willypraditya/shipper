import { useState } from 'react';

const useHomeHooks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchDriver, setSearchDriver] = useState<string>('');

  return { loading, searchDriver, setSearchDriver };
};

export default useHomeHooks;
