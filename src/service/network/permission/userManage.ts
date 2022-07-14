import xbRequest from '../xbRequest';
import { IXBResponse } from '../baseRequest';

function getUserInfoByIdReq(data: any): Promise<IXBResponse> {
  return xbRequest.get({
    url: '/user/getUserInfoById',
    params: data
  });
}
export { getUserInfoByIdReq };
