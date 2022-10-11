<script>
	import Spinner from './Spinner.svelte';
	import { supabase } from '$lib/clients/supabaseClient.js';
	import { goto } from '$app/navigation';

	let isLoading = false;
	let email = '';
	let password = '';
	let password_repeat = '';
	let showErrorMessage = false;
	let errorMessage = '';

	$: message = errorMessage;

	const handleSignIn = async () => {
		if (!email || !password || !password_repeat) {
			showErrorMessage = true;
			errorMessage = 'Please fill up all fields';
			return;
		}

		if (password !== password_repeat) {
			showErrorMessage = true;
			errorMessage = 'Passwords do not match';
			return;
		}

		try {
			isLoading = true;
			const { user, error } = await supabase.auth.signUp({
				email: email,
				password: password
			});
			if (error) throw error;
			showErrorMessage = false;
			if (user) goto('/login');
		} catch (error) {
			isLoading = false;
			showErrorMessage = true;
			errorMessage = error.message;
			return;
		}
	};
</script>

{#if isLoading}
	<div class=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
		<Spinner />
	</div>
{:else}
	<form class="customRegistrationForm" on:submit|preventDefault={handleSignIn}>
		<div>
			<h1 class=" text-text font-light text-4xl ">Sign Up</h1>
		</div>
		<div class=" flex flex-col justify-center w-full gap-4 ">
			<label>
				<input
					class=" customRegistrationInput "
					type="email"
					placeholder="Email address"
					bind:value={email}
				/>
			</label>
			<label>
				<input
					class=" customRegistrationInput "
					type="password"
					placeholder="Password"
					bind:value={password}
				/>
			</label>
			<label>
				<input
					class=" customRegistrationInput "
					type="password"
					placeholder="Repeat Password"
					bind:value={password_repeat}
				/>
			</label>
			{#if showErrorMessage}
				<p class="text-primary">{message}</p>
			{/if}
		</div>
		<button
			class=" p-4 mt-2 bg-primary border-none text-text font-light text-lg cursor-pointer rounded-md hover:bg-text hover:text-baseColor transition-colors duration-200 ease-in "
			>Create an account</button
		>
		<p class=" text-text font-light text-center text-sm ">
			Already have an account?
			<a class=" text-primary ml-[0.3rem] " href="/login">Login</a>
		</p>
	</form>
{/if}
