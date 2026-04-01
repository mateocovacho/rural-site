import { json } from '@sveltejs/kit';
import { getStats } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const stats = await getStats();
		return json(stats);
	} catch (error) {
		console.error('Error fetching stats:', error);
		return json({ error: error.message }, { status: 500 });
	}
};
