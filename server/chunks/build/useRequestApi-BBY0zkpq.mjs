import { v as vueExports, g as useNuxtApp, w as useRuntimeConfig, a8 as fetchDefaults, a9 as useAsyncData, aa as useRequestFetch, a7 as requireShared_cjs_prod } from './server.mjs';
import { J as hash } from '../nitro/nitro.mjs';

var shared_cjs_prodExports = /* @__PURE__ */ requireShared_cjs_prod();
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = vueExports.computed(() => vueExports.toValue(request));
  const key = vueExports.computed(() => vueExports.toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = vueExports.reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!vueExports.toValue(opts.baseURL) || vueExports.toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    vueExports.toValue(opts.method)?.toUpperCase() || "GET",
    vueExports.toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = vueExports.toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[vueExports.toValue(key)] = vueExports.toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = vueExports.toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (shared_cjs_prodExports.isPlainObject(value)) {
      segments.push(hash(vueExports.reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
function useRequestApi(url, options) {
  const config = useRuntimeConfig();
  const baseUrl = config.public.API_URL;
  const fullUrl = vueExports.isRef(url) ? vueExports.computed(() => `${baseUrl}${url.value}`) : `${baseUrl}${url}`;
  return useFetch(
    fullUrl,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...options,
      // option.method 會報錯 所以用 any
      $fetch: useNuxtApp().$Fetch
    },
    "$jMrqrSp9uc"
    /* nuxt-injected */
  );
}

export { useRequestApi as u };
//# sourceMappingURL=useRequestApi-BBY0zkpq.mjs.map
