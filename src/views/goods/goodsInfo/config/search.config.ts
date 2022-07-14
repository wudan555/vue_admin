import { IForm } from '@/base-ui/XbForm/types';
export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入...'
    },
    {
      field: 'nickname',
      type: 'input',
      label: '昵称',
      placeholder: '请输入...'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入...'
    },
    {
      field: 'hobby',
      type: 'select',
      label: '爱好',
      placeholder: '请选择',
      selectOptions: ['篮球', '足球', '乒乓球']
    },
    {
      field: 'date',
      type: 'datepickerDouble',
      label: 'date',
      placeholder: '请选择日期',
      otherOptions: {
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      }
    }
  ]
};
