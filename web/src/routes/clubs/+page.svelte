<script lang="ts">
	import { onMount } from "svelte";

	let data: any = [];

	onMount(async () => {
		const response = await fetch("api/clubs");

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		data = await response.json();
	});
</script>

<h1>Clubs</h1>
<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
		<th scope="col">Address Line 1</th>
		<th scope="col">Postal Town</th>
		<th scope="col">Post Code</th>
	</thead>
	<tbody>
		{#each data as { id, name, addressLine1, postalTown, postcode }}
			<tr>
				<th scope="row">
					<a href="/clubs/{id}/members">{id}</a>
				</th>
				<td>{name}</td>
				<td> {addressLine1} </td>
				<td> {postalTown} </td>
				<td> {postcode} </td>
			</tr>
		{/each}
	</tbody>
</table>
