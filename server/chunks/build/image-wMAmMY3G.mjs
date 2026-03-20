import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d } from './server.mjs';
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
  __name: "image",
  __ssrInlineRender: true,
  setup(__props) {
    const state = vueExports.ref({
      data: {
        images: [
          {
            id: "1",
            name: "主日崇拜封面",
            url: "https://picsum.photos/seed/church1/400/300",
            folder: "崇拜",
            size: "2.4 MB",
            uploadedAt: "2026-03-10"
          },
          {
            id: "2",
            name: "小組聚會照片",
            url: "https://picsum.photos/seed/church2/400/300",
            folder: "小組",
            size: "1.8 MB",
            uploadedAt: "2026-03-08"
          },
          {
            id: "3",
            name: "教會外觀",
            url: "https://picsum.photos/seed/church3/400/300",
            folder: "教會",
            size: "3.1 MB",
            uploadedAt: "2026-03-05"
          },
          {
            id: "4",
            name: "青年團契活動",
            url: "https://picsum.photos/seed/church4/400/300",
            folder: "團契",
            size: "2.0 MB",
            uploadedAt: "2026-03-03"
          },
          {
            id: "5",
            name: "聖誕節佈置",
            url: "https://picsum.photos/seed/church5/400/300",
            folder: "節慶",
            size: "4.2 MB",
            uploadedAt: "2026-02-28"
          },
          {
            id: "6",
            name: "詩班練習",
            url: "https://picsum.photos/seed/church6/400/300",
            folder: "崇拜",
            size: "1.5 MB",
            uploadedAt: "2026-02-25"
          },
          {
            id: "7",
            name: "兒童主日學",
            url: "https://picsum.photos/seed/church7/400/300",
            folder: "教育",
            size: "2.7 MB",
            uploadedAt: "2026-02-20"
          },
          {
            id: "8",
            name: "洗禮典禮",
            url: "https://picsum.photos/seed/church8/400/300",
            folder: "崇拜",
            size: "3.5 MB",
            uploadedAt: "2026-02-15"
          }
        ],
        folders: ["全部", "崇拜", "小組", "教會", "團契", "節慶", "教育"]
      },
      feature: {
        activeFolder: "全部",
        viewMode: "grid",
        selectedImages: []
      }
    });
    const filteredImages = vueExports.computed(() => {
      if (state.value.feature.activeFolder === "全部") return state.value.data.images;
      return state.value.data.images.filter((img) => img.folder === state.value.feature.activeFolder);
    });
    const isSelected = (id) => state.value.feature.selectedImages.includes(id);
    const selectedCount = vueExports.computed(() => state.value.feature.selectedImages.length);
    const clearSelection = () => {
      state.value.feature.selectedImages = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full animate-fade-up" }, _attrs))}><div class="mb-8 flex items-center justify-between"><div><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 圖片管理 </h2><p class="text-sm text-sand-500"> 管理你的圖片素材庫 </p></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-upload",
        label: "上傳圖片",
        class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between mb-6"><div class="flex gap-1 bg-sand-100 rounded-xl p-1 overflow-x-auto"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(state).data.folders, (folder) => {
        _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(state).feature.activeFolder === folder ? "bg-white text-sand-950 shadow-sm" : "text-sand-500 hover:text-sand-700", "px-3 py-1.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(folder)}</button>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-1 bg-sand-100 rounded-xl p-1 ml-4 shrink-0"><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(state).feature.viewMode === "grid" ? "bg-white text-sand-950 shadow-sm" : "text-sand-400 hover:text-sand-600", "p-1.5 rounded-lg transition-all"])}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-grid-2x2",
        class: "size-4"
      }, null, _parent));
      _push(`</button><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(state).feature.viewMode === "list" ? "bg-white text-sand-950 shadow-sm" : "text-sand-400 hover:text-sand-600", "p-1.5 rounded-lg transition-all"])}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-list",
        class: "size-4"
      }, null, _parent));
      _push(`</button></div></div>`);
      if (vueExports.unref(selectedCount) > 0) {
        _push(`<div class="mb-4 flex items-center justify-between bg-sage-50 border border-sage-200 rounded-xl px-4 py-2.5"><span class="text-sm text-sage-700 font-medium"> 已選擇 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(selectedCount))} 張圖片 </span><div class="flex gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-trash-2",
          label: "刪除",
          variant: "ghost",
          color: "error",
          size: "sm",
          class: "rounded-lg"
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          icon: "i-lucide-x",
          label: "取消",
          variant: "ghost",
          color: "neutral",
          size: "sm",
          class: "rounded-lg",
          onClick: clearSelection
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(state).feature.viewMode === "grid") {
        _push(`<div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(filteredImages), (image) => {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([isSelected(image.id) ? "ring-2 ring-sage-500 border-sage-300" : "", "group relative bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"])}"><div class="aspect-4/3 overflow-hidden bg-sand-100"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", image.url)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", image.name)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"></div><div class="p-3"><p class="text-sm font-medium text-sand-950 truncate">${serverRenderer_cjs_prodExports.ssrInterpolate(image.name)}</p><div class="flex items-center justify-between mt-1"><span class="text-xs text-sand-400">${serverRenderer_cjs_prodExports.ssrInterpolate(image.size)}</span><span class="text-xs text-sand-400 bg-sand-100 px-2 py-0.5 rounded-full">${serverRenderer_cjs_prodExports.ssrInterpolate(image.folder)}</span></div></div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([isSelected(image.id) ? "bg-sage-600 border-sage-600" : "border-white/80 bg-black/20 opacity-0 group-hover:opacity-100", "absolute top-2 right-2 size-6 rounded-full border-2 flex items-center justify-center transition-all"])}">`);
          if (isSelected(image.id)) {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-check",
              class: "size-3.5 text-white"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="space-y-2"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(filteredImages), (image) => {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([isSelected(image.id) ? "ring-2 ring-sage-500 border-sage-300" : "", "bg-white rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow px-4 py-3 flex items-center gap-4 cursor-pointer"])}"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([isSelected(image.id) ? "bg-sage-600 border-sage-600" : "border-sand-300", "size-5 rounded border-2 flex items-center justify-center shrink-0 transition-all"])}">`);
          if (isSelected(image.id)) {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-check",
              class: "size-3 text-white"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="size-12 rounded-xl overflow-hidden bg-sand-100 shrink-0"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", image.url)}${serverRenderer_cjs_prodExports.ssrRenderAttr("alt", image.name)} class="w-full h-full object-cover"></div><div class="flex-1 min-w-0"><p class="text-sm font-medium text-sand-950 truncate">${serverRenderer_cjs_prodExports.ssrInterpolate(image.name)}</p><p class="text-xs text-sand-400">${serverRenderer_cjs_prodExports.ssrInterpolate(image.uploadedAt)}</p></div><span class="text-xs text-sand-400 bg-sand-100 px-2 py-0.5 rounded-full shrink-0">${serverRenderer_cjs_prodExports.ssrInterpolate(image.folder)}</span><span class="text-xs text-sand-400 shrink-0">${serverRenderer_cjs_prodExports.ssrInterpolate(image.size)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (vueExports.unref(filteredImages).length === 0) {
        _push(`<div class="text-center py-16">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-image-off",
          class: "size-12 text-sand-300 mx-auto mb-3"
        }, null, _parent));
        _push(`<p class="text-sand-500 font-medium"> 此分類尚無圖片 </p><p class="text-sm text-sand-400 mt-1"> 點擊上方「上傳圖片」新增素材 </p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=image-wMAmMY3G.mjs.map
