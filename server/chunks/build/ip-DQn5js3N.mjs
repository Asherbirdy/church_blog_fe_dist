import { v as vueExports, s as serverRenderer_cjs_prodExports, P as PublicRequestUrl } from './server.mjs';
import { u as useRequestApi } from './useRequestApi-Dzr3oiLa.mjs';
import '../nitro/nitro.mjs';
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

const useDevApi = {
  get: async () => {
    return await useRequestApi(PublicRequestUrl.DevCheckIp, {
      method: "GET",
      server: false,
      lazy: true
    });
  }
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ip",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = vueExports.withAsyncContext(() => useDevApi.get()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}>DATA:${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(data))}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ip-DQn5js3N.mjs.map
