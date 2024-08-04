import { IRoute } from '../types';

const PROFILE: IRoute = {
  name: 'menu.profile',
  key: 'profile',
  children: [
    {
      name: 'menu.profile.basic',
      key: 'profile/basic',
    },
  ],
};

export default PROFILE;
