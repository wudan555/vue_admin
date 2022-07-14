import { IForm } from '@/base-ui/XbForm';

export interface IModal {
  formConfig: IForm;
  title: string;
  dialogOtherOptions?: any;
  dynamicFormItems?: string[];
}
