<script>
	import Card from '../../../../../components/Card.svelte';
	import CardGrid from '../../../../../components/CardGrid.svelte';
	import SearchBar from '../../../../../components/SearchBar.svelte';

	export let data;
	const { searchResults } = data;
</script>

<SearchBar placeholder="Search for Movies" />
<CardGrid title="Search Results">
	{#each searchResults as movie (movie.id)}
		<Card {movie} />
	{/each}
</CardGrid>
