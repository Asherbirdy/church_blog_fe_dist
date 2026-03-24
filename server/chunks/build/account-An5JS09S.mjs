import { v as vueExports, s as serverRenderer_cjs_prodExports, f as _sfc_main$8, d as _sfc_main$d, U as UserRequestUrl, g as useNuxtApp, P as PublicRequestUrl, h as clearNuxtData } from './server.mjs';
import { _ as _sfc_main$1 } from './Modal-CF51FfLI.mjs';
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

const useAccountApi = {
  adminInit: async (body) => {
    return await useRequestApi(PublicRequestUrl.AccountAdminInit, {
      method: "POST",
      body
    });
  },
  adminRegisterUser: async (body) => {
    return await useRequestApi(UserRequestUrl.AccountAdminRegisterUser, {
      method: "POST",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  deleteUser: async (id) => {
    return await useRequestApi(`${UserRequestUrl.AccountDeleteUser}/${id}`, {
      method: "DELETE",
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  editAccess: async (body) => {
    return await useRequestApi(UserRequestUrl.AccountEditAccess, {
      method: "PATCH",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  getAllUser: async () => {
    return await useRequestApi(UserRequestUrl.AccountGetAllUser, {
      method: "GET",
      server: false,
      lazy: true,
      key: UserRequestUrl.AccountGetAllUser,
      getCachedData: (key) => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key]
    });
  }
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const accessOptions = [
      { label: "頁面管理", value: "page" },
      { label: "聊天機器人", value: "chatbot" }
    ];
    const state = vueExports.ref({
      data: {},
      feature: {
        deleteModal: false,
        deleteTargetId: "",
        accessModal: false,
        accessTargetId: "",
        accessTargetName: "",
        accessSelected: [],
        accessLoading: false
      }
    });
    const { data, execute } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAccountApi.getAllUser()), __temp = await __temp, __restore(), __temp);
    const users = vueExports.computed(() => data.value?.users ?? []);
    const editAccessBody = vueExports.computed(() => ({
      userId: state.value.feature.accessTargetId,
      access: state.value.feature.accessSelected
    }));
    const { execute: executeEditAccess } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAccountApi.editAccess(vueExports.toRef(() => editAccessBody.value))), __temp = await __temp, __restore(), __temp);
    const roleLabel = (role) => role === "admin" ? "管理員" : "一般用戶";
    const accessLabel = (value) => {
      return accessOptions.find((o) => o.value === value)?.label ?? value;
    };
    const openDeleteModal = (id) => {
      const { feature } = state.value;
      feature.deleteTargetId = id;
      feature.deleteModal = true;
    };
    const confirmDelete = async () => {
      const { feature } = state.value;
      await useAccountApi.deleteUser(feature.deleteTargetId);
      await execute();
      feature.deleteModal = false;
      feature.deleteTargetId = "";
    };
    const openAccessModal = (user) => {
      const { feature } = state.value;
      feature.accessTargetId = user.id;
      feature.accessTargetName = user.name;
      feature.accessSelected = [...user.access];
      feature.accessModal = true;
    };
    const toggleAccess = (value) => {
      const { feature } = state.value;
      const idx = feature.accessSelected.indexOf(value);
      if (idx === -1) {
        feature.accessSelected.push(value);
      } else {
        feature.accessSelected.splice(idx, 1);
      }
    };
    const confirmEditAccess = async () => {
      const { feature } = state.value;
      feature.accessLoading = true;
      await executeEditAccess();
      clearNuxtData(UserRequestUrl.AccountGetAllUser);
      await execute();
      feature.accessLoading = false;
      feature.accessModal = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_UModal = _sfc_main$1;
      const _component_UIcon = _sfc_main$d;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full animate-fade-up" }, _attrs))}><div class="mb-8"><h2 class="font-display text-2xl font-bold text-sand-950 mb-1"> 帳號管理 </h2><p class="text-sm text-sand-500"> 管理系統使用者帳號 </p></div><div class="hidden lg:block bg-white rounded-2xl border border-sand-200 shadow-sm"><table class="w-full text-sm"><thead><tr class="border-b border-sand-200 bg-sand-50"><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 姓名 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 電子信箱 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 角色 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 權限 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 狀態 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 建立日期 </th><th class="text-left px-6 py-3 text-xs font-medium text-sand-400 uppercase tracking-wide"> 操作 </th></tr></thead><tbody><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(users), (user) => {
        _push(`<tr class="border-b border-sand-100 last:border-b-0 hover:bg-sand-50 transition-colors"><td class="px-6 py-4 font-medium text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(user.name)}</td><td class="px-6 py-4 text-sand-600">${serverRenderer_cjs_prodExports.ssrInterpolate(user.email)}</td><td class="px-6 py-4"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([user.role === "admin" ? "bg-sage-100 text-sage-700" : "bg-sand-100 text-sand-600", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(roleLabel(user.role))}</span></td><td class="px-6 py-4"><div class="flex flex-wrap gap-1"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(user.access, (acc) => {
          _push(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">${serverRenderer_cjs_prodExports.ssrInterpolate(accessLabel(acc))}</span>`);
        });
        _push(`<!--]-->`);
        if (!user.access?.length) {
          _push(`<span class="text-sand-400 text-xs"> 無權限 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="px-6 py-4"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([user.isBlocked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(user.isBlocked ? "已封鎖" : "正常")}</span></td><td class="px-6 py-4 text-sand-500">${serverRenderer_cjs_prodExports.ssrInterpolate(user.createdAt)}</td><td class="px-6 py-4"><div class="flex gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          variant: "soft",
          size: "xs",
          icon: "i-lucide-shield",
          onClick: ($event) => openAccessModal(user)
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 權限 `);
            } else {
              return [
                vueExports.createTextVNode(" 權限 ")
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
          onClick: ($event) => openDeleteModal(user.id)
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
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="lg:hidden space-y-3"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(users), (user) => {
        _push(`<div class="bg-white rounded-2xl border border-sand-200 shadow-sm p-4"><div class="flex items-center justify-between mb-3"><div><p class="font-medium text-sand-950">${serverRenderer_cjs_prodExports.ssrInterpolate(user.name)}</p><p class="text-xs text-sand-500 mt-0.5">${serverRenderer_cjs_prodExports.ssrInterpolate(user.email)}</p></div><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([user.isBlocked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(user.isBlocked ? "已封鎖" : "正常")}</span></div><div class="flex flex-wrap items-center gap-1.5 mb-3"><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([user.role === "admin" ? "bg-sage-100 text-sage-700" : "bg-sand-100 text-sand-600", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(roleLabel(user.role))}</span><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(user.access, (acc) => {
          _push(`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-sage-100 text-sage-700">${serverRenderer_cjs_prodExports.ssrInterpolate(accessLabel(acc))}</span>`);
        });
        _push(`<!--]-->`);
        if (!user.access?.length) {
          _push(`<span class="text-sand-400 text-xs"> 無權限 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center justify-between"><span class="text-xs text-sand-400">${serverRenderer_cjs_prodExports.ssrInterpolate(user.createdAt)}</span><div class="flex gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          variant: "soft",
          size: "xs",
          icon: "i-lucide-shield",
          onClick: ($event) => openAccessModal(user)
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 權限 `);
            } else {
              return [
                vueExports.createTextVNode(" 權限 ")
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
          onClick: ($event) => openDeleteModal(user.id)
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
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
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
            _push2(`</div><h3 class="text-lg font-semibold text-sand-950 mb-2"${_scopeId}> 確認刪除 </h3><p class="text-sm text-sand-500 mb-6"${_scopeId}> 確定要刪除此帳號嗎？此操作無法復原。 </p><div class="flex justify-center gap-3"${_scopeId}>`);
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
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-6" }, " 確定要刪除此帳號嗎？此操作無法復原。 "),
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
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UModal, {
        open: vueExports.unref(state).feature.accessModal,
        "onUpdate:open": ($event) => vueExports.unref(state).feature.accessModal = $event
      }, {
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h3 class="text-lg font-semibold text-sand-950 mb-1"${_scopeId}> 編輯權限 </h3><p class="text-sm text-sand-500 mb-5"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).feature.accessTargetName)}</p><div class="space-y-3 mb-6"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(accessOptions, (option) => {
              _push2(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(state).feature.accessSelected.includes(option.value) ? "border-sage-300 bg-sage-50" : "border-sand-200 bg-white hover:border-sand-300", "w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all"])}"${_scopeId}><span class="text-sm font-medium text-sand-950"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(option.label)}</span>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: vueExports.unref(state).feature.accessSelected.includes(option.value) ? "i-lucide-check-circle" : "i-lucide-circle",
                class: [vueExports.unref(state).feature.accessSelected.includes(option.value) ? "text-sage-600" : "text-sand-300", "text-lg"]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            });
            _push2(`<!--]--></div><div class="flex justify-end gap-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
              variant: "outline",
              color: "neutral",
              onClick: ($event) => vueExports.unref(state).feature.accessModal = false
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
              color: "primary",
              loading: vueExports.unref(state).feature.accessLoading,
              onClick: confirmEditAccess
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
                vueExports.createVNode("h3", { class: "text-lg font-semibold text-sand-950 mb-1" }, " 編輯權限 "),
                vueExports.createVNode("p", { class: "text-sm text-sand-500 mb-5" }, vueExports.toDisplayString(vueExports.unref(state).feature.accessTargetName), 1),
                vueExports.createVNode("div", { class: "space-y-3 mb-6" }, [
                  (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(accessOptions, (option) => {
                    return vueExports.createVNode("button", {
                      key: option.value,
                      class: ["w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all", vueExports.unref(state).feature.accessSelected.includes(option.value) ? "border-sage-300 bg-sage-50" : "border-sand-200 bg-white hover:border-sand-300"],
                      onClick: ($event) => toggleAccess(option.value)
                    }, [
                      vueExports.createVNode("span", { class: "text-sm font-medium text-sand-950" }, vueExports.toDisplayString(option.label), 1),
                      vueExports.createVNode(_component_UIcon, {
                        name: vueExports.unref(state).feature.accessSelected.includes(option.value) ? "i-lucide-check-circle" : "i-lucide-circle",
                        class: [vueExports.unref(state).feature.accessSelected.includes(option.value) ? "text-sage-600" : "text-sand-300", "text-lg"]
                      }, null, 8, ["name", "class"])
                    ], 10, ["onClick"]);
                  }), 64))
                ]),
                vueExports.createVNode("div", { class: "flex justify-end gap-3" }, [
                  vueExports.createVNode(_component_UButton, {
                    variant: "outline",
                    color: "neutral",
                    onClick: ($event) => vueExports.unref(state).feature.accessModal = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 取消 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  vueExports.createVNode(_component_UButton, {
                    color: "primary",
                    loading: vueExports.unref(state).feature.accessLoading,
                    onClick: confirmEditAccess
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" 儲存 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account-An5JS09S.mjs.map
