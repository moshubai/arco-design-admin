import { IRoute } from '../types';

const VISUALIZATION: IRoute = {
  name: 'menu.visualization',
  key: 'visualization',
  children: [
    {
      name: 'menu.visualization.dataAnalysis',
      key: 'visualization/data-analysis',
      requiredPermissions: [
        { resource: 'menu.visualization.dataAnalysis', actions: ['read'] },
      ],
    },
    {
      name: 'menu.visualization.multiDimensionDataAnalysis',
      key: 'visualization/multi-dimension-data-analysis',
      requiredPermissions: [
        {
          resource: 'menu.visualization.dataAnalysis',
          actions: ['read', 'write'],
        },
        {
          resource: 'menu.visualization.multiDimensionDataAnalysis',
          actions: ['write'],
        },
      ],
      oneOfPerm: true,
    },
  ],
};

export default VISUALIZATION;
