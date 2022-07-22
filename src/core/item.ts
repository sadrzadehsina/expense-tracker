interface Item {
	label: string;
	total: number;
}

const makeItem = ({ label, total }: Item): Item => ({
	label,
	total,
});

export { makeItem };

export type { Item };
