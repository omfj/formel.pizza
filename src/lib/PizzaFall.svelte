<script lang="ts">
	type Pizza = {
		x: number;
		y: number;
		speed: number;
	};

	let canvas = $state<HTMLCanvasElement>();
	let ctx = $state<CanvasRenderingContext2D | null>(null);
	let pizzas = $state<Array<Pizza>>([]);

	const createPizza = () => {
		if (!canvas) return;

		return {
			x: Math.random() * canvas.width,
			y: -10,
			speed: Math.random() * 5 + 2
		};
	};

	const updatePizza = () => {
		if (!canvas) return;

		pizzas = pizzas.map((pizza) => {
			pizza.y += pizza.speed;
			if (pizza.y > canvas!.height) {
				pizza.y = -10;
				pizza.x = Math.random() * canvas!.width;
			}
			return pizza;
		});
	};

	const drawPizzas = () => {
		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		pizzas.forEach((pizza) => {
			ctx!.fillText('🍕', pizza.x, pizza.y);
			ctx!.font = '16px sans-serif';
		});
	};

	$effect(() => {
		if (!canvas) return;

		ctx = canvas.getContext('2d');

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	$effect(() => {
		if (!canvas) return;

		pizzas = Array.from({ length: 10 }).fill(null).map(createPizza).filter(Boolean) as Array<Pizza>;
	});

	$effect(() => {
		const interval = setInterval(() => {
			updatePizza();
			drawPizzas();
		}, 20);

		return () => clearInterval(interval);
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		pointer-events: none;
	}
</style>
