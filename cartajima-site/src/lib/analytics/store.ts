import { writable } from 'svelte/store';

export interface GlobalStats {
	totalVisits: number;
	uniqueVisitors: number;
	uniqueClients: number;
	agencyStats: {
		agency: string;
		totalVisits: number;
		uniqueClients: number;
		uniqueVisitors: number;
		clientList: string[];
	}[];
}

export const totalStats = writable({
	totalVisits: 0,
	uniqueVisitors: 0,
	uniqueClients: 0
});

export const visitsByAgency = writable<GlobalStats['agencyStats']>([]);

export async function loadVisits() {
	try {
		const res = await fetch('/api/stats');
		if (res.ok) {
			const stats: GlobalStats = await res.json();
			totalStats.set({
				totalVisits: stats.totalVisits,
				uniqueVisitors: stats.uniqueVisitors,
				uniqueClients: stats.uniqueClients
			});
			visitsByAgency.set(stats.agencyStats);
		}
	} catch (error) {
		console.error('Failed to load global stats:', error);
	}
}
