<script>
	import TrendingMovies from '../../../components/TrendingMovies.svelte';
	import Card from '../../../components/Card.svelte';
	export let data;
	const { trendingMovies, topRatedMovies } = data;

	console.log(topRatedMovies);
</script>

<h2 class="text-text text-2xl font-light ">Trending</h2>
<section class=" flex items-center overflow-scroll gap-4 scrollbar-hide pt-4 pb-6 ">
	{#each trendingMovies as movie (movie.id)}
		<TrendingMovies {movie} />
	{/each}
</section>

<h2 class="text-text text-2xl font-light ">Recommended for you</h2>
<section class=" customGridTemplate gap-4 pt-4 pb-6 ">
	{#each topRatedMovies as movie (movie.id)}
		<Card {movie} />
	{/each}
</section>
