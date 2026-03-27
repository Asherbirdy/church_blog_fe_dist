import { u as useRequestApi } from './useRequestApi-BBY0zkpq.mjs';
import { P as PublicRequestUrl, U as UserRequestUrl } from './server.mjs';

const useAuthApi = {
  loginSendOtp: async (body) => {
    return await useRequestApi(PublicRequestUrl.AuthLoginSendOtp, {
      method: "POST",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  login: async (body) => {
    return await useRequestApi(PublicRequestUrl.AuthLogin, {
      method: "POST",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  logout: async () => {
    return await useRequestApi(UserRequestUrl.AuthLogout, {
      method: "DELETE"
    });
  },
  refreshToken: async () => {
    return await useRequestApi(UserRequestUrl.AuthRefreshToken, {
      method: "POST"
    });
  },
  checkValidToken: async () => {
    return await useRequestApi(UserRequestUrl.AuthCheckValidToken, {
      method: "GET"
    });
  },
  sendVerificationEmail: async (body) => {
    return await useRequestApi(UserRequestUrl.AuthSendVerificationEmail, {
      method: "POST",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  changePasswordWithOTP: async (body) => {
    return await useRequestApi(UserRequestUrl.AuthChangePasswordWithOTP, {
      method: "POST",
      body,
      server: false,
      lazy: true,
      immediate: false,
      watch: false
    });
  },
  forgetPasswordEmailOTP: async (body) => {
    return await useRequestApi(
      PublicRequestUrl.AuthForgetPasswordEmailOTP,
      {
        method: "POST",
        body,
        server: false,
        lazy: true,
        immediate: false,
        watch: false
      }
    );
  },
  forgetPasswordChangePassword: async (body) => {
    return await useRequestApi(
      PublicRequestUrl.AuthForgetPasswordChangePassword,
      {
        method: "POST",
        body,
        server: false,
        lazy: true,
        immediate: false,
        watch: false
      }
    );
  }
};

export { useAuthApi as u };
//# sourceMappingURL=useAuthApi-DtVk7GDg.mjs.map
