import { p as pinia_prodExports, v as vueExports, _ as _export_sfc, A as useSeoMeta, c as useRoute$1, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, e as __nuxt_component_1$1, f as _sfc_main$8 } from './server.mjs';
import { a as PrivateRoutes } from './WebRoutes-BNh2HZDT.mjs';
import { u as useUserStore } from './useUserStore-ckiJDiVD.mjs';
import { a as _sfc_main$2 } from './TiptapEditor-D1OA82zc.mjs';
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
import '@tiptap/vue-3';
import '@tiptap/starter-kit';
import '@tiptap/extension-image';
import './Modal-DiUNUWVR.mjs';
import './Input-DnnJ1_4i.mjs';
import './usePageApi-j9CO3CXN.mjs';
import './useRequestApi-BBY0zkpq.mjs';

var Role = /* @__PURE__ */ ((Role2) => {
  Role2["admin"] = "admin";
  Role2["user"] = "user";
  return Role2;
})(Role || {});
const useMenuStore = pinia_prodExports.defineStore("menu", () => {
  const { userInfo } = pinia_prodExports.storeToRefs(useUserStore());
  const adminMenu = [
    { label: "帳號管理", icon: "i-lucide-users", to: PrivateRoutes.ADMIN_ACCOUNT }
  ];
  const menuItems = vueExports.computed(() => [
    { label: "個人資料", icon: "i-lucide-layout-dashboard", to: PrivateRoutes.ADMIN_HOME },
    { label: "一頁網站", icon: "i-lucide-layout-template", to: PrivateRoutes.ADMIN_WEBSITE },
    { label: "聊天機器人", icon: "i-lucide-bot", to: PrivateRoutes.ADMIN_CHATBOT },
    ...userInfo.value.role === Role.admin ? adminMenu : []
    // { label: '圖片管理', icon: 'i-lucide-image', to: PrivateRoutes.ADMIN_IMAGE },
  ]);
  return {
    menuItems
  };
});

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "小羊天地 - 後台管理"
    });
    const state = vueExports.ref({
      feature: {
        sidebarCollapsed: false,
        mobileOpen: false
      }
    });
    const menuStore = useMenuStore();
    const { menuItems } = pinia_prodExports.storeToRefs(menuStore);
    const route = useRoute$1();
    vueExports.watch(() => route.path, () => {
      state.value.feature.mobileOpen = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen flex bg-sand-50" }, _attrs))} data-v-ae7255be>`);
      if (vueExports.unref(state).feature.mobileOpen) {
        _push(`<div class="fixed inset-0 bg-black/30 z-40 lg:hidden" data-v-ae7255be></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<aside class="${serverRenderer_cjs_prodExports.ssrRenderClass([
        "fixed top-0 left-0 h-screen bg-white border-r border-sand-200 flex flex-col z-50 transition-all duration-300",
        "max-lg:-translate-x-full max-lg:w-[240px]",
        vueExports.unref(state).feature.mobileOpen ? "max-lg:translate-x-0" : "",
        vueExports.unref(state).feature.sidebarCollapsed ? "lg:w-[68px]" : "lg:w-[240px]"
      ])}" data-v-ae7255be><div class="h-16 flex items-center gap-2.5 px-5 border-b border-sand-200 shrink-0" data-v-ae7255be><div class="w-8 h-8 bg-sand-950 rounded-lg flex items-center justify-center shrink-0" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-church",
        class: "text-white text-lg"
      }, null, _parent));
      _push(`</div><span class="font-display text-lg font-semibold text-sand-950 tracking-tight truncate" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(!vueExports.unref(state).feature.sidebarCollapsed || vueExports.unref(state).feature.mobileOpen ? null : { display: "none" })}" data-v-ae7255be> 小羊天地 </span></div><nav class="flex-1 py-4 px-3 space-y-1" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</nav><div class="px-3 pb-2" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
        collapsed: vueExports.unref(state).feature.sidebarCollapsed && !vueExports.unref(state).feature.mobileOpen
      }, null, _parent));
      _push(`</div><div class="hidden lg:block p-3 border-t border-sand-200" data-v-ae7255be><button class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sand-400 hover:bg-sand-100 hover:text-sand-600 transition-all duration-200" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: vueExports.unref(state).feature.sidebarCollapsed ? "i-lucide-chevrons-right" : "i-lucide-chevrons-left",
        class: "text-lg"
      }, null, _parent));
      _push(`<span class="text-xs font-medium" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(!vueExports.unref(state).feature.sidebarCollapsed ? null : { display: "none" })}" data-v-ae7255be> 收合選單 </span></button></div></aside><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([
        "flex-1 flex flex-col transition-all duration-300",
        vueExports.unref(state).feature.sidebarCollapsed ? "lg:ml-[68px]" : "lg:ml-[240px]"
      ])}" data-v-ae7255be><header class="sticky top-0 z-30 h-16 bg-sand-50/80 backdrop-blur-xl border-b border-sand-200 flex items-center justify-between px-6" data-v-ae7255be><div class="flex items-center gap-3" data-v-ae7255be><button class="lg:hidden text-sand-500 hover:text-sand-800 transition-colors" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-menu",
        class: "text-xl"
      }, null, _parent));
      _push(`</button><h1 class="text-lg font-semibold text-sand-950" data-v-ae7255be>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(menuItems).find((item) => vueExports.unref(route).path.startsWith(item.to))?.label || "控制台")}</h1></div><div class="flex items-center gap-3" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-bell",
        color: "neutral",
        variant: "ghost",
        class: "text-sand-500"
      }, null, _parent));
      _push(`<div class="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center" data-v-ae7255be>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-user",
        class: "text-sage-600"
      }, null, _parent));
      _push(`</div></div></header><main class="flex-1 p-6" data-v-ae7255be>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae7255be"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-OLUf31gk.mjs.map
