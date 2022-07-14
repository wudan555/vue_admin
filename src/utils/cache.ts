interface ICacheIndexType {
  [index: string]: string;
  IS_KEEP_PWD: string;
  TOKEN: string;
  USER_ID: string;
  USER_NAME: string;
  PASS_WARD: string;
  ROLE_ID: string;
  ROLE_NAME: string;
  MENU_LIST: string;
}
class LocalCache {
  storage = window.localStorage;
  setCache(key: string, value: string, expires: number = 1000 * 60 * 60 * 5) {
    const data = {
      value: value,
      curTime: Date.now(),
      expires: expires
    };
    this.storage.setItem(key, JSON.stringify(data));
  }
  getCache(key: string) {
    const v = this.storage.getItem(key);
    if (v) {
      const jsonv = JSON.parse(v);
      const oldDate = jsonv.curTime as number;
      const expires = jsonv.expires as number;
      if (expires) {
        const space = Date.now() - oldDate;
        if (space < expires) {
          return jsonv.value;
        } else {
          this.removeCache(key);
          return null;
        }
      }
      return jsonv.value;
    }
    return null;
  }
  removeCache(key: string) {
    this.storage.removeItem(key);
  }
  clearCache() {
    for (const item in this.cacheItems) {
      this.removeCache(this.cacheItems[item]);
    }
    /* setTimeout(() => {
      this.storage.clear();
    }, 1000); */
  }

  cacheItems: ICacheIndexType = {
    IS_KEEP_PWD: 'isKeepPwd',
    TOKEN: 'token',
    USER_ID: 'userId',
    USER_NAME: 'userName',
    PASS_WARD: 'password',
    ROLE_ID: 'roleId',
    ROLE_NAME: 'roleName',
    MENU_LIST: 'menuList'
  };
}
const localCache = new LocalCache();
export default localCache;
