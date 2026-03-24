import { v as vueExports, c as useRoute$1, o as useToast, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, e as __nuxt_component_2, f as _sfc_main$8, i as useAppConfig, j as useComponentUI, k as useFieldGroup, l as useComponentIcons, t as tv, m as Primitive, n as _sfc_main$b, h as clearNuxtData, U as UserRequestUrl, r as refreshNuxtData } from './server.mjs';
import { _ as _sfc_main$2 } from './Modal-CF51FfLI.mjs';
import { u as usePageApi } from './usePageApi-DjGDYJYq.mjs';
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
import './useRequestApi-Dzr3oiLa.mjs';

const theme = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const _sfc_main$1 = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "span" },
    label: { type: [String, Number], required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    square: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false },
    icon: { type: null, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: null, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = vueExports.useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("badge", props);
    const { orientation, size: fieldGroupSize } = useFieldGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = vueExports.computed(() => tv({ extend: tv(theme), ...appConfig.ui?.badge || {} })({
      color: props.color,
      variant: props.variant,
      size: fieldGroupSize.value || props.size,
      square: props.square || !slots.default && !props.label,
      fieldGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Primitive), vueExports.mergeProps({
        as: __props.as,
        "data-slot": "base",
        class: ui.value.base({ class: [vueExports.unref(uiProp)?.base, props.class] })
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              if (vueExports.unref(isLeading) && vueExports.unref(leadingIconName)) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$d, {
                  name: vueExports.unref(leadingIconName),
                  "data-slot": "leadingIcon",
                  class: ui.value.leadingIcon({ class: vueExports.unref(uiProp)?.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!__props.avatar) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, vueExports.mergeProps({
                  size: vueExports.unref(uiProp)?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  "data-slot": "leadingAvatar",
                  class: ui.value.leadingAvatar({ class: vueExports.unref(uiProp)?.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
              if (__props.label !== void 0 && __props.label !== null) {
                _push2(`<span data-slot="label" class="${serverRenderer_cjs_prodExports.ssrRenderClass(ui.value.label({ class: vueExports.unref(uiProp)?.label }))}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
              if (vueExports.unref(isTrailing) && vueExports.unref(trailingIconName)) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$d, {
                  name: vueExports.unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: vueExports.unref(uiProp)?.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [
                vueExports.unref(isLeading) && vueExports.unref(leadingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$d, {
                  key: 0,
                  name: vueExports.unref(leadingIconName),
                  "data-slot": "leadingIcon",
                  class: ui.value.leadingIcon({ class: vueExports.unref(uiProp)?.leadingIcon })
                }, null, 8, ["name", "class"])) : !!__props.avatar ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$b, vueExports.mergeProps({
                  key: 1,
                  size: vueExports.unref(uiProp)?.leadingAvatarSize || ui.value.leadingAvatarSize()
                }, __props.avatar, {
                  "data-slot": "leadingAvatar",
                  class: ui.value.leadingAvatar({ class: vueExports.unref(uiProp)?.leadingAvatar })
                }), null, 16, ["size", "class"])) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => [
                __props.label !== void 0 && __props.label !== null ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  "data-slot": "label",
                  class: ui.value.label({ class: vueExports.unref(uiProp)?.label })
                }, vueExports.toDisplayString(__props.label), 3)) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [
                vueExports.unref(isTrailing) && vueExports.unref(trailingIconName) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$d, {
                  key: 0,
                  name: vueExports.unref(trailingIconName),
                  "data-slot": "trailingIcon",
                  class: ui.value.trailingIcon({ class: vueExports.unref(uiProp)?.trailingIcon })
                }, null, 8, ["name", "class"])) : vueExports.createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../node_modules/.pnpm/@nuxt+ui@4.5.1_@tiptap+extensions@3.20.1_@tiptap+core@3.20.1_@tiptap+pm@3.20.1__@tiptap_4989ab31cc14b2819489e0c69695d883/node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const toast = useToast();
    const id = route.params.id;
    const state = vueExports.ref({
      data: {
        page: {
          id,
          name: "",
          routeName: "",
          editedHtml: "",
          onlineHtml: "",
          previousHtml: "",
          status: "offline",
          setStatus: "none",
          isEdit: false
        }
      },
      feature: {
        revertModal: false
      }
    });
    const userStore = useUserStore();
    const { data, refresh: refreshPageInfo } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.getOne(id)), __temp = await __temp, __restore(), __temp);
    const {
      execute: executeUpdate,
      status: updateStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.editedHtml(
      id,
      { editedHtml: vueExports.toRef(() => state.value.data.page.editedHtml) }
    )), __temp = await __temp, __restore(), __temp);
    const {
      execute: executeSetToOnlineScheduled,
      status: setToOnlineScheduledStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.setToOnlineScheduled(id)), __temp = await __temp, __restore(), __temp);
    const {
      execute: executeSetToOfflineScheduled,
      status: setToOfflineScheduledStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.setToOfflineScheduled(id)), __temp = await __temp, __restore(), __temp);
    const {
      execute: executeCancelScheduled,
      status: cancelScheduledStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.cancelScheduled(id)), __temp = await __temp, __restore(), __temp);
    const {
      execute: executeGoToPreviousHtml,
      status: goToPreviousHtmlStatus,
      error: goToPreviousHtmlError
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => usePageApi.goToPreviousHtml(id)), __temp = await __temp, __restore(), __temp);
    const refreshData = async () => {
      clearNuxtData(UserRequestUrl.Page);
      await refreshNuxtData([UserRequestUrl.Page]);
      await refreshPageInfo();
    };
    const handleSave = async () => {
      await executeUpdate();
      await refreshData();
      toast.add({
        title: "儲存成功",
        color: "success"
      });
    };
    const handleSetToOnlineScheduled = async () => {
      await executeSetToOnlineScheduled();
      await refreshData();
    };
    const handleSetToOfflineScheduled = async () => {
      await executeSetToOfflineScheduled();
      await refreshData();
    };
    const cancelScheduled = async () => {
      await executeCancelScheduled();
      await refreshData();
    };
    const handleGoToPreviousHtml = async () => {
      await executeGoToPreviousHtml();
      await refreshData();
      state.value.feature.revertModal = false;
      if (goToPreviousHtmlError.value) {
        toast.add({
          title: "還原失敗",
          description: goToPreviousHtmlError.value.data.error === "NO_ONLINE_HTML" ? "沒有線上版本可以還原" : "頁面已排程，無法還原",
          color: "error"
        });
      }
    };
    const hasUnsavedChanges = vueExports.computed(() => {
      const original = data.value?.page?.editedHtml || "";
      return state.value.data.page.editedHtml !== original;
    });
    vueExports.watch(data, (val) => {
      const { data: pageData } = state.value;
      if (val?.page) {
        pageData.page.name = val.page.name;
        pageData.page.routeName = val.page.routeName;
        pageData.page.editedHtml = val.page.editedHtml || "";
        pageData.page.onlineHtml = val.page.onlineHtml || "";
        pageData.page.previousHtml = val.page.previousHtml || "";
        pageData.page.status = val.page.status;
        pageData.page.setStatus = val.page.setStatus || "none";
        pageData.page.isEdit = val.page.isEdit;
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_UBadge = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_UButton = _sfc_main$8;
      const _component_UModal = _sfc_main$2;
      const _directive_dompurify_html = vueExports.resolveDirective("dompurify-html");
      let _temp0, _temp1, _temp2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "max-w-6xl mx-auto animate-fade-up" }, _attrs))}><div class="mb-8"><div class="flex items-center gap-3 mb-1"><h2 class="font-display text-2xl font-bold text-sand-950"> 編輯網站 </h2><span class="flex items-center gap-1.5 text-xs text-sand-400 bg-sand-100 px-2.5 py-1 rounded-full font-mono">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-link",
        class: "text-xs"
      }, null, _parent));
      _push(` /${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.page.routeName)}</span></div></div><div class="bg-white rounded-2xl border border-sand-200 shadow-sm"><div class="p-6 space-y-6"><div class="flex items-center gap-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-file-text",
        class: "text-sage-600 text-lg"
      }, null, _parent));
      _push(`<h3 class="text-lg font-semibold text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.page.name)}</h3>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
        color: vueExports.unref(state).data.page.status === "online" ? "success" : "neutral",
        variant: "subtle",
        label: vueExports.unref(state).data.page.status === "online" ? "上線中" : "未上線"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
        color: vueExports.unref(state).data.page.isEdit ? "warning" : "neutral",
        variant: "subtle",
        label: vueExports.unref(state).data.page.isEdit ? "已編輯" : "未編輯"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UBadge, {
        color: vueExports.unref(state).data.page.isEdit ? "warning" : "neutral",
        variant: "subtle",
        label: vueExports.unref(state).data.page.isEdit ? "已編輯" : "未編輯"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.page.setStatus)}`);
          } else {
            return [
              vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(state).data.page.setStatus), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><label class="text-xs font-medium text-sand-500 mb-1.5 block w-full"> 內容 </label>`);
      if (vueExports.unref(state).data.page.setStatus === "scheduledOnline" || vueExports.unref(state).data.page.setStatus === "scheduledOffline") {
        _push(`<div class="grid grid-cols-2 gap-4"><div><p class="text-xs font-medium text-sand-500 mb-1.5"> 預計上線內容 </p><div class="w-full rounded-xl border border-sand-200 bg-white p-4 min-h-[240px]"><div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_temp0 = vueExports.mergeProps({ class: "tiptap prose prose-sm max-w-none text-left" }, serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_dompurify_html, vueExports.unref(state).data.page.onlineHtml)))}>${"textContent" in _temp0 ? serverRenderer_cjs_prodExports.ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div></div></div><div><p class="text-xs font-medium text-sand-500 mb-1.5"> 目前上線版本 </p><div class="w-full rounded-xl border border-sand-200 bg-white p-4 min-h-[240px]">`);
        if (vueExports.unref(state).data.page.previousHtml) {
          _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_temp1 = vueExports.mergeProps({ class: "tiptap prose prose-sm max-w-none text-left" }, serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_dompurify_html, vueExports.unref(state).data.page.previousHtml)))}>${"textContent" in _temp1 ? serverRenderer_cjs_prodExports.ssrInterpolate(_temp1.textContent) : _temp1.innerHTML ?? ""}</div>`);
        } else {
          _push(`<p class="text-sand-400 text-sm"> 無 </p>`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {
          fallback: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full rounded-xl border border-sand-200 bg-white min-h-[290px] animate-pulse"${_scopeId}></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "w-full rounded-xl border border-sand-200 bg-white min-h-[290px] animate-pulse" })
              ];
            }
          })
        }, _parent));
      }
      _push(`</div></div>`);
      if (vueExports.unref(userStore).hasAccess("page")) {
        _push(`<div class="flex justify-end gap-3 px-6 py-4 border-t border-sand-100">`);
        if (vueExports.unref(state).data.page.setStatus === "none" && !vueExports.unref(hasUnsavedChanges)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
            label: "安排上線",
            class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800",
            icon: "i-lucide-calendar-check",
            loading: vueExports.unref(setToOnlineScheduledStatus) === "pending",
            onClick: handleSetToOnlineScheduled
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (vueExports.unref(state).data.page.setStatus === "none" && vueExports.unref(state).data.page.status === "online" && !vueExports.unref(hasUnsavedChanges)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
            label: "安排下線",
            class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800",
            icon: "i-lucide-calendar-check",
            loading: vueExports.unref(setToOfflineScheduledStatus) === "pending",
            onClick: handleSetToOfflineScheduled
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (vueExports.unref(state).data.page.setStatus === "scheduledOnline" || vueExports.unref(state).data.page.setStatus === "scheduledOffline") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
            label: "取消排程",
            class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800",
            icon: "i-lucide-calendar-check",
            loading: vueExports.unref(cancelScheduledStatus) === "pending",
            onClick: cancelScheduled
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (vueExports.unref(state).data.page.previousHtml !== "") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
            label: "取消編輯",
            class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800",
            icon: "i-lucide-undo",
            onClick: ($event) => vueExports.unref(state).feature.revertModal = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          label: "儲存",
          class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
          icon: "i-lucide-save",
          loading: vueExports.unref(updateStatus) === "pending",
          disabled: !vueExports.unref(data) || vueExports.unref(state).data.page.setStatus === "scheduledOnline" || vueExports.unref(state).data.page.setStatus === "scheduledOffline",
          onClick: handleSave
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex justify-end gap-3 px-6 py-4 border-t border-sand-100"> 無權限編輯 </div>`);
      }
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.revertModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.revertModal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><h3 class="text-lg font-semibold text-sand-950"${_scopeId}> 確認取消編輯 </h3><p class="text-sm text-sand-500"${_scopeId}> 將還原為以下的上線版本內容： </p><div class="w-full rounded-xl border border-sand-200 bg-sand-50 p-4 max-h-[400px] overflow-y-auto"${_scopeId}>`);
            if (vueExports.unref(state).data.page.previousHtml) {
              _push2(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_temp2 = vueExports.mergeProps({ class: "tiptap prose prose-sm max-w-none text-left" }, serverRenderer_cjs_prodExports.ssrGetDirectiveProps(_ctx, _directive_dompurify_html, vueExports.unref(state).data.page.previousHtml)))}${_scopeId}>${"textContent" in _temp2 ? serverRenderer_cjs_prodExports.ssrInterpolate(_temp2.textContent) : _temp2.innerHTML ?? ""}</div>`);
            } else {
              _push2(`<p class="text-sand-400 text-sm"${_scopeId}> 無 </p>`);
            }
            _push2(`</div><div class="flex justify-end gap-3 pt-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "取消",
              variant: "outline",
              class: "rounded-xl",
              onClick: ($event) => vueExports.unref(state).feature.revertModal = false
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              label: "確認還原",
              class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
              icon: "i-lucide-undo",
              loading: vueExports.unref(goToPreviousHtmlStatus) === "pending",
              onClick: handleGoToPreviousHtml
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6 space-y-4" }, [
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950" }, " 確認取消編輯 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500" }, " 將還原為以下的上線版本內容： "),
                vueExports.createVNode("div", { class: "w-full rounded-xl border border-sand-200 bg-sand-50 p-4 max-h-[400px] overflow-y-auto" }, [
                  vueExports.unref(state).data.page.previousHtml ? vueExports.withDirectives((vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "tiptap prose prose-sm max-w-none text-left"
                  }, null, 512)), [
                    [_directive_dompurify_html, vueExports.unref(state).data.page.previousHtml]
                  ]) : (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 1,
                    class: "text-sand-400 text-sm"
                  }, " 無 "))
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3 pt-2" }, [
                  vueExports.createVNode(_component_UButton, {
                    label: "取消",
                    variant: "outline",
                    class: "rounded-xl",
                    onClick: ($event) => vueExports.unref(state).feature.revertModal = false
                  }, null, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    label: "確認還原",
                    class: "rounded-xl bg-sage-600 text-white hover:bg-sage-700",
                    icon: "i-lucide-undo",
                    loading: vueExports.unref(goToPreviousHtmlStatus) === "pending",
                    onClick: handleGoToPreviousHtml
                  }, null, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/website/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B1PoAZ4U.mjs.map
