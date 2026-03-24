import { u as useRequestApi } from './useRequestApi-Dzr3oiLa.mjs';
import { g as useNuxtApp, U as UserRequestUrl } from './server.mjs';

const useUserApi = {
  showMe: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(UserRequestUrl.UserShowMe, {
      method: "GET",
      server: false,
      lazy: true,
      key: UserRequestUrl.UserShowMe,
      getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    });
  }
};

export { useUserApi as u };
//# sourceMappingURL=useUserApi-CMFLOU8c.mjs.map
