import { ReactElement } from 'react';

import { Button, Spin } from 'antd';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import DriverCard from './components/DriverCard';
import useDriverListHooks from './hooks';
import styles from './index.module.scss';

const DriverList = (props: { searchDriver: string }): ReactElement => {
  const { searchDriver } = props;
  const hooks = useDriverListHooks(searchDriver);

  return (
    <div className={styles.driverList}>
      {hooks.loading ? (
        <div className={styles.driverList__loading}>
          <Spin />
        </div>
      ) : (
        <>
          <div className={styles.driverList__content}>
            {hooks.slicedData && hooks.slicedData.map((item: any) => <DriverCard key={item.email} data={item} />)}
          </div>

          {!searchDriver && (
            <div className={styles.driverList__pagination}>
              <div className={styles.driverList__pagination__actions}>
                <Button
                  data-testid="driver-list-prev-page"
                  type="text"
                  onClick={() => hooks.setPage(hooks.page - 1)}
                  className={styles.driverList__pagination__actions__prev}
                  disabled={hooks.page === 0}
                >
                  <LeftOutlined />
                  Previous Page
                </Button>
                <Button
                  data-testid="driver-list-next-page"
                  type="text"
                  onClick={() => hooks.setPage(hooks.page + 1)}
                  className={styles.driverList__pagination__actions__next}
                  disabled={hooks.page === hooks.maxPage - 1}
                >
                  Next Page
                  <RightOutlined />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DriverList;
