<script>
	import { user } from '$lib/store/sessionStore';
	import { goto } from '$app/navigation';
	import '../../styles/global.css';
	import Navbar from '../../components/Navbar.svelte';
	import SearchBar from '../../components/SearchBar.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($user === null) {
			goto('/login');
		}
	});
</script>

<div class=" flex flex-col justify-between lg:flex-row lg:pl-4 lg:justify-start  ">
	<Navbar />
	<div class=" px-4 lg:overflow-x-hidden lg:pt-5 ">
		<slot />
	</div>
</div>
