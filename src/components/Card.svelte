<script>
	import { TMDB_IMAGE_URL } from '$lib/constants/urls';
	import bookmarkIcon from '../assets/icon-bookmark-empty.svg';
	import movieIcon from '../assets/icon-nav-movies.svg';
	import playIcon from '../assets/icon-play.svg';

	export let movie = undefined;
	export let show;
</script>

<div class=" flex flex-col gap-2 ">
	<a
		href={`/${movie ? 'movies' : 'tvshows'}/${movie ? movie.id : show.id}`}
		class="min-w-[164px] h-[110px] rounded-lg flex flex-col justify-between py-3 px-2 bg-cover relative thumbnail "
		style={` background-image: url('${TMDB_IMAGE_URL}${
			movie?.backdrop_path ?? show?.backdrop_path
		}')`}
	>
		<div
			class=" bg-text/30 w-[65%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded-full hidden justify-between items-center  "
		>
			<img src={playIcon} alt="" />
			<span class=" text-text font-bold">Info</span>
		</div>
		<div class=" flex justify-end items-center ">
			<div class=" w-[30px] h-[30px] rounded-full bg-accent/60 flex items-center justify-center ">
				<img src={bookmarkIcon} alt="" />
			</div>
		</div>
	</a>
	<div>
		<ul class=" flex items-center gap-2 text-xs text-text ">
			<span>{movie?.release_date.slice(0, 4) ?? show?.first_air_date.slice(0, 4)}</span>
			<li class=" flex items-center justify-center gap-2 ">
				<img src={movieIcon} alt="" />
				Movie
			</li>
			<li>PG</li>
		</ul>
		<h3 class=" text-text text-lg ">{movie?.title ?? show?.name}</h3>
	</div>
</div>

<style>
	.thumbnail:hover > div:nth-child(1) {
		display: flex;
	}
</style>
