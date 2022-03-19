import { ReactElement } from 'react';

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import useMainLayoutHooks from './hooks';
import styles from './index.module.scss';

const MainLayout = (props: { children: ReactElement }) => {
  const { children } = props;

  const hooks = useMainLayoutHooks();

  return (
    <div className={styles.mainLayout}>
      <Navbar sidebarVisible={hooks.sidebarVisible} setSidebarVisible={hooks.setSidebarVisible} />
      <Layout hasSider className={styles.mainLayout__content}>
        <Sidebar />
        <Content className={styles.mainLayout__content__content}>{children}</Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
