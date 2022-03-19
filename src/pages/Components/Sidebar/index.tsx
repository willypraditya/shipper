import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';

import styles from './index.module.scss';

const Sidebar = () => (
  <Sider width={220} className={styles.sidebar}>
    <Menu mode="inline" defaultSelectedKeys={['2']} className={styles.sidebar__menu}>
      <Menu.Item key="1" disabled className={styles.sidebar__menu__item}>
        Beranda
      </Menu.Item>
      <Menu.Item key="2" className={styles.sidebar__menu__item}>
        Driver Management
      </Menu.Item>
      <Menu.Item key="3" disabled className={styles.sidebar__menu__item}>
        Pickup
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
