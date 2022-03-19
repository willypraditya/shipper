import { useState } from 'react';

const useHomeHooks = () => {
  const [searchDriver, setSearchDriver] = useState<string>('');

  return { searchDriver, setSearchDriver };
};

export default useHomeHooks;
