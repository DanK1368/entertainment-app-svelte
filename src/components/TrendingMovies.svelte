<script>
	import { TMDB_IMAGE_URL } from '$lib/constants/urls';
	import bookmarkIcon from '../assets/icon-bookmark-empty.svg';
	import movieIcon from '../assets/icon-nav-movies.svg';

	export let movie;
</script>

<div
	class="min-w-[240px] h-[140px] rounded-lg flex flex-col justify-between py-3 px-2 bg-cover "
	style={`background-image: url('${TMDB_IMAGE_URL}${movie.backdrop_path}')`}
>
	<div class=" flex justify-end items-center ">
		<div class=" w-[30px] h-[30px] rounded-full bg-accent/60 flex items-center justify-center ">
			<img src={bookmarkIcon} alt="" />
		</div>
	</div>
	<div>
		<div>
			<ul class=" flex items-center gap-2 text-xs text-text ">
				<span>{movie?.release_date.slice(0, 4)}</span>
				<li class=" flex items-center justify-center gap-2 ">
					<img src={movieIcon} alt="" />
					Movie
				</li>
				<li>PG</li>
			</ul>
			<p class=" text-text text-sm ">{movie?.title}</p>
		</div>
	</div>
</div>
