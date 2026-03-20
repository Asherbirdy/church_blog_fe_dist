import { I as executeAsync } from '../nitro/nitro.mjs';
import { x as defineNuxtRouteMiddleware, h as clearNuxtData, y as clearNuxtState, q as navigateTo } from './server.mjs';
import { P as PublicRoutes } from './WebRoutes-n3W7kvN8.mjs';
import { u as useUserApi } from './useUserApi-BL-Lt0mc.mjs';
import { u as useUserStore } from './useUserStore-ckiJDiVD.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'tailwindcss/colors';
import 'vue-dompurify-html';
import 'node:stream';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue';
import './useRequestApi-Cl5I5_Vv.mjs';

const auth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { setUserInfo, setLoading } = useUserStore();
  setLoading(true);
  const { data, error } = ([__temp, __restore] = executeAsync(() => useUserApi.showMe()), __temp = await __temp, __restore(), __temp);
  setLoading(false);
  if (error.value) {
    clearNuxtData();
    clearNuxtState();
    return navigateTo(PublicRoutes.LOGIN);
  }
  if (data.value && !error.value) {
    setUserInfo(data.value.user);
  }
});

export { auth as default };
//# sourceMappingURL=auth-DQLXgmtI.mjs.map
