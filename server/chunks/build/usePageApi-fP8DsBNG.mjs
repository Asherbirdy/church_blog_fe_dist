import { u as useRequestApi } from './useRequestApi-Cl5I5_Vv.mjs';
import { U as UserRequestUrl, P as PublicRequestUrl, g as useNuxtApp } from './server.mjs';

const usePageApi = {
  getOne: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.PageInfo}/${id}`,
      {
        method: "GET",
        server: false,
        lazy: false
      }
    );
  },
  create: async (payload) => {
    return await useRequestApi(
      UserRequestUrl.Page,
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
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(
      UserRequestUrl.Page,
      {
        method: "GET",
        server: false,
        lazy: false,
        key: UserRequestUrl.Page,
        getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    );
  },
  update: async (payload) => {
    return await useRequestApi(
      `${UserRequestUrl.PageUpdate}/${payload.id}`,
      {
        method: "PATCH",
        body: payload.body,
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  getOnline: async () => {
    return await useRequestApi(
      `${UserRequestUrl.PageOnline}`,
      {
        method: "GET",
        server: false,
        lazy: false
      }
    );
  },
  getByRouteName: async (routeName) => {
    return await useRequestApi(
      `${PublicRequestUrl.PageRoute}/${routeName}`,
      {
        method: "GET"
      }
    );
  },
  editedHtml: async (id, body) => {
    return await useRequestApi(
      `${UserRequestUrl.PageEditedHtml}/${id}`,
      {
        method: "PATCH",
        body,
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  setToOnlineScheduled: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.PageSetToOnlineScheduled}/${id}`,
      {
        method: "PATCH",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  cancelScheduled: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.PageCancelScheduled}/${id}`,
      {
        method: "PATCH",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  setToOfflineScheduled: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.PageSetToOfflineScheduled}/${id}`,
      {
        method: "PATCH",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  goToPreviousHtml: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.PageGoToPreviousHtml}/${id}`,
      {
        method: "PATCH",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  },
  beforeBuildAndDeploy: async () => {
    return await useRequestApi(
      UserRequestUrl.PageBeforeBuildAndDeploy,
      {
        method: "PATCH",
        immediate: false,
        server: false,
        watch: false,
        lazy: true
      }
    );
  }
};

export { usePageApi as u };
//# sourceMappingURL=usePageApi-fP8DsBNG.mjs.map
