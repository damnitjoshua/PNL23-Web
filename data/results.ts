interface yearProps {
	year: number;
}

interface categoryProps {
	title: string;
}

interface roundProps {
	title: string;
}

export const years: yearProps[] = [
	{
		year: 2022,
	},
];

export const categories: categoryProps[] = [
	{
		title: "Open Category",
	},
	{
		title: "Closed Category",
	},
];
