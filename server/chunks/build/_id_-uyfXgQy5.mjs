import { v as vueExports, c as useRoute$1, U as UserRequestUrl, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d, h as clearNuxtData, r as refreshNuxtData } from './server.mjs';
import { _ as _sfc_main$1 } from './Modal-DiUNUWVR.mjs';
import { _ as _sfc_main$2 } from './Input-DnnJ1_4i.mjs';
import { u as useChatTopicApi } from './useChatTopicApi-BOq0wvVE.mjs';
import { u as useRequestApi } from './useRequestApi-BBY0zkpq.mjs';
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

const useChatCardApi = {
  getAll: async () => {
    return await useRequestApi(
      UserRequestUrl.ChatCard,
      {
        method: "GET",
        server: false,
        lazy: false
      }
    );
  },
  getOne: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.ChatCard}/${id}`,
      {
        method: "GET",
        server: false,
        lazy: false
      }
    );
  },
  create: async (payload) => {
    return await useRequestApi(
      UserRequestUrl.ChatCard,
      {
        method: "POST",
        body: payload,
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  update: async (payload) => {
    return await useRequestApi(
      vueExports.computed(() => `${UserRequestUrl.ChatCard}/${payload.value.id}`),
      {
        method: "PATCH",
        body: payload,
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  delete: async (id) => {
    return await useRequestApi(
      vueExports.computed(() => `${UserRequestUrl.ChatCard}/${id.value}`),
      {
        method: "DELETE",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  }
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const topicId = route.params.id;
    const topicKey = `${UserRequestUrl.ChatTopic}-${topicId}`;
    const state = vueExports.ref({
      data: {},
      feature: {
        create: {
          modal: false,
          name: "",
          url: "",
          description: ""
        },
        edit: {
          modal: false,
          id: "",
          name: "",
          url: "",
          description: ""
        },
        delete: {
          modal: false,
          id: ""
        }
      }
    });
    const { data: topicData } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.getOne(topicId)), __temp = await __temp, __restore(), __temp);
    const { execute: executeCreate, pending: createPending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.create(
      vueExports.toRef(() => ({
        name: state.value.feature.create.name.trim(),
        url: state.value.feature.create.url.trim(),
        description: state.value.feature.create.description.trim(),
        chatTopicId: topicId
      }))
    )), __temp = await __temp, __restore(), __temp);
    const { execute: executeEdit, pending: editPending } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.update(
      vueExports.toRef(() => ({
        id: state.value.feature.edit.id,
        name: state.value.feature.edit.name.trim(),
        url: state.value.feature.edit.url.trim(),
        description: state.value.feature.edit.description.trim()
      }))
    )), __temp = await __temp, __restore(), __temp);
    const { execute: executeDelete } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.delete(
      vueExports.toRef(() => state.value.feature.delete.id)
    )), __temp = await __temp, __restore(), __temp);
    const toggleId = vueExports.ref("");
    const toggleBody = vueExports.ref({});
    const { execute: executeToggle } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.update(
      vueExports.toRef(() => ({
        id: toggleId.value,
        ...toggleBody.value
      }))
    )), __temp = await __temp, __restore(), __temp);
    const refreshTopic = async () => {
      clearNuxtData(topicKey);
      await refreshNuxtData();
    };
    const createModal = {
      open: () => {
        const { feature } = state.value;
        feature.create.name = "";
        feature.create.url = "";
        feature.create.description = "";
        feature.create.modal = true;
      },
      confirm: async () => {
        const { feature } = state.value;
        if (!feature.create.name.trim() || !feature.create.url.trim()) return;
        await executeCreate();
        await refreshTopic();
        feature.create.modal = false;
      }
    };
    const editModal = {
      open: (card) => {
        const { feature } = state.value;
        feature.edit.id = card.id;
        feature.edit.name = card.name;
        feature.edit.url = card.url;
        feature.edit.description = card.description;
        feature.edit.modal = true;
      },
      confirm: async () => {
        const { feature } = state.value;
        if (!feature.edit.name.trim() || !feature.edit.url.trim()) return;
        await executeEdit();
        await refreshTopic();
        feature.edit.modal = false;
      }
    };
    const deleteModal = {
      open: (id) => {
        const { feature } = state.value;
        feature.delete.id = id;
        feature.delete.modal = true;
      },
      confirm: async () => {
        const { feature } = state.value;
        await executeDelete();
        await refreshTopic();
        feature.delete.modal = false;
        feature.delete.id = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UIcon = _sfc_main$d;
      const _component_UModal = _sfc_main$1;
      const _component_UInput = _sfc_main$2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full animate-fade-up" }, _attrs))}><div class="flex items-center gap-3 mb-8">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        color: "neutral",
        icon: "i-lucide-arrow-left",
        to: "/admin/chatbot"
      }, null, _parent));
      _push(`<div class="flex-1"><h2 class="font-display text-2xl font-bold text-sand-950 mb-1">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(topicData)?.chatTopic?.name ?? "載入中...")}</h2><div class="flex flex-wrap gap-1"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(topicData)?.chatTopic?.keywords, (keyword) => {
        _push(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">${serverRenderer_cjs_prodExports.ssrInterpolate(keyword)}</span>`);
      });
      _push(`<!--]--></div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-plus",
        onClick: createModal.open
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 新增卡片 `);
          } else {
            return [
              vueExports.createTextVNode(" 新增卡片 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!vueExports.unref(topicData)?.chatTopic?.cards?.length) {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm p-12 text-center"><div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand-100">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-credit-card",
          class: "text-sand-400 text-xl"
        }, null, _parent));
        _push(`</div><p class="text-sand-500 text-sm"> 尚未建立任何卡片 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(topicData)?.chatTopic?.cards, (card) => {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm p-5 flex flex-col"><div class="flex items-start justify-between mb-3"><p class="font-medium text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(card.name)}</p><button class="shrink-0 ml-2"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([card.online ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-sand-100 text-sand-500 hover:bg-sand-200", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-colors"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(card.online ? "上線" : "下線")}</span></button></div><a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", card.url)} target="_blank" class="text-xs text-sage-600 hover:underline break-all mb-2">${serverRenderer_cjs_prodExports.ssrInterpolate(card.url)}</a>`);
        if (card.description) {
          _push(`<p class="text-sm text-sand-500 mb-4 flex-1">${serverRenderer_cjs_prodExports.ssrInterpolate(card.description)}</p>`);
        } else {
          _push(`<div class="flex-1"></div>`);
        }
        _push(`<div class="flex gap-2 pt-3 border-t border-sand-100">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          variant: "soft",
          size: "xs",
          icon: "i-lucide-pencil",
          onClick: ($event) => editModal.open(card)
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 編輯 `);
            } else {
              return [
                vueExports.createTextVNode(" 編輯 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          color: "error",
          variant: "soft",
          size: "xs",
          icon: "i-lucide-trash-2",
          onClick: ($event) => deleteModal.open(card.id)
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 刪除 `);
            } else {
              return [
                vueExports.createTextVNode(" 刪除 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.create.modal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.create.modal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 新增卡片 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 建立新的聊天卡片 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.create.name,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.name = $event,
              placeholder: "輸入卡片名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>網址</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.create.url,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.url = $event,
              placeholder: "https://...",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>描述</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.create.description,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.description = $event,
              placeholder: "輸入卡片描述（選填）",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.create.modal = false
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 取消 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 取消 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              loading: vueExports.unref(createPending),
              disabled: !vueExports.unref(state).feature.create.name.trim() || !vueExports.unref(state).feature.create.url.trim(),
              onClick: createModal.confirm
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 建立 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 建立 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6" }, [
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 新增卡片 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 建立新的聊天卡片 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.create.name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.name = $event,
                      placeholder: "輸入卡片名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "網址"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.create.url,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.url = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "描述"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.create.description,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.description = $event,
                      placeholder: "輸入卡片描述（選填）",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    onClick: ($event) => vueExports.unref(state).feature.create.modal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    loading: vueExports.unref(createPending),
                    disabled: !vueExports.unref(state).feature.create.name.trim() || !vueExports.unref(state).feature.create.url.trim(),
                    onClick: createModal.confirm
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 建立 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.edit.modal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.edit.modal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 編輯卡片 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 修改卡片資訊 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.edit.name,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.name = $event,
              placeholder: "輸入卡片名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>網址</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.edit.url,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.url = $event,
              placeholder: "https://...",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>描述</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.edit.description,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.description = $event,
              placeholder: "輸入卡片描述（選填）",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.edit.modal = false
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 取消 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 取消 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              loading: vueExports.unref(editPending),
              disabled: !vueExports.unref(state).feature.edit.name.trim() || !vueExports.unref(state).feature.edit.url.trim(),
              onClick: editModal.confirm
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 儲存 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 儲存 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6" }, [
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 編輯卡片 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 修改卡片資訊 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.edit.name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.name = $event,
                      placeholder: "輸入卡片名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "網址"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.edit.url,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.url = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "描述"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.edit.description,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.description = $event,
                      placeholder: "輸入卡片描述（選填）",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    onClick: ($event) => vueExports.unref(state).feature.edit.modal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    loading: vueExports.unref(editPending),
                    disabled: !vueExports.unref(state).feature.edit.name.trim() || !vueExports.unref(state).feature.edit.url.trim(),
                    onClick: editModal.confirm
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 儲存 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.delete.modal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.delete.modal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 text-center"${_scopeId}><div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
              name: "i-lucide-triangle-alert",
              class: "text-red-600 text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><h3 class="text-lg font-semibold text-sand-950 mb-2"${_scopeId}> 確認刪除 </h3><p class="text-sm text-sand-500 mb-6"${_scopeId}> 確定要刪除此卡片嗎？此操作無法復原。 </p><div class="flex justify-center gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.delete.modal = false
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 取消 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 取消 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              color: "error",
              onClick: deleteModal.confirm
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 確認刪除 `);
                } else {
                  return [
                    vueExports.createTextVNode(" 確認刪除 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6 text-center" }, [
                vueExports.createVNode("div", { class: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100" }, [
                  vueExports.createVNode(_component_UIcon, {
                    name: "i-lucide-triangle-alert",
                    class: "text-red-600 text-xl"
                  })
                ]),
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-2" }, " 確認刪除 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-6" }, " 確定要刪除此卡片嗎？此操作無法復原。 "),
                vueExports.createVNode("div", { class: "flex justify-center gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    onClick: ($event) => vueExports.unref(state).feature.delete.modal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    color: "error",
                    onClick: deleteModal.confirm
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 確認刪除 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/chatbot/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-uyfXgQy5.mjs.map
