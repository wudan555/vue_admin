import { App } from 'vue';
import { ElMessage } from 'element-plus';

export function defineGlobalVar(app: App) {
  app.config.globalProperties.$message = ElMessage.install;
}
