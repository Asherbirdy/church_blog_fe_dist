import { v as vueExports, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, o as useToast, f as _sfc_main$8, h as clearNuxtData, U as UserRequestUrl, r as refreshNuxtData } from './server.mjs';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { _ as _sfc_main$1 } from './Modal-CF51FfLI.mjs';
import { _ as _sfc_main$5 } from './Input-BWOivtYQ.mjs';
import { u as usePageApi } from './usePageApi-DjGDYJYq.mjs';

const _sfc_main$6 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AddWebsiteButton",
  __ssrInlineRender: true,
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { disabled } = vueExports.toRefs(props);
    const toast = useToast();
    const state = vueExports.ref({
      data: {
        name: "",
        routeName: ""
      },
      feature: {
        modal: false
      }
    });
    const { execute, error } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.create(state.value.data)), __temp = await __temp, __restore(), __temp);
    const handleCreate = async () => {
      if (!state.value.data.name || !state.value.data.routeName) return;
      await execute();
      if (error.value?.data?.error === "ROUTE_NAME_ALREADY_EXISTS") {
        console.log("error.value", error.value);
        toast.add({
          title: "路由名稱已存在",
          description: "請使用其他路由名稱",
          color: "error"
        });
        return;
      }
      state.value.data.name = "";
      state.value.data.routeName = "";
      state.value.feature.modal = false;
      clearNuxtData(UserRequestUrl.Page);
      await refreshNuxtData([UserRequestUrl.Page]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UModal = _sfc_main$1;
      const _component_UInput = _sfc_main$5;
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        disabled: vueExports.unref(disabled),
        label: "新增網站",
        icon: "i-lucide-plus",
        class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
        onClick: ($event) => vueExports.unref(state).feature.modal = true
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.modal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.modal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="font-display text-lg font-bold text-sand-950 mb-6"${_scopeId}> 新增一頁網站 </h3><div class="space-y-4"${_scopeId}><div${_scopeId}><label class="text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block"${_scopeId}> 網站名稱 </label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).data.name,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).data.name = $event,
              placeholder: "例：活動報名頁",
              icon: "i-lucide-type",
              size: "lg",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block"${_scopeId}> 路由名稱 </label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).data.routeName,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).data.routeName = $event,
              placeholder: "例：event-signup",
              icon: "i-lucide-link",
              size: "lg",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end gap-3 mt-6"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "取消",
              color: "neutral",
              variant: "outline",
              class: "rounded-xl",
              onClick: ($event) => vueExports.unref(state).feature.modal = false
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              disabled: !vueExports.unref(state).data.name || !vueExports.unref(state).data.routeName,
              label: "建立",
              class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
              onClick: handleCreate
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6" }, [
                vueExports.createVNode("h3", { class: "font-display text-lg font-bold text-sand-950 mb-6" }, " 新增一頁網站 "),
                vueExports.createVNode("div", { class: "space-y-4" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block" }, " 網站名稱 "),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).data.name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).data.name = $event,
                      placeholder: "例：活動報名頁",
                      icon: "i-lucide-type",
                      size: "lg",
                      ui: { base: "rounded-xl" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "text-xs font-medium text-sand-400 uppercase tracking-wide mb-1.5 block" }, " 路由名稱 "),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).data.routeName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).data.routeName = $event,
                      placeholder: "例：event-signup",
                      icon: "i-lucide-link",
                      size: "lg",
                      ui: { base: "rounded-xl" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3 mt-6" }, [
                  vueExports.createVNode(_component_UButton, {
                    label: "取消",
                    color: "neutral",
                    variant: "outline",
                    class: "rounded-xl",
                    onClick: ($event) => vueExports.unref(state).feature.modal = false
                  }, null, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    disabled: !vueExports.unref(state).data.name || !vueExports.unref(state).data.routeName,
                    label: "建立",
                    class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
                    onClick: handleCreate
                  }, null, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/website/AddWebsiteButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Chatroom",
  __ssrInlineRender: true,
  setup(__props) {
    const state = vueExports.ref({
      data: {
        messages: [
          { role: "bot", text: "嗨！歡迎來到小羊天地 🐑 有任何關於教會的問題都可以問我喔！" }
        ],
        input: ""
      },
      feature: {
        isSending: false
      }
    });
    const messagesEnd = vueExports.ref(null);
    const scrollToBottom = () => {
      vueExports.nextTick(() => {
        messagesEnd.value?.scrollIntoView({ behavior: "smooth" });
      });
    };
    const handleSend = async () => {
      const text = state.value.data.input.trim();
      if (!text || state.value.feature.isSending) return;
      state.value.data.messages.push({ role: "user", text });
      state.value.data.input = "";
      state.value.feature.isSending = true;
      scrollToBottom();
      setTimeout(() => {
        state.value.data.messages.push({
          role: "bot",
          text: "感謝你的提問！目前此功能正在開發中，之後會有專人為你解答。"
        });
        state.value.feature.isSending = false;
        scrollToBottom();
      }, 1e3);
    };
    const handleKeydown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$5;
      const _component_UButton = _sfc_main$8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-white rounded-3xl border border-sand-200 p-6 shadow-sm flex flex-col h-[520px]" }, _attrs))}><div class="mb-4"><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 有問題想問？ </h2><p class="text-sm text-sand-500"> 歡迎隨時提問，我們很樂意為你解答 </p></div><div class="flex-1 overflow-y-auto space-y-3 mb-4 pr-1"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(state).data.messages, (msg, index) => {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([
          "flex",
          msg.role === "user" ? "justify-end" : "justify-start"
        ])}"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([
          "max-w-[80%] px-4 py-2.5 text-sm leading-relaxed",
          msg.role === "user" ? "bg-sage-600 text-white rounded-2xl rounded-br-md" : "bg-sand-100 text-sand-800 rounded-2xl rounded-bl-md"
        ])}">${serverRenderer_cjs_prodExports.ssrInterpolate(msg.text)}</div></div>`);
      });
      _push(`<!--]-->`);
      if (vueExports.unref(state).feature.isSending) {
        _push(`<div class="flex justify-start"><div class="bg-sand-100 text-sand-400 rounded-2xl rounded-bl-md px-4 py-2.5 text-sm"> 正在輸入... </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div></div></div><div class="flex items-center gap-2 pt-3 border-t border-sand-100">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
        modelValue: vueExports.unref(state).data.input,
        "onUpdate:modelValue": ($event) => vueExports.unref(state).data.input = $event,
        placeholder: "輸入你的問題...",
        size: "lg",
        class: "flex-1",
        ui: { base: "rounded-xl bg-sand-50 border-sand-200" },
        onKeydown: handleKeydown
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-send",
        size: "lg",
        class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700 shrink-0",
        disabled: !vueExports.unref(state).data.input.trim() || vueExports.unref(state).feature.isSending,
        onClick: handleSend
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chatroom.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "EditorMenubar",
  __ssrInlineRender: true,
  props: {
    editor: {}
  },
  setup(__props) {
    const props = __props;
    const imageUrl = vueExports.ref("");
    const showImageInput = vueExports.ref(false);
    const insertImage = () => {
      if (!imageUrl.value) return;
      props.editor.chain().focus().setImage({ src: imageUrl.value }).run();
      imageUrl.value = "";
      showImageInput.value = false;
    };
    const toolbarItems = [
      { action: "toggleBold", icon: "i-lucide-bold", name: "bold" },
      { action: "toggleItalic", icon: "i-lucide-italic", name: "italic" },
      { action: "toggleStrike", icon: "i-lucide-strikethrough", name: "strike" },
      { divider: true },
      { action: "toggleHeading", icon: "i-lucide-heading-1", name: "heading", attrs: { level: 1 } },
      { action: "toggleHeading", icon: "i-lucide-heading-2", name: "heading", attrs: { level: 2 } },
      { action: "toggleHeading", icon: "i-lucide-heading-3", name: "heading", attrs: { level: 3 } },
      { divider: true },
      { action: "toggleBulletList", icon: "i-lucide-list", name: "bulletList" },
      { action: "toggleOrderedList", icon: "i-lucide-list-ordered", name: "orderedList" },
      { divider: true },
      { action: "toggleBlockquote", icon: "i-lucide-quote", name: "blockquote" },
      { action: "setHorizontalRule", icon: "i-lucide-minus", name: "horizontalRule" }
    ];
    const isActive = (item) => {
      if (!props.editor || item.divider) return false;
      if (item.attrs) return props.editor.isActive(item.name, item.attrs);
      return props.editor.isActive(item.name);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_UInput = _sfc_main$5;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex items-center gap-0.5 px-2 py-1.5 border-b border-sand-100 bg-sand-50/50" }, _attrs))}><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(toolbarItems, (item, i) => {
        _push(`<!--[-->`);
        if (item.divider) {
          _push(`<div class="w-px h-5 bg-sand-200 mx-1"></div>`);
        } else {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([isActive(item) ? "bg-sage-100 text-sage-700" : "text-sand-500 hover:bg-sand-100 hover:text-sand-700", "p-1.5 rounded-lg transition-colors"])}">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
            name: item.icon,
            class: "text-base"
          }, null, _parent));
          _push(`</button>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><div class="w-px h-5 bg-sand-200 mx-1"></div><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(showImageInput) ? "bg-sage-100 text-sage-700" : "text-sand-500 hover:bg-sand-100 hover:text-sand-700", "p-1.5 rounded-lg transition-colors"])}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-image",
        class: "text-base"
      }, null, _parent));
      _push(`</button>`);
      if (vueExports.unref(showImageInput)) {
        _push(`<div class="flex items-center gap-1.5 ml-1">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(imageUrl),
          "onUpdate:modelValue": ($event) => vueExports.isRef(imageUrl) ? imageUrl.value = $event : null,
          placeholder: "輸入圖片網址",
          size: "sm",
          class: "w-48",
          ui: { base: "rounded-lg" },
          onKeydown: insertImage
        }, null, _parent));
        _push(`<button class="p-1.5 rounded-lg text-sage-600 hover:bg-sage-100 transition-colors">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-check",
          class: "text-base"
        }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EditorMenubar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "LogoutButton",
  __ssrInlineRender: true,
  props: {
    collapsed: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      _push(`<button${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sand-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-log-out",
        class: "text-lg shrink-0 text-sand-400 group-hover:text-red-500"
      }, null, _parent));
      _push(`<span class="text-sm font-medium truncate" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(!__props.collapsed ? null : { display: "none" })}"> 登出 </span></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoutButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TiptapEditor",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = vueExports.useModel(__props, "modelValue");
    const editor = useEditor({
      content: model.value,
      extensions: [
        StarterKit,
        Image.configure({
          HTMLAttributes: {
            class: "w-full rounded-lg"
          }
        })
      ],
      // immediatelyRender: false,
      editorProps: {
        attributes: {
          class: "prose prose-sm max-w-none p-4 min-h-[240px] focus:outline-none text-left"
        }
      },
      onUpdate: ({ editor: e }) => {
        model.value = e.getHTML();
      }
    });
    vueExports.watch(model, (val) => {
      if (editor.value && editor.value.getHTML() !== val) {
        editor.value.commands.setContent(val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full rounded-xl border border-sand-200 bg-white overflow-hidden" }, _attrs))}>`);
      if (vueExports.unref(editor)) {
        _push(`<!--[-->`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), { editor: vueExports.unref(editor) }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(EditorContent), { editor: vueExports.unref(editor) }, null, _parent));
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TiptapEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$6 as _, _sfc_main$2 as a };
//# sourceMappingURL=TiptapEditor-CXid4CXd.mjs.map
