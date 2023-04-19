<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	const clubId = parseInt($page.params.id);

	let data: any = [];

	onMount(async () => {
		const response = await fetch(`/api/members?clubId=${clubId}`);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		data = await response.json();
	});
</script>

<h1>Members</h1>
<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Club Id</th>
		<th scope="col"> Forename </th>
		<th scope="col"> Surname</th>
		<th scope="col"> Email </th>
	</thead>
	<tbody>
		{#each data as { id, clubId, forename, surname, emailAddress }}
			<tr>
				<td>{id}</td>
				<td>{clubId}</td>
				<td>{forename}</td>
				<td>{surname}</td>
				<td>{emailAddress}</td>
			</tr>
		{/each}
	</tbody>
</table>
