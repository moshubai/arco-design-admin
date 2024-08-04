import { IRoute } from '../types';

const EXCEPTION: IRoute = {
  name: 'menu.exception',
  key: 'exception',
  children: [
    {
      name: 'menu.exception.403',
      key: 'exception/403',
    },
    {
      name: 'menu.exception.404',
      key: 'exception/404',
    },
    {
      name: 'menu.exception.500',
      key: 'exception/500',
    },
  ],
};

export default EXCEPTION;
