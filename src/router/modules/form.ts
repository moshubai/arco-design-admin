import { IRoute } from '../types';

const FORM: IRoute = {
  name: 'menu.form',
  key: 'form',
  children: [
    {
      name: 'menu.form.group',
      key: 'form/group',
      requiredPermissions: [
        { resource: 'menu.form.group', actions: ['read', 'write'] },
      ],
    },
    {
      name: 'menu.form.step',
      key: 'form/step',
      requiredPermissions: [{ resource: 'menu.form.step', actions: ['read'] }],
    },
  ],
};

export default FORM;
