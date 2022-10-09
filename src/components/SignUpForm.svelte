<form class="customRegistrationForm">
	<div>
		<h1 class=" text-text font-light text-4xl ">Sign Up</h1>
	</div>
	<div class=" flex flex-col justify-center w-full gap-4 ">
		<label>
			<input class=" customRegistrationInput " type="email" placeholder="Email address" />
		</label>
		<label>
			<input class=" customRegistrationInput " type="password" placeholder="Password" />
		</label>
		<label>
			<input class=" customRegistrationInput " type="password" placeholder="Repeat Password" />
		</label>
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
