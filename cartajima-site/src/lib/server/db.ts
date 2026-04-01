import { writeFile, readFile } from 'fs/promises';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Define the data file path
const dataPath = join(process.cwd(), 'analytics.json');

// Initialize file if not exists (sync is fine for init)
if (!existsSync(dataPath)) {
	writeFileSync(dataPath, JSON.stringify([]));
}

// Helper to read data (async)
async function readData(): Promise<any[]> {
	try {
		const content = await readFile(dataPath, 'utf-8');
		return JSON.parse(content);
	} catch (error) {
		console.error('Error reading analytics data:', error);
		return [];
	}
}

// Helper to write data (async)
async function writeData(data: any[]) {
	try {
		await writeFile(dataPath, JSON.stringify(data, null, 2));
	} catch (error) {
		console.error('Error writing analytics data:', error);
	}
}

export async function getVisits() {
	return await readData();
}

export async function addVisit(visit: {
	id: string;
	visitorId: string;
	ref: string;
	client: string;
	device: string;
	timestamp: string;
	page: string;
}) {
	const data = await readData();
	data.push(visit);
	await writeData(data);
	return { changes: 1 };
}

export async function getStats() {
	const visits = await getVisits();
	const uniqueVisitors = new Set(visits.map(v => v.visitorId));
	
	const agencyStats: Record<string, { 
		agency: string; 
		clients: Set<string>; 
		visits: any[]; 
		uniqueVisitors: Set<string> 
	}> = {};
	
	for (const visit of visits) {
		const agency = visit.ref || 'direct';
		const client = visit.client || 'Unknown';
		
		if (!agencyStats[agency]) {
			agencyStats[agency] = {
				agency: agency,
				clients: new Set(),
				visits: [],
				uniqueVisitors: new Set()
			};
		}
		
		agencyStats[agency].visits.push(visit);
		agencyStats[agency].uniqueVisitors.add(visit.visitorId);
		agencyStats[agency].clients.add(client);
	}
	
	const allUniqueClients = new Set();
	visits.forEach(v => allUniqueClients.add(`${v.ref || 'direct'}:${v.client || 'unknown'}`));

	return {
		totalVisits: visits.length,
		uniqueVisitors: uniqueVisitors.size,
		uniqueClients: allUniqueClients.size,
		agencyStats: Object.values(agencyStats).map(g => ({
			agency: g.agency,
			totalVisits: g.visits.length,
			uniqueClients: g.clients.size,
			uniqueVisitors: g.uniqueVisitors.size,
			clientList: Array.from(g.clients)
		})).sort((a, b) => b.totalVisits - a.totalVisits)
	};
}
