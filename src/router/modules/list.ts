import { IRoute } from '../types';

const LIST: IRoute = {
  name: 'menu.list',
  key: 'list',
  children: [
    {
      name: 'menu.list.searchTable',
      key: 'list/search-table',
    },
    {
      name: 'menu.list.cardList',
      key: 'list/card',
    },
  ],
};

export default LIST;
