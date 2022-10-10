<script>
	import Card from '../../../components/Card.svelte';
	import CardGrid from '../../../components/CardGrid.svelte';
	import SearchBar from '../../../components/SearchBar.svelte';
	export let data;
	const { topRatedMovies } = data;
</script>

<SearchBar placeholder="Search for Movies" />
<CardGrid title="Movies">
	{#each topRatedMovies as movie (movie.id)}
		<Card {movie} />
	{/each}
</CardGrid>
