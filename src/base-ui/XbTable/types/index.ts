export interface ITableItems {
  prop: string;
  label: string;
  minWidth?: string;
  slotName?: string;
  otherOptions?: any;
}

export interface ITable {
  tableItems: ITableItems[];
  otherOptions?: any;
  isShowIndex?: boolean;
  isShowSelection?: boolean;
  isShowHandleCol?: boolean;
}
