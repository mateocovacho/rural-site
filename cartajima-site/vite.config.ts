import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        allowedHosts: [
            "cartajima-opencode.test",
            "cartajima-claude.test",
            "graduation-peas-belly-relates.trycloudflare.com",
        ],
    },
});
