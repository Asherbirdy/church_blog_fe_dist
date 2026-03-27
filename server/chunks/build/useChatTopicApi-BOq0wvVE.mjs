import { u as useRequestApi } from './useRequestApi-BBY0zkpq.mjs';
import { v as vueExports, U as UserRequestUrl, g as useNuxtApp } from './server.mjs';

const useChatTopicApi = {
  getAll: async () => {
    const nuxtApp = useNuxtApp();
    return await useRequestApi(
      UserRequestUrl.ChatTopic,
      {
        method: "GET",
        server: false,
        lazy: false,
        key: UserRequestUrl.ChatTopic,
        getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key]
      }
    );
  },
  getOne: async (id) => {
    return await useRequestApi(
      `${UserRequestUrl.ChatTopic}/${id}`,
      {
        method: "GET",
        server: false,
        lazy: false,
        key: `${UserRequestUrl.ChatTopic}-${id}`
      }
    );
  },
  create: async (payload) => {
    return await useRequestApi(
      UserRequestUrl.ChatTopic,
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
      vueExports.computed(() => `${UserRequestUrl.ChatTopic}/${payload.value.id}`),
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
      vueExports.computed(() => `${UserRequestUrl.ChatTopic}/${id.value}`),
      {
        method: "DELETE",
        immediate: false,
        server: false,
        watch: false,
        lazy: false
      }
    );
  }
};

export { useChatTopicApi as u };
//# sourceMappingURL=useChatTopicApi-BOq0wvVE.mjs.map
