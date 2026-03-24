import { I as executeAsync } from '../nitro/nitro.mjs';
import { x as defineNuxtRouteMiddleware, z as useCookie, C as CookieEnums, q as navigateTo } from './server.mjs';
import { P as PublicRoutes, a as PrivateRoutes } from './WebRoutes-n3W7kvN8.mjs';
import { u as useUserApi } from './useUserApi-CMFLOU8c.mjs';
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
import './useRequestApi-Dzr3oiLa.mjs';

const guest = defineNuxtRouteMiddleware(async (to) => {
  let __temp, __restore;
  const refreshToken = useCookie(CookieEnums.RefreshToken).value;
  if (!refreshToken) {
    if (to.path === PublicRoutes.LOGIN) return;
    return navigateTo(PublicRoutes.LOGIN);
  }
  const { error } = ([__temp, __restore] = executeAsync(() => useUserApi.showMe()), __temp = await __temp, __restore(), __temp);
  if (!error.value) {
    return navigateTo(PrivateRoutes.ADMIN_HOME);
  }
});

export { guest as default };
//# sourceMappingURL=guest-Ch0uqjsO.mjs.map
