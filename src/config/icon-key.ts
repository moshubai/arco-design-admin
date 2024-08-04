import {
  IconDashboard,
  IconList,
  IconSettings,
  IconFile,
  IconApps,
  IconCheckCircle,
  IconExclamationCircle,
  IconUser,
} from '@arco-design/web-react/icon';
import { createElement } from 'react';
import styles from '../style/layout.module.less';
/**
 * 根据键值获取对应的图标组件。
 * @param key 键值，用于选择对应的图标。
 * @returns 返回对应的图标组件或一个空的图标占位符。
 */

export function getIconFromKey(key: string) {
  switch (key) {
    case 'dashboard':
      return createElement(IconDashboard, { className: styles.icon });
    case 'list':
      return createElement(IconList, { className: styles.icon });
    case 'form':
      return createElement(IconSettings, { className: styles.icon });
    case 'profile':
      return createElement(IconFile, { className: styles.icon });
    case 'visualization':
      return createElement(IconApps, { className: styles.icon });
    case 'result':
      return createElement(IconCheckCircle, { className: styles.icon });
    case 'exception':
      return createElement(IconExclamationCircle, { className: styles.icon });
    case 'user':
      return createElement(IconUser, { className: styles.icon });
    default:
      return createElement('div', { className: styles['icon-empty'] });
  }
}
