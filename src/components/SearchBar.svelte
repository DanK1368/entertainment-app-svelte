<script>
	import searchIcon from '../assets/icon-search.svg';

	export let placeholder;
</script>

<form class=" ml-5% mt-6 pb-6 ">
	<label class=" relative ">
		<input
			class=" w-full py-2 pl-10 pr-2 bg-[transparent] border-none text-text text-lg font-light caret-primary placeholder:font-light focus:outline-none "
			type="text"
			{placeholder}
		/>
		<div class=" absolute top-[50%] left-0 translate-y-[-50%] ">
			<img src={searchIcon} alt="" loading="lazy" />
		</div>
	</label>
</form>
