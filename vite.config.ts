import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const resolvePath = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
      "@components": resolvePath("./src/components"),
      "@assets": resolvePath("./src/assets"),
      "@services": resolvePath("./src/services"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
  },
});
