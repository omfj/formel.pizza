export const calculatePizzas = (people: number): number => {
	return Math.ceil((3 * people) / 8);
};

export const pizza = `
            88
            ""

8b,dPPYba,  88 888888888 888888888 ,adPPYYba,
88P'    "8a 88      a8P"      a8P" ""     \`Y8
88       d8 88   ,d8P'     ,d8P'   ,adPPPPP88
88b,   ,a8" 88 ,d8"      ,d8"      88,    ,88
88\`YbbdP"'  88 888888888 888888888 \`"8bbdP"Y8
88
88
`;
