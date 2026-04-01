import { json } from '@sveltejs/kit';
import { addVisit } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const visit = await request.json();
		addVisit(visit);
		return json({ success: true });
	} catch (error) {
		console.error('Error tracking visit:', error);
		return json({ success: false, error: error.message }, { status: 500 });
	}
};
