import { ITable } from '@/base-ui/XbTable';

export const tableConfig: ITable = {
  tableItems: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realName', label: '真实姓名', minWidth: '100' },
    { prop: 'phone', label: '手机号', minWidth: '100' },
    { prop: 'enable', label: '开启/禁用', minWidth: '100', slotName: 'state' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '修改时间',
      minWidth: '100',
      slotName: 'updateAt'
    }
  ],
  /* table中的其他属性 */
  otherOptions: {
    border: true
  },
  isShowIndex: true,
  isShowSelection: true,
  isShowHandleCol: true
};
