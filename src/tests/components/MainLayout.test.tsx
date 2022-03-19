import { render } from '@testing-library/react';

import MainLayout from '@pages/Components/MainLayout';

test('renders MainLayout success', async () => {
  const { findByText } = await render(
    <MainLayout>
      <div>renders MainLayout</div>
    </MainLayout>,
  );

  expect(await findByText('Shipper User')).toBeInTheDocument();
  expect(await findByText('Driver Management')).toBeInTheDocument();
});
