type TFormItemType = 'input' | 'password' | 'select' | 'datepickerDouble';
export interface IFormItem {
  field: string;
  type: TFormItemType;
  label: string;
  placeholder: string;
  selectOptions?: any; // 数组
  otherOptions?: any; // elementui自身的一些参数传递，一个对象
  isHiddenItem?: boolean;
}
/* IForm类型封装为了方便调用者知道传入哪些参数  可以使用v-bind将所有参数以对象的方式传入 */
export interface IForm {
  formItems: IFormItem[];
  headerStyle?: any;
  itemStyle?: any; // style传入一个对象
  footerStyle?: any;
  labelWidth?: string;
  elColLayout?: any;
}
