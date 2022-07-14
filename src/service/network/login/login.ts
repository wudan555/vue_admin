import { xbRequest } from '@/service';
import { IXBResponse } from '../baseRequest';

function accountLoginRequest(data: any): Promise<IXBResponse> {
  return xbRequest.request({
    method: 'post',
    url: '/login/accountLogin',
    data: data
  });
}
function logout(): Promise<IXBResponse> {
  return xbRequest.request({
    method: 'get',
    url: '/login/logout'
  });
}

export { accountLoginRequest, logout };
