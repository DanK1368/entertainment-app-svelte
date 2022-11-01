<script>
	import Card from '../../../../../components/Card.svelte';
	import CardGrid from '../../../../../components/CardGrid.svelte';
	import SearchBar from '../../../../../components/SearchBar.svelte';

	export let data;
	$: ({ searchResults } = data);
</script>

<SearchBar placeholder="Search for Movies" />
<div class=" mt-10 ">
	<CardGrid title="Search Results">
		{#each searchResults as movie (movie.id)}
			<Card {movie} />
		{/each}
	</CardGrid>
</div>
