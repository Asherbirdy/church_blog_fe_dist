import { u as useRequestApi } from './useRequestApi-Dzr3oiLa.mjs';
import { U as UserRequestUrl, g as useNuxtApp } from './server.mjs';

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
  update: async (id, payload) => {
    return await useRequestApi(
      `${UserRequestUrl.ChatTopic}/${id}`,
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
      `${UserRequestUrl.ChatTopic}/${id}`,
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

export { useChatTopicApi as u };
//# sourceMappingURL=useChatTopicApi-CN8uOsKW.mjs.map
