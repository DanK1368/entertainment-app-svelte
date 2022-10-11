<script>
	import { supabase } from '$lib/clients/supabaseClient';
	import { goto } from '$app/navigation';
	import logo from '../assets/logo.svg';
	import home from '../assets/icon-nav-home.svg';
	import movies from '../assets/icon-nav-movies.svg';
	import tvShows from '../assets/icon-nav-tv-series.svg';
	import bookmark from '../assets/icon-nav-bookmark.svg';
	import avatar from '../assets/image-avatar.png';

	let loading = false;

	const signOut = async () => {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
			goto('/login');
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	};
</script>

<header class=" min-h-[10vh] bg-baseColor flex justify-between items-center px-4 ">
	<img src={logo} alt="" />

	<nav class=" flex justify-center items-center gap-6 flex-1 ">
		<a href="/">
			<img src={home} alt="" aria-label="click to go to home-page" />
		</a>

		<a href="/movies">
			<img src={movies} alt="" aria-label="click to go to movies-page" />
		</a>

		<a href="/tvshows">
			<img src={tvShows} alt="" aria-label="click to go to tvshows-page" />
		</a>

		<a href="/bookmarked">
			<img src={bookmark} alt="" aria-label="click to go to bookmarks-page" />
		</a>
	</nav>

	<button class=" w-[40px] h-[40px] border-2 border-[white] rounded-full " on:click={signOut}>
		<img class=" object-cover " src={avatar} alt="user avatar" />
	</button>
</header>
