<script lang="ts">
	import { onMount } from 'svelte';
	import { visitsByAgency, totalStats, loadVisits } from '$lib/analytics/store';
	import { AGENCY_PASSWORDS } from '$lib/stores/auth';
	
	let password = $state('');
	let isAuthenticated = $state(false);
	let error = $state('');
	let selectedAgency = $state<string | null>(null);
	
	const ADMIN_PASSWORD = 'cartajima2024';

	onMount(() => {
		const stored = localStorage.getItem('cartajima_admin_auth');
		if (stored === 'true') {
			isAuthenticated = true;
			loadVisits();
			// Auto-refresh stats every 30 seconds
			const interval = setInterval(loadVisits, 30000);
			return () => clearInterval(interval);
		}
	});
	
	// Map agency names back to their passwords for display
	const AGENCY_TO_PWD = Object.entries(AGENCY_PASSWORDS).reduce((acc, [pwd, name]) => {
		acc[name] = pwd;
		return acc;
	}, {} as Record<string, string>);
	
	function login() {
		if (password === ADMIN_PASSWORD) {
			isAuthenticated = true;
			localStorage.setItem('cartajima_admin_auth', 'true');
			error = '';
			loadVisits();
		} else {
			error = 'Invalid password';
		}
	}

	function logout() {
		isAuthenticated = false;
		localStorage.removeItem('cartajima_admin_auth');
	}
	
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			login();
		}
	}

	function generateAndCopy() {
		const agencyInput = (document.getElementById('gen-agency') as HTMLSelectElement)?.value;
		const clientInput = (document.getElementById('gen-client') as HTMLInputElement)?.value;
		const base = window.location.origin;
		
		// Use the agency name or the ref as provided
		const url = `${base}/?ref=${encodeURIComponent(agencyInput)}&client=${encodeURIComponent(clientInput)}`;
		navigator.clipboard.writeText(url);
		alert('URL copied to clipboard!');
	}
</script>

<svelte:head>
	<title>Admin Dashboard | Cartajima</title>
</svelte:head>

<section class="admin-page">
	<div class="container-fluid">
		{#if !isAuthenticated}
			<div class="login-box">
				<h1>Agency Analytics</h1>
				<div class="input-group">
					<input 
						type="password" 
						bind:value={password}
						onkeydown={handleKeydown}
						placeholder="Admin password..."
						class="password-input"
					/>
					<button onclick={login} class="btn-primary">Login</button>
				</div>
				{#if error}
					<p class="error">{error}</p>
				{/if}
			</div>
		{:else}
			<div class="dashboard">
				<div class="header">
					<h1>Agency Tracking Dashboard</h1>
					<button onclick={logout} class="btn-secondary">Logout</button>
				</div>
				
				<div class="summary-bar">
					<div class="stat"><strong>Total Visits:</strong> {$totalStats.totalVisits}</div>
					<div class="stat"><strong>Unique Visitors:</strong> {$totalStats.uniqueVisitors}</div>
					<div class="stat"><strong>Unique Clients:</strong> {$totalStats.uniqueClients}</div>
				</div>

				<div class="content-section">
					<h2>Agency Passwords & Statistics</h2>
					<table class="data-table">
						<thead>
							<tr>
								<th>Password</th>
								<th>Agency Name</th>
								<th>Visits</th>
								<th>Visitors</th>
								<th>Clients</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{#each $visitsByAgency as agency}
								<tr>
									<td><code>{AGENCY_TO_PWD[agency.agency] || 'N/A'}</code></td>
									<td>{agency.agency}</td>
									<td>{agency.totalVisits}</td>
									<td>{agency.uniqueVisitors}</td>
									<td>{agency.uniqueClients}</td>
									<td>
										<button 
											class="btn-small" 
											onclick={() => selectedAgency = selectedAgency === agency.agency ? null : agency.agency}
										>
											{selectedAgency === agency.agency ? 'Hide Clients' : 'Show Clients'}
										</button>
									</td>
								</tr>
								{#if selectedAgency === agency.agency}
									<tr class="details-row">
										<td colspan="6">
											<div class="client-details">
												<strong>Tracked Clients:</strong>
												<div class="client-tags">
													{#each agency.clientList as client}
														<span class="tag">{client}</span>
													{/each}
												</div>
											</div>
										</td>
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>

				<div class="content-section">
					<h2>Generate Referral URL</h2>
					<div class="generator-box">
						<select id="gen-agency">
							<option value="direct">Direct</option>
							{#each Object.entries(AGENCY_PASSWORDS) as [pwd, name]}
								<option value={name}>{name} (using password: {pwd})</option>
							{/each}
						</select>
						<input type="text" placeholder="Client name (e.g., John Doe)" id="gen-client" />
						<button onclick={generateAndCopy} class="btn-primary">Generate & Copy</button>
					</div>
					<p class="hint">Referral URLs allow you to track visits without requiring the visitor to enter a password.</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	:root {
		--admin-bg: #f8f9fa;
		--admin-border: #dee2e6;
		--admin-text: #212529;
		--admin-accent: #0d6efd;
	}

	.admin-page {
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		background: var(--admin-bg);
		min-height: 100vh;
		color: var(--admin-text);
	}

	.container-fluid {
		max-width: 1200px;
		margin: 0 auto;
	}

	.login-box {
		max-width: 350px;
		margin: 100px auto;
		padding: 2rem;
		background: white;
		border: 1px solid var(--admin-border);
		border-radius: 4px;
	}

	.input-group {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.password-input {
		flex: 1;
		padding: 0.5rem;
		border: 1px solid var(--admin-border);
		border-radius: 4px;
	}

	.btn-primary {
		background: var(--admin-accent);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
	}

	.btn-secondary {
		background: #6c757d;
		color: white;
		border: none;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		cursor: pointer;
	}

	.btn-small {
		padding: 0.2rem 0.5rem;
		font-size: 0.8rem;
		background: #e9ecef;
		border: 1px solid var(--admin-border);
		border-radius: 3px;
		cursor: pointer;
	}

	.dashboard h1 {
		margin: 0;
		font-size: 1.5rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--admin-border);
	}

	.summary-bar {
		display: flex;
		gap: 2rem;
		background: white;
		padding: 1rem;
		border: 1px solid var(--admin-border);
		border-radius: 4px;
		margin-bottom: 2rem;
	}

	.content-section {
		background: white;
		padding: 1.5rem;
		border: 1px solid var(--admin-border);
		border-radius: 4px;
		margin-bottom: 2rem;
	}

	.content-section h2 {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 1.2rem;
		border-bottom: 1px solid var(--admin-border);
		padding-bottom: 0.5rem;
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1rem;
	}

	.data-table th, .data-table td {
		text-align: left;
		padding: 0.75rem;
		border-bottom: 1px solid var(--admin-border);
	}

	.data-table th {
		background: #f1f3f5;
		font-weight: 600;
	}

	.details-row {
		background: #f8f9fa;
	}

	.client-details {
		padding: 0.5rem 1rem;
	}

	.client-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		background: #e9ecef;
		padding: 0.1rem 0.5rem;
		border-radius: 10px;
		font-size: 0.85rem;
		border: 1px solid var(--admin-border);
	}

	.generator-box {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.generator-box select, .generator-box input {
		padding: 0.5rem;
		border: 1px solid var(--admin-border);
		border-radius: 4px;
	}

	.generator-box input {
		flex: 1;
	}

	.hint {
		font-size: 0.85rem;
		color: #6c757d;
		margin-top: 0.5rem;
	}

	code {
		font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		background: #f1f3f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		color: #d63384;
	}

	.error {
		color: #dc3545;
		margin-top: 0.5rem;
	}
</style>
