import { ReactElement } from 'react';

import MainLayout from '@pages/Components/MainLayout';

import DriverCards from './components/DriverList';
import DriverManagement from './components/DriverManagement';
import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return (
    <MainLayout>
      <div className={styles.home}>
        <DriverManagement setSearch={hooks.setSearchDriver} />
        <div className={styles.home__content}>
          <DriverCards searchDriver={hooks.searchDriver} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
