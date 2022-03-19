import { fireEvent, render } from '@testing-library/react';

import Home from '@pages/Home';

test('renders Home success', async () => {
  const { findByText } = await render(<Home />);

  expect(await findByText('Driver Management')).toBeInTheDocument();
});

test('search Driver from Home success', async () => {
  const { getByTestId, findByText } = await render(<Home />);

  // Test search with the last entry in mock response
  fireEvent.change(await getByTestId('search-driver-input'), { target: { value: 'Vernon' } });
  expect(await findByText('AH 57 81 85 A')).toBeInTheDocument();
});
