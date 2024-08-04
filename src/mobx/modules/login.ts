import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

type Token = string | undefined | null;

class AuthStore {
  token: Token = undefined;
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['token'],
      storage: window.localStorage,
    });
  }

  get getToken(): Token {
    return this.token;
  }

  setToken(val: string): void {
    this.token = val;
  }

  /* 登录 */
  async login() {
    return { code: 200, data: '123' };
  }
}

export default AuthStore;
