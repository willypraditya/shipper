import { useEffect, useState } from 'react';

import dummyData from './dummy.json';

const useDriverListHooks = (searchDriver: string) => {
  const [data] = useState(dummyData.results);
  const [slicedData, setSlicedData] = useState<any>();
  const [maxPage] = useState(Math.ceil(data.length / 5));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (searchDriver) {
      const searchedData = data.filter((item) =>
        item.name.first.toLocaleLowerCase().includes(searchDriver.toLocaleLowerCase()),
      );
      setSlicedData(searchedData);
    } else {
      const newSlicedData = data.slice(page * 5, 5 * (page + 1));
      setSlicedData(newSlicedData);
    }
  }, [data, page, searchDriver]);

  return {
    slicedData,
    maxPage,
    page,
    setPage,
  };
};

export default useDriverListHooks;
