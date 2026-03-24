import { v as vueExports, c as useRoute$1, U as UserRequestUrl, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d, h as clearNuxtData, r as refreshNuxtData } from './server.mjs';
import { _ as _sfc_main$1 } from './Modal-CF51FfLI.mjs';
import { _ as _sfc_main$2 } from './Input-BWOivtYQ.mjs';
import { u as useChatTopicApi } from './useChatTopicApi-CN8uOsKW.mjs';
import { u as useRequestApi } from './useRequestApi-Dzr3oiLa.mjs';
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
  update: async (id, payload) => {
    const url = vueExports.computed(() => `${UserRequestUrl.ChatCard}/${vueExports.unref(id)}`);
    return await useRequestApi(
      url,
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
    const url = vueExports.computed(() => `${UserRequestUrl.ChatCard}/${vueExports.unref(id)}`);
    return await useRequestApi(
      url,
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
        createModal: false,
        createName: "",
        createUrl: "",
        createDescription: "",
        createLoading: false,
        editModal: false,
        editId: "",
        editName: "",
        editUrl: "",
        editDescription: "",
        editLoading: false,
        deleteModal: false,
        deleteTargetId: ""
      }
    });
    const { data: topicData } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatTopicApi.getOne(topicId)), __temp = await __temp, __restore(), __temp);
    const topic = vueExports.computed(() => topicData.value?.chatTopic);
    const cards = vueExports.computed(() => topic.value?.cards ?? []);
    const {
      execute: executeCreate
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.create(
      vueExports.toRef(() => ({
        name: state.value.feature.createName.trim(),
        url: state.value.feature.createUrl.trim(),
        description: state.value.feature.createDescription.trim(),
        chatTopicId: topicId
      }))
    )), __temp = await __temp, __restore(), __temp);
    const editId = vueExports.computed(() => state.value.feature.editId);
    const {
      execute: executeEdit
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.update(editId, vueExports.toRef(() => ({
      name: state.value.feature.editName.trim(),
      url: state.value.feature.editUrl.trim(),
      description: state.value.feature.editDescription.trim()
    })))), __temp = await __temp, __restore(), __temp);
    const deleteId = vueExports.computed(() => state.value.feature.deleteTargetId);
    const { execute: executeDelete } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.delete(deleteId)), __temp = await __temp, __restore(), __temp);
    const toggleId = vueExports.ref("");
    const toggleBody = vueExports.ref({});
    const { execute: executeToggle } = ([__temp, __restore] = vueExports.withAsyncContext(() => useChatCardApi.update(vueExports.computed(() => toggleId.value), vueExports.toRef(() => toggleBody.value))), __temp = await __temp, __restore(), __temp);
    const refreshTopic = async () => {
      clearNuxtData(topicKey);
      await refreshNuxtData();
    };
    const openCreateModal = () => {
      const { feature } = state.value;
      feature.createName = "";
      feature.createUrl = "";
      feature.createDescription = "";
      feature.createModal = true;
    };
    const confirmCreate = async () => {
      const { feature } = state.value;
      if (!feature.createName.trim() || !feature.createUrl.trim()) return;
      feature.createLoading = true;
      await executeCreate();
      await refreshTopic();
      feature.createLoading = false;
      feature.createModal = false;
    };
    const openEditModal = (card) => {
      const { feature } = state.value;
      feature.editId = card.id;
      feature.editName = card.name;
      feature.editUrl = card.url;
      feature.editDescription = card.description;
      feature.editModal = true;
    };
    const confirmEdit = async () => {
      const { feature } = state.value;
      if (!feature.editName.trim() || !feature.editUrl.trim()) return;
      feature.editLoading = true;
      await executeEdit();
      await refreshTopic();
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
      await executeDelete();
      await refreshTopic();
      feature.deleteModal = false;
      feature.deleteTargetId = "";
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
      _push(`<div class="flex-1"><h2 class="font-display text-2xl font-bold text-sand-950 mb-1">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(topic)?.name ?? "載入中...")}</h2><div class="flex flex-wrap gap-1"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(topic)?.keywords, (keyword) => {
        _push(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">${serverRenderer_cjs_prodExports.ssrInterpolate(keyword)}</span>`);
      });
      _push(`<!--]--></div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-plus",
        onClick: openCreateModal
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
      if (!vueExports.unref(cards).length) {
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
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(cards), (card) => {
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
          onClick: ($event) => openEditModal(card)
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
          onClick: ($event) => openDeleteModal(card.id)
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
        open: vueExports.unref(state).feature.createModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.createModal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 新增卡片 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 建立新的聊天卡片 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.createName,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createName = $event,
              placeholder: "輸入卡片名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>網址</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.createUrl,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createUrl = $event,
              placeholder: "https://...",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>描述</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.createDescription,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createDescription = $event,
              placeholder: "輸入卡片描述（選填）",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end gap-3"${_scopeId}>`);
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
              disabled: !vueExports.unref(state).feature.createName.trim() || !vueExports.unref(state).feature.createUrl.trim(),
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
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 新增卡片 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 建立新的聊天卡片 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.createName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createName = $event,
                      placeholder: "輸入卡片名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "網址"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.createUrl,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createUrl = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "描述"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.createDescription,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.createDescription = $event,
                      placeholder: "輸入卡片描述（選填）",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
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
                    disabled: !vueExports.unref(state).feature.createName.trim() || !vueExports.unref(state).feature.createUrl.trim(),
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
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 編輯卡片 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}> 修改卡片資訊 </p><div class="space-y-4 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>名稱</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.editName,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editName = $event,
              placeholder: "輸入卡片名稱",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>網址</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.editUrl,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editUrl = $event,
              placeholder: "https://...",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="block text-sm font-medium text-sand-700 mb-1"${_scopeId}>描述</label>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
              modelValue: vueExports.unref(state).feature.editDescription,
              "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editDescription = $event,
              placeholder: "輸入卡片描述（選填）",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end gap-3"${_scopeId}>`);
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
              disabled: !vueExports.unref(state).feature.editName.trim() || !vueExports.unref(state).feature.editUrl.trim(),
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
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 編輯卡片 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, " 修改卡片資訊 "),
                vueExports.createVNode("div", { class: "space-y-4 mb-6" }, [
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "名稱"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.editName,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editName = $event,
                      placeholder: "輸入卡片名稱",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "網址"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.editUrl,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editUrl = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  vueExports.createVNode("div", null, [
                    vueExports.createVNode("label", { class: "block text-sm font-medium text-sand-700 mb-1" }, "描述"),
                    vueExports.createVNode(_component_UInput, {
                      modelValue: vueExports.unref(state).feature.editDescription,
                      "onUpdate:modelValue": ($event) => vueExports.unref(state).feature.editDescription = $event,
                      placeholder: "輸入卡片描述（選填）",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    disabled: !vueExports.unref(state).feature.editName.trim() || !vueExports.unref(state).feature.editUrl.trim(),
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
            _push2(`</div><h3 class="text-lg font-semibold text-sand-950 mb-2"${_scopeId}> 確認刪除 </h3><p class="text-sm text-sand-500 mb-6"${_scopeId}> 確定要刪除此卡片嗎？此操作無法復原。 </p><div class="flex justify-center gap-3"${_scopeId}>`);
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
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-6" }, " 確定要刪除此卡片嗎？此操作無法復原。 "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/chatbot/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B47tZJDQ.mjs.map
