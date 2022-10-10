<script>
	import '../../styles/global.css';
	import Navbar from '../../components/Navbar.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
</script>

<Navbar />
<div class=" px-4 ">
	<slot />
</div>
