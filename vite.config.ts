import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// import less from "vite-plugin-less";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  // 配置less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
