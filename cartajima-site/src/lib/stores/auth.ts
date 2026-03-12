import { writable } from 'svelte/store';

const PASSWORDS = new Set([
	'sothebys2024',
	'knightfrank2024',
	'villasfincas2024',
	'cartajima2024'
]);

const STORAGE_KEY = 'cartajima_auth';

function createAuthStore() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		init() {
			if (typeof localStorage !== 'undefined') {
				const stored = localStorage.getItem(STORAGE_KEY);
				if (stored === 'true') set(true);
			}
		},
		authenticate(password: string): boolean {
			const trimmed = password.trim().toLowerCase();
			if (PASSWORDS.has(trimmed)) {
				set(true);
				if (typeof localStorage !== 'undefined') {
					localStorage.setItem(STORAGE_KEY, 'true');
				}
				return true;
			}
			return false;
		},
		logout() {
			set(false);
			if (typeof localStorage !== 'undefined') {
				localStorage.removeItem(STORAGE_KEY);
			}
		}
	};
}

export const auth = createAuthStore();
