import { v as vueExports, c as useRoute$1, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { u as usePageApi } from './usePageApi-fP8DsBNG.mjs';
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
import './useRequestApi-Cl5I5_Vv.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[routeName]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const routeName = route.params.routeName;
    const { data } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.getByRouteName(routeName)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen bg-sand-50" }, _attrs))}>`);
      if (vueExports.unref(data)?.page) {
        _push(`<div class="prose prose-sand mx-auto max-w-4xl px-6 py-8">${vueExports.unref(data).page.onlineHtml ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/C/[routeName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_routeName_-DEJK5Kmg.mjs.map
