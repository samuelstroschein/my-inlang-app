import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    paraglideVitePlugin({ project: "./project.inlang", outdir: "./src/lib/paraglide" }),
    sveltekit(),
  ],
});
