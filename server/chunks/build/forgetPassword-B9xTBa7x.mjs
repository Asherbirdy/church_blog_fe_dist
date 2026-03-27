import { v as vueExports, u as useHead, o as useToast, s as serverRenderer_cjs_prodExports, d as _sfc_main$d, f as _sfc_main$8, a as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-DnnJ1_4i.mjs';
import { u as useAuthApi } from './useAuthApi-DtVk7GDg.mjs';
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
  __name: "forgetPassword",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "忘記密碼 — 小羊天地"
    });
    useToast();
    const state = vueExports.ref({
      data: {
        form: {
          email: "",
          otp: "",
          newPassword: ""
        }
      },
      feature: {
        step: "email",
        showPassword: false
      }
    });
    const {
      execute: SendOtpRequest,
      error: SendOtpError,
      status: SendOtpStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAuthApi.forgetPasswordEmailOTP(state.value.data.form)), __temp = await __temp, __restore(), __temp);
    const {
      execute: ChangePasswordRequest,
      error: ChangePasswordError,
      status: ChangePasswordStatus
    } = ([__temp, __restore] = vueExports.withAsyncContext(() => useAuthApi.forgetPasswordChangePassword(state.value.data.form)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$d;
      const _component_UInput = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "min-h-screen flex bg-sand-50" }, _attrs))}><div class="hidden lg:flex lg:w-1/2 bg-sand-950 relative overflow-hidden flex-col justify-between p-12"><div class="absolute inset-0 opacity-10"><div class="absolute top-20 left-20 w-64 h-64 rounded-full border border-sand-400"></div><div class="absolute bottom-32 right-16 w-96 h-96 rounded-full border border-sand-400"></div><div class="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-sand-400"></div></div><div class="relative z-10 flex items-center gap-2.5"><div class="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-church",
        class: "text-white text-lg"
      }, null, _parent));
      _push(`</div><span class="font-display text-xl font-semibold text-white tracking-tight">小羊天地</span></div><div class="relative z-10"><p class="font-display text-4xl text-white leading-snug mb-6"> 「你們祈求，就給你們；<br> 尋找，就尋見；<br> 叩門，就給你們開門。」 </p><p class="text-sand-400 text-sm"> 馬太福音 7:7 </p></div><div class="relative z-10"><p class="text-sand-500 text-sm"> © ${serverRenderer_cjs_prodExports.ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} 小羊天地 </p></div></div><div class="flex-1 flex items-center justify-center px-6 py-12"><div class="w-full max-w-sm animate-fade-up"><div class="lg:hidden flex items-center gap-2.5 mb-10"><div class="w-8 h-8 bg-sand-950 rounded-lg flex items-center justify-center">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-church",
        class: "text-white text-lg"
      }, null, _parent));
      _push(`</div><span class="font-display text-xl font-semibold text-sand-950 tracking-tight">小羊天地</span></div>`);
      if (vueExports.unref(state).feature.step === "email") {
        _push(`<!--[--><div class="mb-8"><h1 class="font-display text-3xl font-bold text-sand-950 mb-2"> 忘記密碼 </h1><p class="text-sand-500 text-sm"> 輸入你的電子信箱，我們將寄送驗證碼 </p></div><form class="space-y-5"><div class="flex flex-col space-y-1.5"><label class="text-sm font-medium text-sand-700"> 電子信箱 </label>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(state).data.form.email,
          "onUpdate:modelValue": ($event) => vueExports.unref(state).data.form.email = $event,
          type: "email",
          placeholder: "you@example.com",
          icon: "i-lucide-mail",
          size: "lg",
          required: "",
          ui: { base: "rounded-xl" }
        }, null, _parent));
        _push(`</div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          type: "submit",
          label: "寄送驗證碼",
          size: "lg",
          block: "",
          loading: vueExports.unref(SendOtpStatus) === "pending",
          class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800 mt-2"
        }, null, _parent));
        _push(`</form>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "block w-full text-center text-sm text-sand-500 hover:text-sand-700 transition-colors mt-5"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 返回登入 `);
            } else {
              return [
                vueExports.createTextVNode(" 返回登入 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(state).feature.step === "otp") {
        _push(`<!--[--><div class="mb-8"><h1 class="font-display text-3xl font-bold text-sand-950 mb-2"> 重設密碼 </h1><p class="text-sand-500 text-sm"> 驗證碼已寄送至 ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(state).data.form.email)}</p></div><form class="space-y-5"><div class="flex flex-col space-y-1.5"><label class="text-sm font-medium text-sand-700"> 驗證碼 (OTP) </label>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(state).data.form.otp,
          "onUpdate:modelValue": ($event) => vueExports.unref(state).data.form.otp = $event,
          type: "text",
          placeholder: "請輸入驗證碼",
          icon: "i-lucide-shield-check",
          size: "lg",
          required: "",
          ui: { base: "rounded-xl" }
        }, null, _parent));
        _push(`</div><div class="flex flex-col space-y-1.5"><label class="text-sm font-medium text-sand-700"> 新密碼 </label>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UInput, {
          modelValue: vueExports.unref(state).data.form.newPassword,
          "onUpdate:modelValue": ($event) => vueExports.unref(state).data.form.newPassword = $event,
          type: vueExports.unref(state).feature.showPassword ? "text" : "password",
          placeholder: "請輸入新密碼",
          icon: "i-lucide-lock",
          size: "lg",
          required: "",
          ui: { base: "rounded-xl" }
        }, {
          trailing: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UIcon, {
                name: vueExports.unref(state).feature.showPassword ? "i-lucide-eye-off" : "i-lucide-eye",
                class: "text-sand-400 cursor-pointer hover:text-sand-600 transition-colors",
                onClick: ($event) => vueExports.unref(state).feature.showPassword = !vueExports.unref(state).feature.showPassword
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(_component_UIcon, {
                  name: vueExports.unref(state).feature.showPassword ? "i-lucide-eye-off" : "i-lucide-eye",
                  class: "text-sand-400 cursor-pointer hover:text-sand-600 transition-colors",
                  onClick: ($event) => vueExports.unref(state).feature.showPassword = !vueExports.unref(state).feature.showPassword
                }, null, 8, ["name", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_UButton, {
          type: "submit",
          label: "重設密碼",
          size: "lg",
          block: "",
          loading: vueExports.unref(ChangePasswordStatus) === "pending",
          class: "rounded-xl bg-sand-950 text-white hover:bg-sand-800 mt-2"
        }, null, _parent));
        _push(`<button type="button" class="w-full text-center text-sm text-sand-500 hover:text-sand-700 transition-colors"> 返回重新輸入信箱 </button><button type="button" class="w-full text-center text-sm text-sage-600 hover:text-sage-700 transition-colors"> 重新寄送驗證碼 </button></form><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgetPassword-B9xTBa7x.mjs.map
