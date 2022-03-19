import { ReactElement } from 'react';

import { Avatar, Col, Drawer, Menu, Row, Typography } from 'antd';

import { MenuOutlined, UserOutlined } from '@ant-design/icons';

import shipperLogo from '@assets/shipper-logo.png';

import styles from './index.module.scss';

const Navbar = (props: { sidebarVisible: boolean; setSidebarVisible: (collapsed: boolean) => void }): ReactElement => {
  const { sidebarVisible, setSidebarVisible } = props;
  return (
    <div className={styles.navbar}>
      <Row justify="space-between" align="middle">
        <Col>
          <div className={styles.navbar__burger}>
            <MenuOutlined className={styles.navbar__burger__icon} onClick={() => setSidebarVisible(!sidebarVisible)} />
          </div>
          <img className={styles.navbar__logo} src={shipperLogo} alt="shipper-logo" />
        </Col>
        <Col>
          <Row align="middle">
            <Col>
              <Typography className={styles.navbar__helloUser}>
                Hello, <span className={styles.navbar__helloUser__userName}>Shipper User</span>
              </Typography>
            </Col>
            <Col>
              <Avatar className={styles.navbar__avatar} size={40} icon={<UserOutlined />} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Drawer
        className={styles.navbar__drawer}
        placement="left"
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(!sidebarVisible)}
      >
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
      </Drawer>
    </div>
  );
};

export default Navbar;
