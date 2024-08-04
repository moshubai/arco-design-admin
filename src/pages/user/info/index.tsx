import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Link,
  Result,
  Skeleton,
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import UserInfoHeader from './header';
import styles from './style/index.module.less';
import './mock';
import { Card } from '@arco-design/web-react';
import MyProject from './my-projects';
import MyTeam from './my-team';
import LatestNews from './latest-news';
import store from '@/mobx';
import { toJS } from 'mobx';

const { Title } = Typography;
const { Row, Col } = Grid;
function UserInfo() {
  const t = useLocale(locale);

  const { useAppStore } = store;
  const { userInfo, userLoading: loading } = useAppStore;

  const [noticeLoading, setNoticeLoading] = useState(false);

  const getNotice = async () => {
    setNoticeLoading(true);
    await axios.get('/api/user/notice').finally(() => setNoticeLoading(false));
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <div>
      <UserInfoHeader userInfo={toJS(userInfo)} loading={toJS(loading)} />
      <Row gutter={16}>
        <Col span={16}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6} style={{ marginBottom: '20px' }}>
                {t['userInfo.title.project']}
              </Title>
              <Link>{t['userInfo.btn.more']}</Link>
            </div>
            <MyProject />
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6} style={{ marginBottom: '12px' }}>
                {t['userInfo.title.team']}
              </Title>
            </div>
            <MyTeam />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6} style={{ marginBottom: '8px' }}>
                {t['userInfo.title.news']}
              </Title>
              <Link>{t['userInfo.btn.all']}</Link>
            </div>
            <LatestNews />
          </Card>
        </Col>
        <Col span={8}>
          <Card className={styles.wrapper}>
            <div className={styles['card-title-wrapper']}>
              <Title heading={6}>{t['userInfo.title.notice']}</Title>
            </div>
            {noticeLoading ? (
              <Skeleton text={{ rows: 10 }} animation />
            ) : (
              <Result
                status="404"
                subTitle={t['userInfo.notice.empty']}
                style={{ paddingTop: '60px', paddingBottom: '130px' }}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
