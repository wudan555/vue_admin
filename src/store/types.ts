import { ILoginState } from './modules/login/types';

interface IRootWithModules {
  loginStore: ILoginState;
}
interface IRootState {
  loginStore?: ILoginState;
  rolesList: any;
  departmentsList: any;
}
type IStoreType = IRootState & IRootWithModules;
export { IRootState, IRootWithModules, IStoreType };
