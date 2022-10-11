<script>
	import Details from '../../../../components/Details.svelte';

	export let data;
	const { itemDetails } = data;
	console.log(data);
</script>

<Details {itemDetails} />
