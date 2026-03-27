import { v as vueExports, s as serverRenderer_cjs_prodExports, a as __nuxt_component_0$3, d as _sfc_main$d } from './server.mjs';
import { P as PublicRoutes } from './WebRoutes-BNh2HZDT.mjs';
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

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toolCards = [
      {
        title: "生命讀經每日分配",
        desc: "管理生命讀經的每日分配",
        icon: "i-lucide-book-open",
        color: "bg-sage-100",
        textColor: "text-sage-800",
        size: "normal",
        route: PublicRoutes.LIFE_BIBLE_STUDY
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "max-w-7xl mx-auto px-6 py-10" }, _attrs))}><div class="flex flex-col lg:flex-row gap-10"><div class="flex-1 min-w-0"><div class="mb-8 animate-fade-up"><h1 class="font-display text-4xl md:text-5xl font-bold text-sand-950 leading-tight"> 你的話是我腳前的燈<br>是我路上的光 </h1><p class="text-sm text-sand-400 mt-2"> — 詩篇 119:105 </p></div><div class="grid grid-cols-3 gap-4 animate-fade-up stagger-2"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(toolCards, (card, index) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          key: card.title,
          to: card.route,
          class: [
            "rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
            card.color,
            card.size === "wide" ? "col-span-2 row-span-1" : "",
            index < 2 ? "min-h-[140px]" : "min-h-[130px]"
          ]
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: card.icon,
                class: ["text-2xl mb-4", card.textColor]
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="${serverRenderer_cjs_prodExports.ssrRenderClass(["text-sm font-semibold leading-snug", card.textColor])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(card.title)}</p><p class="${serverRenderer_cjs_prodExports.ssrRenderClass(["text-[11px] mt-1 opacity-70", card.textColor])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(card.desc)}</p></div>`);
            } else {
              return [
                vueExports.createVNode(_component_UIcon, {
                  name: card.icon,
                  class: ["text-2xl mb-4", card.textColor]
                }, null, 8, ["name", "class"]),
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("p", {
                    class: ["text-sm font-semibold leading-snug", card.textColor]
                  }, vueExports.toDisplayString(card.title), 3),
                  vueExports.createVNode("p", {
                    class: ["text-[11px] mt-1 opacity-70", card.textColor]
                  }, vueExports.toDisplayString(card.desc), 3)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="w-full lg:w-[380px] shrink-0 animate-fade-up stagger-3 lg:sticky lg:top-6 lg:self-start"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CkYNTOpf.mjs.map
