import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DriverList from '@pages/Home/components/DriverList';

test('renders DriverList success', async () => {
  const { findByText } = await render(<DriverList searchDriver="" />);

  expect(await findByText('56012086-K')).toBeInTheDocument();
});

test('search Driver from DriverList with params success', async () => {
  // Test search with the last entry in mock response
  const { findByText } = await render(<DriverList searchDriver="Vernon" />);

  expect(await findByText('AH 57 81 85 A')).toBeInTheDocument();
});

test('pagination DriverList success', async () => {
  const { getByTestId, findByText } = await render(<DriverList searchDriver="" />);

  // Check if the first entry in mock response exist
  expect(await findByText('56012086-K')).toBeInTheDocument();

  // Click Next Page button
  userEvent.click(await getByTestId('driver-list-next-page'));

  // Check if the last entry in mock response exist
  expect(await findByText('AH 57 81 85 A')).toBeInTheDocument();

  // Click Prev Page button
  userEvent.click(await getByTestId('driver-list-prev-page'));

  // Check if the first entry in mock response exist
  expect(await findByText('56012086-K')).toBeInTheDocument();
});
