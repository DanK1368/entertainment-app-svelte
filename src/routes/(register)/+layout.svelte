<script>
	import '../../styles/global.css';
	import logo from '../../assets/logo.svg';
</script>

<main class=" my-0 mx-[5%] min-h-[80vh] flex flex-col justify-start items-center ">
	<a href="/" class=" min-h-[20vh] grid place-content-center ">
		<img src={logo} alt="company logo" />
	</a>
	<slot />
</main>
