import { p as pinia_prodExports, v as vueExports } from './server.mjs';

const useUserStore = pinia_prodExports.defineStore("user", () => {
  const state = vueExports.ref({
    data: {
      id: "",
      name: "",
      email: "",
      role: "",
      access: []
    },
    feature: {
      loading: false
    }
  });
  const userInfo = vueExports.computed(() => state.value.data);
  const isLoading = vueExports.computed(() => state.value.feature.loading);
  const setLoading = (value) => state.value.feature.loading = value;
  const setUserInfo = (data) => state.value.data = data;
  const hasAccess = (access) => state.value.data.access.includes(access);
  return {
    isLoading,
    userInfo,
    setLoading,
    setUserInfo,
    hasAccess
  };
});

export { useUserStore as u };
//# sourceMappingURL=useUserStore-ckiJDiVD.mjs.map
