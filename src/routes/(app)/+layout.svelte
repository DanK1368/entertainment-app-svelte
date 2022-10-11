<script>
	import { user } from '$lib/store/sessionStore';
	import { goto } from '$app/navigation';
	import '../../styles/global.css';
	import Navbar from '../../components/Navbar.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!$user) {
			goto('/login');
		}
	});
</script>

<Navbar />
<div class=" px-4 ">
	<slot />
</div>
