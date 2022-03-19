import moment from 'moment';
import { ReactElement } from 'react';

import { Avatar, Col, Row, Typography } from 'antd';

import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';

import styles from './index.module.scss';

const DriverCard = (props: { data: any }): ReactElement => {
  const { data } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Row justify="space-between">
          <Col>
            <Typography className={styles.card__header__driverId}>
              Driver ID:{' '}
              <span className={styles.card__header__driverId__id}>{data.id.value ? data.id.value : '-'}</span>
            </Typography>
          </Col>
          <Col>
            <EllipsisOutlined className={styles.card__header__icon} />
          </Col>
        </Row>
      </div>
      <div className={styles.card__content}>
        {/* Desktop View */}
        <div className={styles.card__content__desktop}>
          <Avatar size={100} icon={<UserOutlined />} className={styles.card__content__desktop__avatar} />
          <div className={styles.card__content__desktop__entry}>
            <Typography className={styles.card__content__desktop__entry__label}>Nama Driver</Typography>
            <Typography className={styles.card__content__desktop__entry__value}>
              {data.name.first}, {data.name.last}
            </Typography>
          </div>
          <div className={styles.card__content__desktop__entry}>
            <Typography className={styles.card__content__desktop__entry__label}>Telepon</Typography>
            <Typography className={styles.card__content__desktop__entry__value}>{data.phone}</Typography>
          </div>
          <div className={styles.card__content__desktop__entry}>
            <Typography className={styles.card__content__desktop__entry__label}>Email</Typography>
            <Typography className={styles.card__content__desktop__entry__value}>{data.email}</Typography>
          </div>
          <div className={styles.card__content__desktop__entry}>
            <Typography className={styles.card__content__desktop__entry__label}>Tanggal Lahir</Typography>
            <Typography className={styles.card__content__desktop__entry__value}>
              {moment(data.dob.date).format('DD-MM-YYYY')}
            </Typography>
          </div>
        </div>
        {/* Mobile View */}
        <div className={styles.card__content__mobile}>
          <Row justify="space-between" align="middle">
            <Col>
              <Avatar size={100} icon={<UserOutlined />} className={styles.card__content__mobile__avatar} />
            </Col>
            <Col>
              <div className={styles.card__content__mobile__entry}>
                <Typography className={styles.card__content__mobile__entry__label}>Nama Driver</Typography>
                <Typography className={styles.card__content__mobile__entry__value}>
                  {data.name.first}, {data.name.last}
                </Typography>
              </div>
              <div className={styles.card__content__mobile__entry}>
                <Typography className={styles.card__content__mobile__entry__label}>Telepon</Typography>
                <Typography className={styles.card__content__mobile__entry__value}>{data.phone}</Typography>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
