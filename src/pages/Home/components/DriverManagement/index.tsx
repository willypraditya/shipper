import { Dispatch, ReactElement, SetStateAction } from 'react';

import { Button, Col, Input, Row, Typography } from 'antd';

import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const DriverManagement = (props: { setSearch: Dispatch<SetStateAction<string>> }): ReactElement => {
  const { setSearch } = props;

  return (
    <div className={styles.manage}>
      <Row justify="space-between" align="middle" gutter={[12, 12]}>
        <Col xs={24} lg={12} className={styles.manage__text}>
          <Typography className={styles.manage__text__title}>DRIVER MANAGEMENT</Typography>
          <Typography>Data driver yang bekerja dengan Anda.</Typography>
        </Col>
        <Col xs={24} lg={12} className={styles.manage__action}>
          <Row gutter={[12, 12]}>
            <Col xs={24} lg={12}>
              <Input
                size="large"
                placeholder="Cari Driver"
                className={styles.manage__search}
                prefix={<SearchOutlined className={styles.manage__action__search__icon} />}
                allowClear
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col xs={24} lg={12}>
              <Button
                size="large"
                block
                className={styles.manage__action__addDriver}
                icon={<PlusOutlined className={styles.manage__action__addDriver__icon} />}
              >
                TAMBAH DRIVER
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DriverManagement;
