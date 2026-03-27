import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d, h as clearNuxtData, U as UserRequestUrl } from './server.mjs';
import { _ as _sfc_main$1 } from './Modal-DiUNUWVR.mjs';
import { _ as _sfc_main$2 } from './Input-DnnJ1_4i.mjs';
import { u as useChatTopicApi } from './useChatTopicApi-BOq0wvVE.mjs';
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
import './useRequestApi-BBY0zkpq.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = vueExports.ref({
      data: {},
      feature: {
        create: {
          modal: false,
          name: "",
          keywords: "",
          error: ""
        },
        edit: {
          modal: false,
          id: "",
          name: "",
          keywords: ""
        },
        delete: {
          modal: false,
          id: ""
        },
        expandedId: ""
      }
    });
    const { data, execute } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.getAll()), __temp = await __temp, __restore(), __temp);
    const createKeywordsParsed = vueExports.computed(
      () => state.value.feature.create.keywords.split(",").map((k) => k.trim()).filter(Boolean)
    );
    const {
      execute: executeCreate,
      error: createError,
      pending: createPending
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.create(
      vueExports.toRef(() => ({
        name: state.value.feature.create.name.trim(),
        keywords: createKeywordsParsed.value
      }))
    )), __temp = await __temp, __restore(), __temp);
    const editKeywordsParsed = vueExports.computed(
      () => state.value.feature.edit.keywords.split(",").map((k) => k.trim()).filter(Boolean)
    );
    const {
      execute: executeEdit,
      pending: editPending
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.update(
      vueExports.toRef(() => ({
        id: state.value.feature.edit.id,
        name: state.value.feature.edit.name.trim(),
        keywords: editKeywordsParsed.value
      }))
    )), __temp = await __temp, __restore(), __temp);
    const { execute: executeDelete } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.delete(
      vueExports.toRef(() => state.value.feature.delete.id)
    )), __temp = await __temp, __restore(), __temp);
    const createModal = {
      open: () => {
        const { feature } = state.value;
        feature.create.name = "";
        feature.create.keywords = "";
        feature.create.error = "";
        feature.create.modal = true;
      },
      confirm: async () => {
        const { feature } = state.value;
        if (!feature.create.name.trim()) return;
        feature.create.error = "";
        await executeCreate();
        if (createError.value?.data?.error === "CHAT_TOPIC_NAME_ALREADY_EXISTS") {
          feature.create.error = "主題名稱已存在";
          return;
        }
        clearNuxtData(UserRequestUrl.ChatTopic);
        await execute();
        feature.create.modal = false;
      }
    };
    const editModal = {
      open: async (topic) => {
        const { feature } = state.value;
        await vueExports.nextTick();
        console.log("editModal open", topic);
        feature.edit.id = topic.id;
        feature.edit.name = topic.name;
        feature.edit.keywords = topic.keywords.join(", ");
        feature.edit.modal = true;
      },
      confirm: async () => {
        const { feature } = state.value;
        if (!feature.edit.name.trim()) return;
        await executeEdit();
        clearNuxtData(UserRequestUrl.ChatTopic);
        await execute();
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
        clearNuxtData(UserRequestUrl.ChatTopic);
        await execute();
        feature.delete.modal = false;
        feature.delete.id = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UIcon = _sfc_main$d;
      const _component_UModal = _sfc_main$1;
      const _component_UInput = _sfc_main$2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full animate-fade-up" }, _attrs))}><div class="flex items-center justify-between mb-8"><div><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 聊天機器人 </h2><p class="text-sm text-sand-500"> 管理聊天主題與關鍵字 </p></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-plus",
        onClick: createModal.open
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 新增主題 `);
          } else {
            return [
              vueExports.createTextVNode(" 新增主題 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!vueExports.unref(data)?.chatTopics?.length) {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm p-12 text-center"><div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sand-100">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-message-circle",
          class: "text-sand-400 text-xl"
        }, null, _parent));
        _push(`</div><p class="text-sand-500 text-sm"> 尚未建立任何聊天主題 </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(data)?.chatTopics, (topic) => {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden"><div class="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-sand-50 transition-colors"><div class="flex items-center gap-3">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-chevron-right",
          class: ["text-sand-400 transition-transform", { "rotate-90": vueExports.unref(state).feature.expandedId === topic.id }]
        }, null, _parent));
        _push(`<div><p class="font-medium text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(topic.name)}</p><div class="flex flex-wrap gap-1 mt-1"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(topic.keywords, (keyword) => {
          _push(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">${serverRenderer_cjs_prodExports.ssrInterpolate(keyword)}</span>`);
        });
        _push(`<!--]-->`);
        if (!topic.keywords.length) {
          _push(`<span class="text-sand-400 text-xs"> 無關鍵字 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="flex gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          variant: "soft",
          size: "xs",
          icon: "i-lucide-credit-card",
          to: `/admin/chatbot/${topic.id}`
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 卡片 `);
            } else {
              return [
                vueExports.createTextVNode(" 卡片 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          variant: "soft",
          size: "xs",
          icon: "i-lucide-pencil",
          onClick: ($event) => editModal.open(topic)
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
          onClick: ($event) => deleteModal.open(topic.id)
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
        if (vueExports.unref(state).feature.expandedId === topic.id) {
          _push(`<div class="border-t border-sand-200 px-6 py-4 bg-sand-50"><p class="text-xs font-medium text-sand-400 uppercase tracking-wide mb-3"> 關聯卡片 (${serverRenderer_cjs_prodExports.ssrInterpolate(topic.cards.length)}) </p>`);
          if (topic.cards.length) {
            _push(`<div class="space-y-2"><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(topic.cards, (card) => {
              _push(`<div class="flex items-center justify-between bg-white rounded-xl border border-sand-200 px-4 py-3"><div><p class="text-sm font-medium text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(card.name)}</p><p class="text-xs text-sand-400 mt-0.5">${serverRenderer_cjs_prodExports.ssrInterpolate(card.url)}</p></div><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([card.online ? "bg-green-100 text-green-700" : "bg-sand-100 text-sand-500", "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(card.online ? "上線" : "下線")}</span></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<p class="text-sm text-sand-400"> 尚無關聯卡片 </p>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.create.modal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.create.modal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 新增聊天主題 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 建立新的聊天主題與關鍵字 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>主題名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.create.name,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.name = $event,
              placeholder: "輸入主題名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>關鍵字</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.create.keywords,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.keywords = $event,
              placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs text-sand-400 mt-1"${_scopeId}> 多個關鍵字請以逗號分隔 </p></div>`);
            if (vueExports.unref(state).feature.create.error) {
              _push2(`<p class="text-sm text-red-500"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).feature.create.error)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex justify-end gap-3"${_scopeId}>`);
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
              disabled: !vueExports.unref(state).feature.create.name.trim(),
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
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 新增聊天主題 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 建立新的聊天主題與關鍵字 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "主題名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.create.name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.name = $event,
                      placeholder: "輸入主題名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "關鍵字"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.create.keywords,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.create.keywords = $event,
                      placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    vueExports.createVNode("p", { class: "text-xs text-sand-400 mt-1" }, " 多個關鍵字請以逗號分隔 ")
                  ]),
                  vueExports.unref(state).feature.create.error ? (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 0,
                    class: "text-sm text-red-500"
                  }, vueExports.toDisplayString(vueExports.unref(state).feature.create.error), 1)) : vueExports.createCommentVNode("", true)
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
                    disabled: !vueExports.unref(state).feature.create.name.trim(),
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
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 編輯聊天主題 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 修改主題名稱與關鍵字 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>主題名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.edit.name,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.name = $event,
              placeholder: "輸入主題名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>關鍵字</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.edit.keywords,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.keywords = $event,
              placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs text-sand-400 mt-1"${_scopeId}> 多個關鍵字請以逗號分隔 </p></div></div><div class="flex justify-end gap-3"${_scopeId}>`);
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
              disabled: !vueExports.unref(state).feature.edit.name.trim(),
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
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 編輯聊天主題 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 修改主題名稱與關鍵字 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "主題名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.edit.name,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.name = $event,
                      placeholder: "輸入主題名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "關鍵字"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.edit.keywords,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.edit.keywords = $event,
                      placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    vueExports.createVNode("p", { class: "text-xs text-sand-400 mt-1" }, " 多個關鍵字請以逗號分隔 ")
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
                    disabled: !vueExports.unref(state).feature.edit.name.trim(),
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
            _push2(`</div><h3 class="text-lg font-semibold text-sand-950 mb-2"${_scopeId}> 確認刪除 </h3><p class="text-sm text-sand-500 mb-6"${_scopeId}> 確定要刪除此主題嗎？底下所有卡片也會一併刪除，此操作無法復原。 </p><div class="flex justify-center gap-3"${_scopeId}>`);
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
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-6" }, " 確定要刪除此主題嗎？底下所有卡片也會一併刪除，此操作無法復原。 "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/chatbot/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BIxXPzZO.mjs.map
