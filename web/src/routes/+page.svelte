<script lang>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'

	onMount(() => {
		goto('/clubs')
	})
</script>
