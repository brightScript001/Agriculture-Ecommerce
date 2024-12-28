import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@core": path.resolve(__dirname, "src/modules/core"),
      "@auth": path.resolve(__dirname, "src/modules/auth"),
      "@buyer": path.resolve(__dirname, "src/modules/buyer"),
      "@seller": path.resolve(__dirname, "src/modules/seller"),
      "@payment": path.resolve(__dirname, "src/modules/payment"),
      "@style": path.resolve(__dirname, "src/styles"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
});
