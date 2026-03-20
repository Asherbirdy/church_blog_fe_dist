import { v as vueExports, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, f as _sfc_main$8 } from './server.mjs';
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
    const dayLabels = ["週一", "週二", "週三", "週四", "週五", "週六", "主日"];
    const state = vueExports.ref({
      data: {
        inputText: "",
        paragraphs: [],
        errorMessage: ""
      },
      feature: {
        copied: false,
        draggedPara: null
      }
    });
    const distribution = vueExports.computed(() => {
      const dist = Array.from({ length: 7 }, () => []);
      state.value.data.paragraphs.forEach((para) => {
        dist[para.dayIndex]?.push(para);
      });
      return dist;
    });
    const stats = vueExports.computed(
      () => distribution.value.map((day) => day.reduce((sum, para) => sum + para.content.length, 0))
    );
    const totalChars = vueExports.computed(
      () => stats.value.reduce((sum, count) => sum + count, 0)
    );
    const hasResult = vueExports.computed(() => state.value.data.paragraphs.length > 0);
    const distributeParagraphs = () => {
      const text = state.value.data.inputText.trim();
      if (!text) return;
      const paras = text.split(/\n\s*\n/).filter((p) => p.trim());
      if (paras.length === 0) return;
      const totalCharsCount = paras.reduce((sum, p) => sum + p.length, 0);
      const targetCharsPerDay = Math.ceil(totalCharsCount / 7);
      const newParagraphs = [];
      let currentDayIndex = 0;
      let currentCharCount = 0;
      paras.forEach((content, index) => {
        const paraLength = content.length;
        if (currentCharCount + paraLength > targetCharsPerDay && currentDayIndex < 6 && newParagraphs.filter((p) => p.dayIndex === currentDayIndex).length > 0) {
          currentDayIndex++;
          currentCharCount = 0;
        }
        newParagraphs.push({
          id: `para-${index}`,
          content,
          dayIndex: currentDayIndex,
          originalIndex: index
        });
        currentCharCount += paraLength;
      });
      state.value.data.paragraphs = newParagraphs;
    };
    const canDrag = (para, dayContent) => {
      const paraIndexInDay = dayContent.findIndex((p) => p.id === para.id);
      return paraIndexInDay === 0 || paraIndexInDay === dayContent.length - 1;
    };
    const isFirst = (para, dayContent) => dayContent.findIndex((p) => p.id === para.id) === 0;
    const isLast = (para, dayContent) => dayContent.findIndex((p) => p.id === para.id) === dayContent.length - 1;
    const getResult = () => {
      let output = "";
      distribution.value.forEach((dayContent, index) => {
        output += `[${dayLabels[index]}]
`;
        if (dayContent.length > 0) {
          output += dayContent.map((p) => p.content).join("\n\n");
        }
        if (index < 6) {
          output += "\n\n";
        }
      });
      return output;
    };
    const copyToClipboard = async () => {
      const result = getResult();
      try {
        await (void 0).clipboard.writeText(result);
        state.value.feature.copied = true;
        setTimeout(() => {
          state.value.feature.copied = false;
        }, 2e3);
      } catch {
        const textarea = (void 0).createElement("textarea");
        textarea.value = result;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        (void 0).body.appendChild(textarea);
        textarea.select();
        try {
          (void 0).execCommand("copy");
          state.value.feature.copied = true;
          setTimeout(() => {
            state.value.feature.copied = false;
          }, 2e3);
        } catch {
          alert("複製失敗，請手動選取文字複製");
        }
        (void 0).body.removeChild(textarea);
      }
    };
    const clearAll = () => {
      state.value.data.inputText = "";
      state.value.data.paragraphs = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_UButton = _sfc_main$8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "h-screen flex flex-col bg-sand-50" }, _attrs))}>`);
      if (!vueExports.unref(hasResult)) {
        _push(`<div class="bg-white border-b border-sand-200 px-6 py-4 shadow-sm"><div class="flex items-center gap-3">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-calendar",
          class: "text-sage-600 text-2xl"
        }, null, _parent));
        _push(`<h1 class="font-display text-2xl font-bold text-sand-950"> 生命讀經每日分配 </h1></div><p class="text-sm text-sand-500 mt-1"> 將文字內容平均分配到一週七天，可拖動每天的頭尾段落調整 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(hasResult)) {
        _push(`<div class="bg-white border-b border-sand-200 px-6 py-3 shadow-sm"><div class="flex items-center gap-4">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-calendar",
          class: "text-sage-600 text-xl"
        }, null, _parent));
        _push(`<h1 class="font-display text-lg font-bold text-sand-950"> 生命讀經每日分配 </h1><span class="text-xs text-sand-400"> 共 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(totalChars))} 字 </span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(state).data.errorMessage) {
        _push(`<div class="fixed top-4 left-1/2 -translate-x-1/2 z-50"><div class="bg-warm-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-alert-triangle",
          class: "text-lg"
        }, null, _parent));
        _push(`<span class="font-medium text-sm">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.errorMessage)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1 flex overflow-hidden"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([
        "bg-white flex flex-col transition-all",
        vueExports.unref(hasResult) ? "w-full" : "w-1/2 border-r border-sand-200"
      ])}"><div class="flex-1 overflow-x-auto overflow-y-hidden p-6">`);
      if (vueExports.unref(hasResult)) {
        _push(`<div class="flex gap-4 h-full min-w-max"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(distribution), (dayContent, dayIndex) => {
          _push(`<div class="flex flex-col w-80 shrink-0 bg-sand-50 rounded-2xl border border-sand-200"><div class="bg-sage-600 text-white px-4 py-3 rounded-t-2xl font-bold text-sm flex items-center justify-between"><span>${serverRenderer_cjs_prodExports.ssrInterpolate(dayLabels[dayIndex])}</span><span class="text-xs font-normal opacity-90">${serverRenderer_cjs_prodExports.ssrInterpolate(dayContent.length)} 段落 · ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(stats)[dayIndex])} 字 </span></div><div class="flex-1 overflow-y-auto p-3 space-y-2 min-h-[200px]">`);
          if (dayContent.length === 0) {
            _push(`<div class="text-sand-400 text-sm italic py-8 text-center border-2 border-dashed border-sand-300 rounded-xl"> 拖曳相鄰天的段落到此處 </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(dayContent, (para) => {
            _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttr("draggable", canDrag(para, dayContent))} class="${serverRenderer_cjs_prodExports.ssrRenderClass([
              "bg-white p-3 rounded-xl border transition-all",
              canDrag(para, dayContent) ? "border-sand-200 hover:border-sage-400 hover:shadow-md cursor-move" : "border-sand-100 cursor-default"
            ])}"><div class="flex gap-2">`);
            if (canDrag(para, dayContent)) {
              _push(`<div class="flex flex-col justify-center items-center">`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: "i-lucide-grip-vertical",
                class: "text-sage-400 text-sm"
              }, null, _parent));
              if (isFirst(para, dayContent) && dayIndex > 0) {
                _push(`<span class="text-[9px] text-sage-600 mt-0.5"> ← </span>`);
              } else {
                _push(`<!---->`);
              }
              if (isLast(para, dayContent) && dayIndex < 6) {
                _push(`<span class="text-[9px] text-sage-600 mt-0.5"> → </span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<div class="w-3 shrink-0"></div>`);
            }
            _push(`<p class="text-xs text-sand-700 leading-relaxed flex-1">${serverRenderer_cjs_prodExports.ssrInterpolate(para.content)}</p></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex items-center justify-center h-full text-sand-400"><div class="text-center">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-calendar",
          class: "text-5xl mx-auto mb-3 opacity-50"
        }, null, _parent));
        _push(`<p>輸入文字後點擊「開始分配」按鈕</p></div></div>`);
      }
      _push(`</div></div>`);
      if (!vueExports.unref(hasResult)) {
        _push(`<div class="w-1/2 bg-white flex flex-col"><div class="px-6 py-4 border-b border-sand-100 bg-sand-50"><h2 class="font-semibold text-sand-700"> 文字輸入 </h2><p class="text-xs text-sand-500 mt-1"> 以空行分隔段落 </p></div><div class="flex-1 p-6"><textarea placeholder="請在此貼上文字內容...

段落之間請用空行分隔" class="w-full h-full p-4 border border-sand-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-none text-sand-800 placeholder-sand-300">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.inputText)}</textarea></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-white border-t border-sand-200 px-6 py-4 shadow-lg"><div class="flex justify-center gap-4">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        label: "開始分配",
        class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700 px-8",
        size: "lg",
        disabled: !vueExports.unref(state).data.inputText.trim(),
        onClick: distributeParagraphs
      }, null, _parent));
      if (vueExports.unref(hasResult)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          label: vueExports.unref(state).feature.copied ? "已複製" : "複製結果",
          icon: vueExports.unref(state).feature.copied ? "i-lucide-check" : "i-lucide-copy",
          class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800 px-8",
          size: "lg",
          onClick: copyToClipboard
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        label: "清除",
        variant: "soft",
        class: "rounded-xl px-8",
        size: "lg",
        onClick: clearAll
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tool/lifebible-study/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gX8M3YfY.mjs.map
