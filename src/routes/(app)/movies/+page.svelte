<script>
	import TrendingMovies from '../../../components/TrendingMovies.svelte';
	export let data;
	const { movies } = data;
</script>

<h2 class="text-text text-2xl font-light ">Trending</h2>
<section class=" flex items-center overflow-scroll gap-4 scrollbar-hide pt-4 ">
	{#each movies as movie (movie.id)}
		<TrendingMovies {movie} />
	{/each}
</section>
