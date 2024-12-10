// src/Utils/CacheConfig.ts
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

export function createCacheConfig (direction: "ltr" | "rtl") {
  return direction === "rtl"
    ? createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      })
    : createCache({
        key: "mui",
      });
};
