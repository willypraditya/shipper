import { ReactElement } from 'react';

import { Button, Col, Input, Row, Typography } from 'antd';

import { PlusOutlined, PoweroffOutlined, SearchOutlined } from '@ant-design/icons';

import MainLayout from '@pages/Components/MainLayout';

import useHomeHooks from './hooks';
import styles from './index.module.scss';

const Home = (): ReactElement => {
  const hooks = useHomeHooks();

  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.home__manage}>
          <Row justify="space-between" align="middle" gutter={[12, 12]}>
            <Col xs={24} lg={12} className={styles.home__manage__text}>
              <Typography className={styles.home__manage__text__title}>DRIVER MANAGEMENT</Typography>
              <Typography>Data driver yang bekerja dengan Anda.</Typography>
            </Col>
            <Col xs={24} lg={12} className={styles.home__manage__action}>
              <Row gutter={[12, 12]}>
                <Col xs={24} lg={12}>
                  <Input
                    size="large"
                    placeholder="Cari Driver"
                    className={styles.home__manage__search}
                    prefix={<SearchOutlined className={styles.home__manage__action__search__icon} />}
                  />
                </Col>
                <Col xs={24} lg={12}>
                  <Button
                    size="large"
                    block
                    className={styles.home__manage__action__addDriver}
                    icon={<PlusOutlined className={styles.home__manage__action__addDriver__icon} />}
                  >
                    TAMBAH DRIVER
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
