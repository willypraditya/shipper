import { ReactElement } from 'react';

import { Card, Spin, Typography } from 'antd';

import Navbar from '@pages/Components/Navbar';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
};

export default Home;
