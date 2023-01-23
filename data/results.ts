export interface resultsDataProps {
	year: number;
	category: {
		title: string;
		rounds: {
			title: string;
			id: number;
		}[];
	}[];
}

export const resultData: resultsDataProps[] = [
	{
		year: 2022,
		category: [
			{
				title: "Open Category",
				rounds: [
					{ title: "Preliminary Round", id: 369819 },
					{ title: "Finale Round", id: 374766 },
				],
			},
			{
				title: "Closed Category",
				rounds: [
					{ title: "Preliminary Round", id: 370936 },
					{ title: "Finale Round", id: 374767 },
				],
			},
		],
	},
];
