<script>
	import Card from '../../../../../components/Card.svelte';
	import CardGrid from '../../../../../components/CardGrid.svelte';
	import SearchBar from '../../../../../components/SearchBar.svelte';

	export let data;
	$: ({ searchResults } = data);
</script>

<SearchBar placeholder="Search for TV Shows" />
<CardGrid title="Search Results">
	{#each searchResults as show (show.id)}
		<Card {show} />
	{/each}
</CardGrid>
