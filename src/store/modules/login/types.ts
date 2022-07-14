interface ICurBread {
  name: string;
  path: string;
}
interface ILoginState {
  token: string;
  userId: number;
  userName: string;
  roleId: number;
  menuList: string[];
  roleName: string;
  curBread: ICurBread[];
  curSideTab: string;
}
export { ILoginState };
