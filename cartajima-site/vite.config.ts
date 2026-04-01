import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit()
	],
	build: {
		target: "es2015", // Targeting older browsers
	},
	server: {
		allowedHosts: [
			"cartajima-opencode.test",
			"cartajima-claude.test",
			"graduation-peas-belly-relates.trycloudflare.com",
		],
	},
});
