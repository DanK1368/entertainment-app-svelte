<script>
	import Card from '../../../components/Card.svelte';
	import CardGrid from '../../../components/CardGrid.svelte';
	export let data;
	const { topRatedMovies } = data;
</script>

<CardGrid title="Movies">
	{#each topRatedMovies as movie (movie.id)}
		<Card {movie} />
	{/each}
</CardGrid>
