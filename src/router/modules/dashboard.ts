import { IRoute } from '../types';

const DASHBOARD: IRoute = {
  name: 'menu.dashboard',
  key: 'dashboard',
  children: [
    {
      name: 'menu.dashboard.workplace',
      key: 'dashboard/workplace',
    },
    {
      name: 'menu.dashboard.monitor',
      key: 'dashboard/monitor',
      requiredPermissions: [
        { resource: 'menu.dashboard.monitor', actions: ['write'] },
      ],
    },
  ],
};

export default DASHBOARD;
