import xbRequest from '../xbRequest';
import { IXBResponse } from '../baseRequest';

function getRoleInfoByIdReq(data: any): Promise<IXBResponse> {
  return xbRequest.get({
    url: '/permission/getRoleInfoById',
    params: data
  });
}
export { getRoleInfoByIdReq };
