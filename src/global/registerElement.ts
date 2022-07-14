/* elementPlus组件库的封装 */
import { App } from 'vue';
import 'element-plus/dist/index.css';
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElButton,
  ElCheckbox,
  ElForm,
  ElInput,
  ElTable,
  ElTableColumn,
  ElTabPane,
  ElTabs,
  ElCard,
  ElTimeSelect,
  ElIcon,
  ElSelect,
  ElOption,
  ElFormItem,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDatePicker,
  ElRow,
  ElCol,
  ElCheckboxGroup,
  ElSwitch,
  ElConfigProvider,
  ElDialog
} from 'element-plus';

import { Edit, Iphone, User, ArrowDown } from '@element-plus/icons';

export function registerComponent(app: App): void {
  const components = [
    ElConfigProvider,
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElFooter,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElRow,
    ElCol,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElButton,
    ElTable,
    ElTableColumn,
    ElTabs,
    ElCard,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElTimeSelect,
    ElCheckboxGroup,
    ElCheckbox,
    ElIcon,
    ElDatePicker,
    ElSwitch,
    ElDialog,
    /* 图标库 */
    Edit,
    Iphone,
    User,
    ArrowDown
  ];

  for (const item of components) {
    app.component(item.name, item);
  }
}
