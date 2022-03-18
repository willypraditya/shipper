import { render } from '@testing-library/react';

import Navbar from '@pages/Components/Navbar';

test('renders Navbar success', async () => {
  const { findByText } = await render(<Navbar sidebarCollapsed={false} setSidebarCollapsed={jest.fn()} />);

  expect(await findByText('Shipper User')).toBeInTheDocument();
});
