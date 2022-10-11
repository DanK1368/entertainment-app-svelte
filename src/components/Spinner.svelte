<span class="loader" />

<style>
	.loader {
		width: 100px;
		height: 100px;
		display: inline-block;
		position: relative;
	}
	.loader::after,
	.loader::before {
		content: '';
		box-sizing: border-box;
		width: 100px;
		height: 100px;
		border: 2px solid #fff;
		position: absolute;
		left: 0;
		top: 0;
		animation: scaleOut 2s ease-in-out infinite;
	}
	.loader::after {
		border-color: rgb(252, 71, 71);
		animation-delay: 1s;
	}

	@keyframes scaleOut {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
