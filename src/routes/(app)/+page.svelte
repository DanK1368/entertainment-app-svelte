<script>
	import { supabase } from '$lib/clients/supabaseClient';
	import { user } from '$lib/store/sessionStore';
	import TrendingMovies from '../../components/TrendingMovies.svelte';
	import Card from '../../components/Card.svelte';
	import CardGrid from '../../components/CardGrid.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	export let data;
	const { trendingMovies, topRatedMovies } = data;

	user.set(supabase.auth.user());
</script>

<SearchBar placeholder="Search for Movies" />
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
