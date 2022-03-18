import { ReactElement } from 'react';

import MainLayout from '@pages/Components/MainLayout';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.content}>test</div>
      </div>
    </MainLayout>
  );
};

export default Home;
