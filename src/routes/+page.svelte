<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PizzaFall from '$lib/PizzaFall.svelte';
	import { calculatePizzas, pizza } from '$lib/pizza';

	const COUNT_PARAM = 'count';

	let countParam = Number($page.url.searchParams.get(COUNT_PARAM));
	let count = $state<number>(!isNaN(countParam) ? countParam : 0);

	$effect(() => {
		const params = new URLSearchParams($page.url.search);

		/**
		 * Update the count param in the URL when the count changes
		 *
		 * Remove the param if the count is 0
		 */
		if (count) params.set(COUNT_PARAM, count.toString());
		else params.delete(COUNT_PARAM);

		goto(`?${params.toString()}`, { replaceState: true, noScroll: true, keepFocus: true });
	});

	$effect(() => {
		/**
		 * Console log the pizza ascii art
		 */
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

<main class="py-24 max-w-[648px] w-full z-30 mx-auto mx-auto space-y-12 px-4">
	<h1 class="text-5xl font-medium font-serif">Pizza-formelen</h1>

	<section class="space-y-4">
		<h2 class="text-3xl font-medium mb-4 font-serif">Formelen</h2>

		<p class="text-lg">⌈3 / 8 × antall personer⌉ = antall pizza</p>
	</section>

	<section class="space-y-4">
		<h2 class="text-3xl font-medium mb-4 font-serif">Kalkulator</h2>

		<input
			type="number"
			class="border border-gray-300 bg-white px-4 py-2 w-full rounded-lg"
			bind:value={count}
			placeholder="Antall personer"
		/>

		<div class="text-2xl">
			{#if count && count > 0}
				{@const pizzas = calculatePizzas(count)}
				<p>
					{#each Array.from({ length: pizzas }) as _, i}
						<span>🍕</span>
					{/each}
					<span>=</span> <span>{pizzas}</span>
				</p>
			{:else}
				<p class="text-gray-500 text-xl">Fyll inn antall personer</p>
			{/if}
		</div>
	</section>
</main>

<footer>
	<div class="py-4 text-center">
		<p class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
			<a href="https://echo.uib.no" class="underline">echo.uib.no</a>
		</p>
	</div>
</footer>
