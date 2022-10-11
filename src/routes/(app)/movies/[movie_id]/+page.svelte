<script>
	import Details from '../../../../components/Details.svelte';
	export let data;
	const { itemDetails } = data;
</script>

<Details {itemDetails} />
