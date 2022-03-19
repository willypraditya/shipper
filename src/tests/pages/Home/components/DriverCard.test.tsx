import { render } from '@testing-library/react';

import DriverCard from '@pages/Home/components/DriverList/components/DriverCard';

import { DriverData } from 'types/driver';

test('renders DriverCard success', async () => {
  const mock: DriverData = {
    id: {
      value: 'mock-id',
    },
    name: {
      first: 'mock-first-name',
      last: 'mock-last-name',
    },
    dob: {
      date: '1954-07-30T01:25:29.052Z',
    },
    phone: 'mock-phone',
    email: 'mock-email',
  };

  const { findByText } = await render(<DriverCard data={mock} />);

  expect(await findByText('mock-id')).toBeInTheDocument();
});
