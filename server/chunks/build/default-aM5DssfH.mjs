import { v as vueExports, u as useHead, aa as useSeoMeta, s as serverRenderer_cjs_prodExports, a as __nuxt_component_0$3, d as _sfc_main$d } from './server.mjs';
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

const title = "小羊天地";
const description = "";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" }
      ],
      htmlAttrs: {
        lang: "zh-TW"
      }
    });
    useSeoMeta({
      title,
      description,
      ogTitle: title,
      ogDescription: description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen flex flex-col bg-sand-50" }, _attrs))}><header class="sticky top-0 z-50 bg-sand-50/80 backdrop-blur-xl border-b border-sand-200"><div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 group"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-8 h-8 bg-sand-950 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-church",
              class: "text-white text-lg"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="font-display text-xl font-semibold text-sand-950 tracking-tight"${_scopeId}>小羊天地</span>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "w-8 h-8 bg-sand-950 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform" }, [
                vueExports.createVNode(_component_UIcon, {
                  name: "i-lucide-church",
                  class: "text-white text-lg"
                })
              ]),
              vueExports.createVNode("span", { class: "font-display text-xl font-semibold text-sand-950 tracking-tight" }, "小羊天地")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="flex-1">`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-sand-200 bg-sand-50"><div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-sm text-sand-400"> © ${serverRenderer_cjs_prodExports.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 小羊天地 </p></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-aM5DssfH.mjs.map
