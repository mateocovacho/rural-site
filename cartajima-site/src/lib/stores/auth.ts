import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Agency passwords mapping
const AGENCY_PASSWORDS: Record<string, string> = {
	'sothebys2024': 'Sotheby\'s International Realty',
	'knightfrank2024': 'Knight Frank',
	'villasfincas2024': 'Villas & Fincas',
	'cartajima2024': 'Direct Access'
};

// Check if user is authenticated
function getStoredAuth() {
	if (!browser) return { isAuthenticated: false, agency: null };
	const stored = localStorage.getItem('cartajima_auth');
	if (stored) {
		try {
			return JSON.parse(stored);
		} catch {
			return { isAuthenticated: false, agency: null };
		}
	}
	return { isAuthenticated: false, agency: null };
}

export const auth = writable(getStoredAuth());

export function login(password: string): boolean {
	const agency = AGENCY_PASSWORDS[password];
	if (agency) {
		const authData = { isAuthenticated: true, agency };
		auth.set(authData);
		if (browser) {
			localStorage.setItem('cartajima_auth', JSON.stringify(authData));
			// Log which agency accessed (for analytics)
			console.log(`Access granted: ${agency}`);
		}
		return true;
	}
	return false;
}

export function logout() {
	auth.set({ isAuthenticated: false, agency: null });
	if (browser) {
		localStorage.removeItem('cartajima_auth');
	}
}

export { AGENCY_PASSWORDS };