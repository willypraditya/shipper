import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import styles from './index.module.scss';

const Sidebar = () => {
  console.log('sidebar');
  return (
    <Sider>
      <Menu mode="inline" defaultSelectedKeys={['2']} className={styles.sidebar}>
        <Menu.Item key="1" disabled className={styles.sidebar__menu}>
          Beranda
        </Menu.Item>
        <Menu.Item key="2" className={styles.sidebar__menu}>
          Driver Management
        </Menu.Item>
        <Menu.Item key="3" disabled className={styles.sidebar__menu}>
          Pickup
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
