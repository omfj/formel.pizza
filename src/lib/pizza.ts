export const calculatePizzas = (people: number): number => {
	return Math.ceil((3 * people) / 8);
};
