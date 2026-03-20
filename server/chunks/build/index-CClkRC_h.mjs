import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, q as navigateTo, d as _sfc_main$d } from './server.mjs';
import { u as usePageApi } from './usePageApi-fP8DsBNG.mjs';
import { _ as _sfc_main$6 } from './TiptapEditor-zv2nBLfK.mjs';
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
import '@tiptap/vue-3';
import '@tiptap/starter-kit';
import '@tiptap/extension-image';
import './Modal-CljMPy8a.mjs';
import './Input-BoQpFAq3.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = vueExports.ref({
      data: {},
      feature: {
        activeTab: "online"
      }
    });
    const { data, status } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.getAll()), __temp = await __temp, __restore(), __temp);
    const pages = vueExports.computed(() => data.value?.pages ?? []);
    const tabs = [
      { key: "online", label: "上線中" },
      { key: "offline", label: "未上線" },
      { key: "scheduledOnline", label: "安排上線中" },
      { key: "scheduledOffline", label: "安排下線中" }
    ];
    const statusMap = {
      online: { label: "上線中", dotClass: "bg-emerald-500" },
      offline: { label: "未上線", dotClass: "bg-sand-300" }
    };
    const getStatus = (status2) => statusMap[status2] || statusMap.offline;
    const filteredPages = vueExports.computed(() => {
      const tab = state.value.feature.activeTab;
      if (tab === "scheduledOnline" || tab === "scheduledOffline") {
        return pages.value.filter((p) => p.setStatus === tab);
      }
      return pages.value.filter((p) => p.status === tab);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "max-w-4xl animate-fade-up" }, _attrs))}><div class="mb-8 flex items-center justify-between"><div><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 一頁網站 </h2><p class="text-sm text-sand-500"> 管理你的一頁網站 </p></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
        disabled: vueExports.unref(status) === "pending"
      }, null, _parent));
      _push(`</div><div class="flex gap-1 mb-6 bg-sand-100 rounded-xl p-1 w-fit"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(tabs, (tab) => {
        _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(state).feature.activeTab === tab.key ? "bg-white text-sand-950 shadow-sm" : "text-sand-500 hover:text-sand-700", "px-4 py-2 text-sm font-medium rounded-lg transition-all"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><div class="space-y-3"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(filteredPages), (page) => {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow px-5 py-4 flex items-center justify-between"><p class="text-sand-950 font-semibold truncate">${serverRenderer_cjs_prodExports.ssrInterpolate(page.name)}</p><div class="flex items-center gap-3 shrink-0"><div class="flex items-center gap-1.5"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([getStatus(page.status)?.dotClass, "w-2 h-2 rounded-full"])}"></span><span class="text-xs text-sand-500 font-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(getStatus(page.status)?.label)}</span></div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-pencil",
          variant: "ghost",
          color: "neutral",
          class: "rounded-xl",
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : vueExports.unref(navigateTo))(`/admin/website/${page.id}`)
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (vueExports.unref(status) === "pending") {
        _push(`<!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(3, (i) => {
          _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm px-5 py-4 flex items-center justify-between animate-pulse"><div class="h-5 w-32 rounded bg-sand-200"></div><div class="flex items-center gap-3"><div class="h-4 w-16 rounded bg-sand-200"></div><div class="h-8 w-8 rounded-xl bg-sand-200"></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else if (vueExports.unref(filteredPages).length === 0) {
        _push(`<div class="flex flex-col items-center justify-center py-16 text-sand-400">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-file-x",
          class: "text-4xl mb-3"
        }, null, _parent));
        _push(`<p class="text-sm"> 沒有任何內容 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/website/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CClkRC_h.mjs.map
