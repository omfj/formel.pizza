<script lang="ts">
	import PizzaFall from '$lib/PizzaFall.svelte';
	import { calculatePizzas, pizza } from '$lib/pizza';

	let people = $state();
	let message = $state<string | number>('Fyll inn antall personer');

	$effect(() => {
		if (people && !isNaN(Number(people))) {
			message = calculatePizzas(Number(people));
		} else {
			message = 'Fyll inn antall personer';
		}
	});

	$effect(() => {
		console.log(pizza);
	});
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

<PizzaFall />

<main class="py-24 max-w-[648px] w-full z-10 mx-auto mx-auto space-y-12 px-4">
	<h1 class="text-4xl">Pizza-formelen</h1>

	<section class="space-y-4">
		<h2 class="text-2xl font-medium mb-4">Formelen</h2>

		<p>⌈3 / 8 × antall personer⌉ = antall pizza</p>
	</section>

	<section class="space-y-4">
		<h2 class="text-2xl font-medium mb-4">Prøv selv</h2>

		<input
			type="number"
			class="border border-gray-300 p-2 w-full"
			bind:value={people}
			placeholder="Antall personer"
		/>

		<p class="text-lg">
			{#if !isNaN(Number(message))}
				{#each Array.from({ length: Number(message) }) as _, i}
					<span>🍕</span>
				{/each}
				<span>=</span> <span>{message}</span>
			{:else}
				<span>{message}</span>
			{/if}
		</p>
	</section>
</main>
