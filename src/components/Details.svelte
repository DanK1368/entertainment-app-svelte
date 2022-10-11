<script>
	import { TMDB_HD_IMAGE_URL } from '$lib/constants/urls';

	export let itemDetails;
</script>

<section class=" text-text h-[90vh]  flex justify-start items-center ">
	<img
		class=" absolute top-[10vh] h-[90vh] w-screen left-0 z-[-1] object-cover"
		src={`${TMDB_HD_IMAGE_URL}/${itemDetails?.poster_path}`}
		alt=""
	/>
	<div class="bg-secondary/80  p-6 flex flex-col gap-3 rounded-xl ">
		<div class=" flex flex-col gap-3 ">
			<h2 class=" text-xl text-primary ">{itemDetails?.title ?? itemDetails?.name}</h2>
			<p>
				<span class="text-primary">Score:</span>
				{itemDetails?.vote_average.toFixed(1)} / 10
			</p>
		</div>
		<h3>
			<span class="text-primary">Released:</span>
			{itemDetails?.release_date ?? itemDetails?.first_air_date}
		</h3>
		<p class=" leading-7 ">{itemDetails?.overview}</p>
	</div>
</section>
