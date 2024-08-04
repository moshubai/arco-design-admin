import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import defaultSettings from '../../settings.json';
import axios from 'axios';

export interface UserInfo {
  name?: string;
  avatar?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  permissions: Record<string, string[]>;
}

class AppStore {
  settings = defaultSettings;
  userInfo: UserInfo = {
    permissions: {},
  };
  userLoading: boolean = false;
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'defaultSettings',
      properties: ['userInfo'],
      storage: window.localStorage,
    });
  }

  get getUserInfo(): UserInfo {
    return this.userInfo;
  }

  setRole(val: any): void {
    this.userInfo = {
      ...this.userInfo,
      permissions: val,
    };
  }
  setSetting(val): void {
    this.settings = {
      ...val,
    };
  }
  setUserInfo(val) {
    this.userInfo = {
      ...val,
    };
  }

  /* 登录 */
}

export default AppStore;
