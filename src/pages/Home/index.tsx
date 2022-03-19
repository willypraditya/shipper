import { ReactElement } from 'react';

import MainLayout from '@pages/Components/MainLayout';

import DriverManagement from './components/DriverManagement';
import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return (
    <MainLayout>
      <div className={styles.home}>
        <DriverManagement />
      </div>
    </MainLayout>
  );
};

export default Home;
