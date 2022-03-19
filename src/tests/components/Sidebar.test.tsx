import { render } from '@testing-library/react';

import Sidebar from '@pages/Components/Sidebar';

test('renders Sidebar success', async () => {
  const { findByText } = await render(<Sidebar />);

  expect(await findByText('Driver Management')).toBeInTheDocument();
});
