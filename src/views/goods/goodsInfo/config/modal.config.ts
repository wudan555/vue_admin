import { IModal } from '../cpns/modal/index';
export const modalConfig: IModal = {
  formConfig: {
    formItems: [
      {
        field: 'name',
        type: 'input',
        label: '用户名',
        placeholder: '请输入...'
      },
      {
        field: 'realName',
        type: 'input',
        label: '真实姓名',
        placeholder: '请输入...'
      },
      {
        field: 'password',
        type: 'password',
        label: '密码',
        placeholder: '请输入...'
      },
      {
        field: 'phone',
        type: 'input',
        label: '电话号码',
        placeholder: '请输入...'
      },
      {
        field: 'roles',
        type: 'select',
        label: '选择角色',
        placeholder: '请选择',
        selectOptions: []
      },
      {
        field: 'departments',
        type: 'select',
        label: '选择部门',
        placeholder: '请选择',
        selectOptions: []
      }
    ]
  },
  dynamicFormItems: ['departments', 'roles'],
  title: '新建用户'
};
