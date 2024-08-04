import { IRoute } from '../types';

const RESULT: IRoute = {
  name: 'menu.result',
  key: 'result',
  children: [
    {
      name: 'menu.result.success',
      key: 'result/success',
      breadcrumb: false,
    },
    {
      name: 'menu.result.error',
      key: 'result/error',
      breadcrumb: false,
    },
  ],
};

export default RESULT;
