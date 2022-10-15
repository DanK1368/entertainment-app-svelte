<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/clients/supabaseClient';
	import { user } from '$lib/store/sessionStore';
	import Avatar from '../../../components/Avatar.svelte';

	let isDisabled = true;
	let loading = true;
	let username = null;
	let first_name = null;
	let last_name = null;
	let phone_number = null;
	let avatar_url = null;

	function getProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			supabase
				.from('profiles')
				.select(`username, first_name, last_name, phone_number, avatar_url`)
				.eq('id', user?.id)
				.single()
				.then(({ data, error, status }) => {
					if (data) {
						username = data.username;
						first_name = data.first_name;
						last_name = data.last_name;
						phone_number = data.phone_number;
						avatar_url = data.avatar_url;
					}
					if (error && status !== 406) throw error;
				});
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username: username,
				first_name: first_name,
				last_name: last_name,
				phone_number: phone_number,
				avatar_url: avatar_url,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			isDisabled = true;
			loading = false;
		}
	}

	const signOut = async () => {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
			goto('/login');
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	};
</script>

<section class=" w-full min-h-[90vh] grid py-5 md:mt-0  ">
	<div
		class=" rounded-xl bg-primary/100 w-[90%] mx-auto p-5 md:max-w-[740px] md:max-h-[70%] md:place-self-center "
	>
		<div class="border-b-[1px] border-gray-700 flex items-center justify-between">
			<h2 class=" py-2 ">Details</h2>
			<button
				type="button"
				class={`rounded-md py-1 px-2 text-sm bg-accent/50 hover:bg-accent hover:text-text transition-colors duration-150 ease-in ${
					isDisabled ? 'bg-green-500 focus:scale-105' : 'bg-gray-400'
				}`}
				disabled={!isDisabled}
				on:click={() => (isDisabled = false)}>Edit</button
			>
		</div>
		<div class=" flex flex-col gap-10 pt-5 md:flex-row md:items-center md:gap-20 ">
			<form class=" flex flex-col gap-5 " use:getProfile on:submit|preventDefault={updateProfile}>
				<div>
					<h3 class=" text-gray-400 text-xl ">Info</h3>
				</div>

				<div class=" w-full">
					<Avatar bind:path={avatar_url} on:upload={updateProfile} />
				</div>

				<div class=" w-fit grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10 ">
					<div class=" flex flex-col justify-start ">
						<label for="username" class=" text-gray-400 ">Username</label>
						<input
							class={` w-[80%] py-1 pr-2 bg-primary focus:outline-none text-sm ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="username"
							bind:value={username}
							disabled={isDisabled}
						/>
					</div>
					<div class=" flex flex-col justify-start ">
						<label for="first_name" class=" text-gray-400 ">First Name</label>
						<input
							class={` w-[80%] py-1 pr-2 bg-primary focus:outline-none text-sm ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="first_name"
							bind:value={first_name}
							disabled={isDisabled}
						/>
					</div>
					<div class=" flex flex-col justify-start ">
						<label for="last_name" class=" text-gray-400 ">Last Name</label>
						<input
							class={`w-[80%] py-1 pr-2  bg-primary focus:outline-none text-sm ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="last_name"
							bind:value={last_name}
							disabled={isDisabled}
						/>
					</div>
				</div>
				<div class=" flex flex-col justify-start ">
					<label for="email" class=" text-gray-400 ">Email</label>
					<input
						class=" w-[80%] py-1 pr-2 text-gray-200 bg-primary focus:outline-none text-sm "
						type="email"
						id="email"
						disabled
						bind:value={$user.email}
					/>
				</div>
				<div class=" flex flex-col justify-start ">
					<label for="phone_number" class=" text-gray-400 ">Phone</label>
					<input
						class={`w-[50%] py-1 pr-2  bg-primary focus:outline-none ${
							isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
						}`}
						type="text"
						id="phone_number"
						bind:value={phone_number}
						disabled={isDisabled}
					/>
				</div>
				<div class=" flex items-center gap-5 ">
					<label for="date_joined" class=" text-gray-400 ">Joined:</label>
					<input
						class=" w-[80%] py-1 pr-2 text-gray-200 bg-primary focus:outline-none "
						type="text"
						id="date_joined"
					/>
					{#if !isDisabled}
						<button
							type="submit"
							class="bg-red-600 rounded-md py-1 px-2 text-sm text-text bg-text/20 focus:scale-105"
							disabled={isDisabled}>Update</button
						>
					{/if}
				</div>
			</form>
			<button
				class=" bg-accent/50 py-2 rounded-lg hover:bg-accent hover:text-text transition-colors duration-150 ease-in "
				on:click={signOut}>Log Out</button
			>
		</div>
	</div>
</section>
