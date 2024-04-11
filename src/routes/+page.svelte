<script lang="ts">
	import { calculatePizzas } from '$lib/pizza';

	let people = $state();
	let message = $state<string | number>('Fyll inn antall personer');

	$effect(() => {
		if (people && !isNaN(Number(people))) {
			message = calculatePizzas(Number(people));
		} else {
			message = 'Fyll inn antall personer';
		}
	});
</script>

<main class="py-24 max-w-[648px] w-full mx-auto mx-auto space-y-8 px-4">
	<h1 class="text-4xl">Pizza-formelen 🍕</h1>

	<section class="space-y-4">
		<h2 class="text-2xl font-medium mb-4">Formelen</h2>

		<p>3 / 8 × antall personer = antall pizza</p>
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
