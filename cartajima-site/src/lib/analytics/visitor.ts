export function getVisitorId(): string {
	if (typeof window === 'undefined') return '';
	
	let visitorId = localStorage.getItem('cartajima_visitor_id');
	if (!visitorId) {
		visitorId = generateFingerprint() + '_' + Date.now();
		localStorage.setItem('cartajima_visitor_id', visitorId);
	}
	return visitorId;
}

function generateFingerprint(): string {
	const nav = window.navigator;
	const screen = window.screen;
	const data = [
		nav.userAgent,
		nav.language,
		screen.colorDepth,
		screen.width,
		screen.height,
		new Date().getTimezoneOffset()
	].join('|');
	return hashCode(data);
}

function hashCode(str: string): string {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}
	return Math.abs(hash).toString(36);
}

export function getRef(): string {
	if (typeof window === 'undefined') return '';
	
	const params = new URLSearchParams(window.location.search);
	const ref = params.get('ref') || params.get('agency') || '';
	
	if (ref) {
		localStorage.setItem('cartajima_ref', ref);
	}
	
	const storedRef = localStorage.getItem('cartajima_ref');
	if (storedRef) return storedRef;

	// Check for agency login from PasswordGate
	const authStr = localStorage.getItem('cartajima_auth');
	if (authStr) {
		try {
			const authData = JSON.parse(authStr);
			if (authData.agency) return authData.agency;
		} catch {
			// ignore
		}
	}
	
	return 'direct';
}

export function getClient(): string {
	if (typeof window === 'undefined') return '';
	
	const params = new URLSearchParams(window.location.search);
	const client = params.get('client') || '';
	
	if (client) {
		localStorage.setItem('cartajima_client', client);
	}
	
	return client || localStorage.getItem('cartajima_client') || '';
}

export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
	if (typeof window === 'undefined') return 'desktop';
	
	const width = window.innerWidth;
	if (width < 768) return 'mobile';
	if (width < 1024) return 'tablet';
	return 'desktop';
}

export async function trackVisit(force = false) {
	if (typeof window === 'undefined') return;
	
	const ref = getRef();
	const client = getClient();
	const device = getDeviceType();
	
	if (!isNewVisitor() && !force) return;
	
	if (!force) {
		markVisited();
	}
	
	const visit: Visit = {
		id: generateFingerprint() + '_' + Date.now(),
		visitorId: getVisitorId(),
		ref: ref,
		client: client,
		device: device,
		timestamp: new Date().toISOString(),
		page: window.location.pathname
	};
	
	// Save locally (fallback)
	const visits = getStoredVisits();
	visits.push(visit);
	localStorage.setItem('cartajima_visits', JSON.stringify(visits));

	// Save to server (new global analytics)
	try {
		await fetch('/api/track', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(visit)
		});
	} catch (error) {
		console.error('Failed to sync visit to server:', error);
	}
}

export function getStoredVisits(): Visit[] {
	if (typeof window === 'undefined') return [];
	try {
		const data = localStorage.getItem('cartajima_visits');
		return data ? JSON.parse(data) : [];
	} catch {
		return [];
	}
}

export function isNewVisitor(): boolean {
	if (typeof window === 'undefined') return true;
	return !localStorage.getItem('cartajima_visited');
}

export function markVisited() {
	if (typeof window === 'undefined') return;
	localStorage.setItem('cartajima_visited', 'true');
}

export interface Visit {
	id: string;
	visitorId: string;
	ref: string;
	client: string;
	device: 'mobile' | 'tablet' | 'desktop';
	timestamp: string;
	page: string;
}
