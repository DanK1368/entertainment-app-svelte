<script>
	import { TMDB_HD_IMAGE_URL } from '$lib/constants/urls';

	export let itemDetails;

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section class=" text-text h-[90vh]  flex justify-start items-center lg:max-w-xl">
	<img
		class=" absolute top-[10vh] h-[90vh] w-screen left-0 z-[-1] object-cover md:top-0 md:h-[100vh]"
		src={`${TMDB_HD_IMAGE_URL}/${
			// for larger screens we use the backdrop path since the image is more suitable
			innerWidth >= 1024 ? itemDetails?.backdrop_path : itemDetails?.poster_path
		}`}
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
