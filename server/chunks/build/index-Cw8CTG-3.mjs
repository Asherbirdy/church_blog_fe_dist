import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d, h as clearNuxtData, U as UserRequestUrl } from './server.mjs';
import { _ as _sfc_main$1 } from './Modal-CF51FfLI.mjs';
import { _ as _sfc_main$2 } from './Input-BWOivtYQ.mjs';
import { u as useChatTopicApi } from './useChatTopicApi-CN8uOsKW.mjs';
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

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const state = vueExports.ref({
      data: {},
      feature: {
        createModal: false,
        createName: "",
        createKeywords: "",
        createLoading: false,
        createError: "",
        editModal: false,
        editId: "",
        editName: "",
        editKeywords: "",
        editLoading: false,
        deleteModal: false,
        deleteTargetId: "",
        expandedId: ""
      }
    });
    const { data, execute } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.getAll()), __temp = await __temp, __restore(), __temp);
    const chatTopics = vueExports.computed(() => data.value?.chatTopics ?? []);
    const openCreateModal = () => {
      const { feature } = state.value;
      feature.createName = "";
      feature.createKeywords = "";
      feature.createError = "";
      feature.createModal = true;
    };
    const confirmCreate = async () => {
      const { feature } = state.value;
      if (!feature.createName.trim()) return;
      feature.createLoading = true;
      feature.createError = "";
      const keywords = feature.createKeywords.split(",").map((k) => k.trim()).filter(Boolean);
      const { execute: exec, error } = await useChatTopicApi.create({
        name: feature.createName.trim(),
        keywords
      });
      await exec();
      if (error.value?.data?.error === "CHAT_TOPIC_NAME_ALREADY_EXISTS") {
        feature.createError = "主題名稱已存在";
        feature.createLoading = false;
        return;
      }
      clearNuxtData(UserRequestUrl.ChatTopic);
      await execute();
      feature.createLoading = false;
      feature.createModal = false;
    };
    const openEditModal = (topic) => {
      const { feature } = state.value;
      feature.editId = topic.id;
      feature.editName = topic.name;
      feature.editKeywords = topic.keywords.join(", ");
      feature.editModal = true;
    };
    const confirmEdit = async () => {
      const { feature } = state.value;
      if (!feature.editName.trim()) return;
      feature.editLoading = true;
      const keywords = feature.editKeywords.split(",").map((k) => k.trim()).filter(Boolean);
      const { execute: exec } = await useChatTopicApi.update(feature.editId, {
        name: feature.editName.trim(),
        keywords
      });
      await exec();
      clearNuxtData(UserRequestUrl.ChatTopic);
      await execute();
      feature.editLoading = false;
      feature.editModal = false;
    };
    const openDeleteModal = (id) => {
      const { feature } = state.value;
      feature.deleteTargetId = id;
      feature.deleteModal = true;
    };
    const confirmDelete = async () => {
      const { feature } = state.value;
      const { execute: exec } = await useChatTopicApi.delete(feature.deleteTargetId);
      await exec();
      clearNuxtData(UserRequestUrl.ChatTopic);
      await execute();
      feature.deleteModal = false;
      feature.deleteTargetId = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UIcon = _sfc_main$d;
      const _component_UModal = _sfc_main$1;
      const _component_UInput = _sfc_main$2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full animate-fade-up" }, _attrs))}><div class="flex items-center justify-between mb-8"><div><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 聊天機器人 </h2><p class="text-sm text-sand-500"> 管理聊天主題與關鍵字 </p></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-plus",
        onClick: openCreateModal
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
      if (!vueExports.unref(chatTopics).length) {
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
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(chatTopics), (topic) => {
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
          onClick: ($event) => openEditModal(topic)
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
          onClick: ($event) => openDeleteModal(topic.id)
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
        open: vueExports.unref(state).feature.createModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.createModal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 新增聊天主題 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 建立新的聊天主題與關鍵字 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>主題名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.createName,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createName = $event,
              placeholder: "輸入主題名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>關鍵字</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.createKeywords,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createKeywords = $event,
              placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs text-sand-400 mt-1"${_scopeId}> 多個關鍵字請以逗號分隔 </p></div>`);
            if (vueExports.unref(state).feature.createError) {
              _push2(`<p class="text-sm text-red-500"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).feature.createError)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.createModal = false
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
              loading: vueExports.unref(state).feature.createLoading,
              disabled: !vueExports.unref(state).feature.createName.trim(),
              onClick: confirmCreate
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
                      modelValue: vueExports.unref(state).feature.createName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createName = $event,
                      placeholder: "輸入主題名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "關鍵字"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.createKeywords,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createKeywords = $event,
                      placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    vueExports.createVNode("p", { class: "text-xs text-sand-400 mt-1" }, " 多個關鍵字請以逗號分隔 ")
                  ]),
                  vueExports.unref(state).feature.createError ? (vueExports.openBlock(), vueExports.createBlock("p", {
                    key: 0,
                    class: "text-sm text-red-500"
                  }, vueExports.toDisplayString(vueExports.unref(state).feature.createError), 1)) : vueExports.createCommentVNode("", true)
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    onClick: ($event) => vueExports.unref(state).feature.createModal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    loading: vueExports.unref(state).feature.createLoading,
                    disabled: !vueExports.unref(state).feature.createName.trim(),
                    onClick: confirmCreate
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 建立 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.editModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.editModal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 編輯聊天主題 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 修改主題名稱與關鍵字 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>主題名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.editName,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editName = $event,
              placeholder: "輸入主題名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>關鍵字</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.editKeywords,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editKeywords = $event,
              placeholder: "以逗號分隔，例如：聚會, 禮拜, 時間",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-xs text-sand-400 mt-1"${_scopeId}> 多個關鍵字請以逗號分隔 </p></div></div><div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.editModal = false
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
              loading: vueExports.unref(state).feature.editLoading,
              disabled: !vueExports.unref(state).feature.editName.trim(),
              onClick: confirmEdit
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
                      modelValue: vueExports.unref(state).feature.editName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editName = $event,
                      placeholder: "輸入主題名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "關鍵字"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.editKeywords,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editKeywords = $event,
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
                    onClick: ($event) => vueExports.unref(state).feature.editModal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    loading: vueExports.unref(state).feature.editLoading,
                    disabled: !vueExports.unref(state).feature.editName.trim(),
                    onClick: confirmEdit
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 儲存 ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.deleteModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.deleteModal = $event
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
              onClick: ($event) => vueExports.unref(state).feature.deleteModal = false
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
              onClick: confirmDelete
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
                    onClick: ($event) => vueExports.unref(state).feature.deleteModal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    color: "error",
                    onClick: confirmDelete
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 確認刪除 ")
                    ]),
                    _: 1
                  })
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
//# sourceMappingURL=index-Cw8CTG-3.mjs.map
