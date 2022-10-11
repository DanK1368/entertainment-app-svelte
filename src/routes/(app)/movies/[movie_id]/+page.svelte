<script>
	import { TMDB_HD_IMAGE_URL } from '$lib/constants/urls';
	export let data;
	console.log(data);
	const { movieDetail } = data;
</script>

<section class=" text-text h-[90vh]  flex justify-start items-center ">
	<img
		class=" absolute top-[10vh] h-[90vh] left-0 z-[-1] object-cover "
		src={`${TMDB_HD_IMAGE_URL}/${movieDetail.poster_path}`}
		alt=""
	/>
	<div class="bg-secondary/80  p-6 flex flex-col gap-3 rounded-xl ">
		<div class=" flex flex-col gap-3 ">
			<h2 class=" text-xl text-primary ">{movieDetail.title}</h2>
			<p><span class="text-primary">Score:</span> {movieDetail.vote_average.toFixed(1)} / 10</p>
		</div>
		<h3><span class="text-primary">Released:</span> {movieDetail.release_date}</h3>
		<p class=" leading-7 ">{movieDetail.overview}</p>
	</div>
</section>
