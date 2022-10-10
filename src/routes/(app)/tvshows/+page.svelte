<script>
	import CardGrid from '../../../components/CardGrid.svelte';
	import Card from '../../../components/Card.svelte';
	import SearchBar from '../../../components/SearchBar.svelte';

	export let data;
	const { topRatedTvShows } = data;
</script>

<SearchBar placeholder="Search for TV Series" />
<CardGrid title="TV Series">
	{#each topRatedTvShows as show (show.id)}
		<Card {show} />
	{/each}
</CardGrid>
