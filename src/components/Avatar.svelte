<script>
	import { createEventDispatcher } from 'svelte';
	import { supabase } from '$lib/clients/supabaseClient';
	import { profileAvatar } from '$lib/store/profile';

	export let path;

	let uploading = false;
	let src;
	let files;

	const dispatch = createEventDispatcher();

	function downloadImage() {
		supabase.storage
			.from('avatars')
			.download(path)
			.then(({ data, error }) => {
				if (error) throw error;
				src = URL.createObjectURL(data);
				profileAvatar.set(src);
			})
			.catch((error) => console.error('Error downloading image: ', error.message));
	}

	async function uploadAvatar() {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

			if (uploadError) throw uploadError;

			path = filePath;
			dispatch('upload');
		} catch (error) {
			alert(error.message);
		} finally {
			uploading = false;
		}
	}
</script>

<div class=" flex justify-between items-center">
	<div>
		<label
			class="bg-accent/50 hover:bg-accent hover:text-text transition-colors duration-150 ease-in cursor-pointer px-2 py-2 rounded-md "
			for="single"
		>
			{uploading ? 'Uploading ...' : 'Upload'}
		</label>
		<input
			class=" absolute hidden "
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading}
		/>
	</div>

	{#if path}
		<img
			use:downloadImage
			{src}
			alt="Avatar"
			class=" image h-[50px] w-[50px] rounded-full object-cover "
		/>
	{:else}
		<div class="avatar no-image" />
	{/if}
</div>
