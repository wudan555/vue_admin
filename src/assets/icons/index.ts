import { App } from 'vue';
import SvgIcon from '@/components/svgIcon/SvgIcon.vue'; // svg组件

export function requireAllSvgIcons(app: App) {
  // register globally
  app.component('svg-icon', SvgIcon);
  // import all svg
  const requireAll = (requireContext: any) => {
    requireContext.keys().map(requireContext);
  };
  const req = require.context('./svg', true, /\.svg$/);
  requireAll(req);
}
