<script>
	import Card from '../../../components/Card.svelte';
	export let data;
	const { topRatedMovies } = data;
</script>

<h2 class="text-text text-2xl font-light ">Recommended for you</h2>
<section class=" customGridTemplate gap-4 pt-4 pb-6 ">
	{#each topRatedMovies as movie (movie.id)}
		<Card {movie} />
	{/each}
</section>
