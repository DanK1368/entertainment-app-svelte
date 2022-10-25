<script>
	import logo from '../assets/logo.svg';
	import home from '../assets/icon-nav-home.svg';
	import movies from '../assets/icon-nav-movies.svg';
	import tvShows from '../assets/icon-nav-tv-series.svg';
	import bookmark from '../assets/icon-nav-bookmark.svg';
	import avatar from '../assets/image-avatar.png';
</script>

<header
	class=" min-h-[10vh] bg-baseColor flex justify-between items-center px-4 md:min-w-[719px] md:m-auto md:rounded-xl md:min-h-[8vh] md:mt-10 lg:flex-col   lg:min-w-[96px] lg:min-h-[90vh] lg:py-6 lg:mx-0 "
>
	<img src={logo} alt="" />

	<nav class=" flex justify-center items-center gap-6 lg:flex-col ">
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

	<a href="/profile" class=" w-[40px] h-[40px] border-2 border-[white] rounded-full ">
		<img class=" object-cover " src={avatar} alt="user avatar" />
	</a>
</header>
