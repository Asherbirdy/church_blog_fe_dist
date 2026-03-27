import { v as vueExports, p as pinia_prodExports, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, e as __nuxt_component_1$1, f as _sfc_main$8 } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-DnnJ1_4i.mjs';
import { u as useUserStore } from './useUserStore-ckiJDiVD.mjs';
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
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { userInfo, isLoading } = pinia_prodExports.storeToRefs(useUserStore());
    const state = vueExports.ref({
      data: {},
      feature: {
        isEditing: false,
        form: {
          name: "",
          email: ""
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_UInput = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "max-w-2xl animate-fade-up" }, _attrs))}><div class="mb-8"><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 個人資料 </h2><p class="text-sm text-sand-500"> 管理你的帳號資訊 </p></div><div class="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden"><div class="bg-sage-50 px-6 py-8 flex items-center gap-5 border-b border-sand-200"><div class="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center shrink-0">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-user",
        class: "text-sage-600 text-2xl"
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {
        fallback: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-6 w-24 bg-sand-200 rounded animate-pulse mb-1"${_scopeId}></div><div class="h-4 w-48 bg-sand-100 rounded animate-pulse"${_scopeId}></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "h-6 w-24 bg-sand-200 rounded animate-pulse mb-1" }),
              vueExports.createVNode("div", { class: "h-4 w-48 bg-sand-100 rounded animate-pulse" })
            ];
          }
        })
      }, _parent));
      _push(`</div></div><div class="p-6 space-y-5"><div><label class="text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block"> 姓名 </label>`);
      if (!vueExports.unref(state).feature.isEditing) {
        _push(`<div class="flex items-center gap-3 text-sand-800">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-user",
          class: "text-sand-400 shrink-0"
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {
          fallback: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="h-4 w-20 bg-sand-200 rounded animate-pulse"${_scopeId}></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "h-4 w-20 bg-sand-200 rounded animate-pulse" })
              ];
            }
          })
        }, _parent));
        _push(`</div>`);
      } else {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(state).feature.form.name,
          "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.form.name = $event,
          icon: "i-lucide-user",
          size: "lg",
          ui: { base: "rounded-xl" }
        }, null, _parent));
      }
      _push(`</div><div><label class="text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block"> 電子信箱 </label>`);
      if (!vueExports.unref(state).feature.isEditing) {
        _push(`<div class="flex items-center gap-3 text-sand-800">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-mail",
          class: "text-sand-400 shrink-0"
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {
          fallback: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="h-4 w-36 bg-sand-200 rounded animate-pulse"${_scopeId}></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "h-4 w-36 bg-sand-200 rounded animate-pulse" })
              ];
            }
          })
        }, _parent));
        _push(`</div>`);
      } else {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(state).feature.form.email,
          "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.form.email = $event,
          type: "email",
          icon: "i-lucide-mail",
          size: "lg",
          ui: { base: "rounded-xl" }
        }, null, _parent));
      }
      _push(`</div></div><div class="px-6 py-4 border-t border-sand-100 flex justify-end gap-3">`);
      if (vueExports.unref(state).feature.isEditing) {
        _push(`<!--[-->`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          label: "取消",
          color: "neutral",
          variant: "outline",
          class: "rounded-xl",
          onClick: ($event) => vueExports.unref(state).feature.isEditing = false
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          label: "儲存",
          class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700"
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-BPQXCJCK.mjs.map
