import { ReactElement } from 'react';

import { Avatar, Col, Row, Typography } from 'antd';

import { MenuOutlined, UserOutlined } from '@ant-design/icons';

import shipperLogo from '@assets/shipper-logo.png';

import styles from './index.module.scss';

const Navbar = (props: {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}): ReactElement => {
  const { sidebarCollapsed, setSidebarCollapsed } = props;
  return (
    <div className={styles.navbar}>
      <Row justify="space-between" align="middle">
        <Col>
          <div className={styles.navbar__burger}>
            <MenuOutlined
              className={styles.navbar__burger__icon}
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
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
    </div>
  );
};

export default Navbar;
