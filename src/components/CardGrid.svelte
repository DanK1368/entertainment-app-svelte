<script>
	export let title;
</script>

<h2 class="text-text text-2xl font-light ">{title}</h2>
<section class=" customGridTemplate gap-4 pt-4 pb-6 md:gap-7 lg:max-w-[90vw]">
	<slot />
</section>
