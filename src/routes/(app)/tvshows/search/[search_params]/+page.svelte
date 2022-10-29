<script>
	import Card from '../../../../../components/Card.svelte';
	import CardGrid from '../../../../../components/CardGrid.svelte';

	export let data;
	$: ({ searchResults } = data);
</script>

<!-- <SearchBar placeholder="Search for Movies" /> -->
<CardGrid title="Search Results">
	{#each searchResults as show (show.id)}
		<Card {show} />
	{/each}
</CardGrid>
