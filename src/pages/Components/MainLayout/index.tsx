import { ReactElement } from 'react';

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import styles from './index.module.scss';

const MainLayout = (props: { children: ReactElement }) => {
  const { children } = props;
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <Layout hasSider className={styles.mainLayout__content}>
        <Sidebar />
        <Content>{children}</Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
