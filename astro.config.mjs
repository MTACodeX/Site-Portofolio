// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      iconSets: {
        mdi: {
          path: "node_modules/@iconify-json/mdi/icons.json",
        },
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
