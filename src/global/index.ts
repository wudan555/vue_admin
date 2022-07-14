import { App } from 'vue';
import { registerComponent } from './registerElement';
import registerProperties from './registerProperties';

export function registerApp(app: App): void {
  registerComponent(app);
  registerProperties(app);
}
