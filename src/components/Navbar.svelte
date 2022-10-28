<script>
	import { page } from '$app/stores';
	import logo from '../assets/logo.svg';
	import avatar from '../assets/image-avatar.png';
	import HomeSvg from '../components/svgs/HomeSvg.svelte';
	import BookmarkSvg from '../components/svgs/BookmarkSvg.svelte';
	import MoviesSvg from '../components/svgs/MoviesSvg.svelte';
	import TvSeriesSvg from '../components/svgs/TvSeriesSvg.svelte';
</script>

<header
	class=" min-h-[10vh] bg-baseColor flex justify-between items-center px-4 md:min-w-[719px] md:m-auto md:rounded-xl md:min-h-[8vh] md:mt-10 lg:flex-col   lg:min-w-[96px] lg:min-h-[90vh] lg:py-6 lg:mx-0 "
>
	<a href="/" aria-label="click to go to home-page">
		<img src={logo} alt="" />
	</a>

	<nav class=" flex justify-center items-center gap-6 lg:flex-col ">
		<a href="/">
			<HomeSvg active={$page.url.pathname === '/'} />
		</a>

		<a href="/movies">
			<MoviesSvg active={$page.url.pathname === '/movies'} />
		</a>

		<a href="/tvshows">
			<TvSeriesSvg active={$page.url.pathname === '/tvshows'} />
		</a>

		<a href="/bookmarked">
			<BookmarkSvg active={$page.url.pathname === '/bookmarked'} />
		</a>
	</nav>

	<a href="/profile" class=" w-[40px] h-[40px] border-2 border-[white] rounded-full ">
		<img class=" object-cover " src={avatar} alt="user avatar" />
	</a>
</header>
