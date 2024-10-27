<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>Pizza-formelen</title>
	<meta
		name="description"
		content="Hvor mange pizzaer trenger du til antall personer? Finn ut med pizza-formelen."
	/>
	<meta name="keywords" content="pizza, mat, formel, antall personer, pizza-formelen" />
	<meta name="author" content="echo" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:title" content="Pizza-formelen" />
	<meta
		property="og:description"
		content="Hvor mange pizzaer trenger du til antall personer? Finn ut med pizza-formelen."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/opengraph.png" />
	<meta property="og:url" content="https://formel.pizza" />
</svelte:head>

{@render children()}
