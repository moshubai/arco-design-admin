import React from 'react';
import AuthStore from './modules/login';
import AppStore from './modules/app';

class RootStore {
  useAuthStore: AuthStore;
  useAppStore: AppStore;
  constructor() {
    this.useAuthStore = new AuthStore();
    this.useAppStore = new AppStore();
  }
}

export default new RootStore();
