import { App } from 'vue';
import { formatUTCString } from '@/utils/dateFormat';

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    name: 'test',
    foo() {
      console.log(111);
    },
    formatUTCDate(utcString: string) {
      return formatUTCString(utcString);
    }
  };
}
