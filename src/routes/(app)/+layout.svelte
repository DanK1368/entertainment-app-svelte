<script>
	import Navbar from '../../components/Navbar.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
</script>

<Navbar />
<SearchBar />
<div class=" pt-6 px-4 ">
	<slot />
</div>
