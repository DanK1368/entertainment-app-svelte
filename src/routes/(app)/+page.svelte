<script>
	import TrendingMovies from '../../components/TrendingMovies.svelte';
	import Card from '../../components/Card.svelte';
	import CardGrid from '../../components/CardGrid.svelte';
	export let data;
	const { trendingMovies, topRatedMovies } = data;
</script>

<h2 class="text-text text-2xl font-light ">Trending</h2>
<section class=" flex items-center overflow-scroll gap-4 scrollbar-hide pt-4 pb-6 ">
	{#each trendingMovies as movie (movie.id)}
		<TrendingMovies {movie} />
	{/each}
</section>

<CardGrid title="Recommended for you">
	{#each topRatedMovies as movie (movie.id)}
		<Card {movie} />
	{/each}
</CardGrid>
