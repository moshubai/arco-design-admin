import { IRoute } from '../types';

const USER: IRoute = {
  name: 'menu.user',
  key: 'user',
  children: [
    {
      name: 'menu.user.info',
      key: 'user/info',
    },
    {
      name: 'menu.user.setting',
      key: 'user/setting',
    },
  ],
};

export default USER;
