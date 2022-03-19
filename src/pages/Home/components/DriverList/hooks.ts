import { useEffect, useState } from 'react';

import { notification } from 'antd';

import fetchDriverData from '@apis/index';

import { DriverData } from 'types/driver';

const useDriverListHooks = (searchDriver: string) => {
  // Loading
  const [loading, setLoading] = useState<boolean>(false);

  // Data
  const [data, setData] = useState<Array<DriverData>>([]);
  const [slicedData, setSlicedData] = useState<Array<DriverData>>();

  // Pagination
  const [maxPage, setMaxPage] = useState<number>(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const driverData = await fetchDriverData();
        setMaxPage(Math.ceil(driverData.results.length / 5));
        setData(driverData.results);
      } catch (error) {
        notification.error({
          message: 'Failed to fetch drivers data!',
          duration: 0,
        });
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
    loading,
    slicedData,
    maxPage,
    page,
    setPage,
  };
};

export default useDriverListHooks;
