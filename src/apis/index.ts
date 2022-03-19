import { DriverDataResponse } from 'types/driver';

import getClient from './client';

const client = getClient();

// Sample Fetching
const fetchDriverData = async (): Promise<DriverDataResponse> => {
  const response = await client.get('/api', { params: { results: 30 } });
  return response.data;
};

export default fetchDriverData;
