import Link from "next/link";
import React from "react";
import { resultData, resultsDataProps } from "../../../../data/results";
import BottomTitleLayout from "../../../../layouts/BottomTitleLayout";
import ResultsBg from "../../../../public/images/results-bg.svg";

export function getRounds(year: string, category: string) {
	const categories = resultData.find((result) => result.year.toString().match(year))?.category;

	return !categories ? [] : categories.find((result) => result.title.match(category))?.rounds;
}

export default function Page({ params }: { params: { categoryId: string; yearId: string } }) {
	const { categoryId, yearId } = params;
	const rounds = getRounds(yearId, categoryId.replace("%20", " "));

	return (
		<div>
			<BottomTitleLayout props={{ title: `${yearId} Results - ${categoryId.replace("%20", " ")}`, bgImage: ResultsBg }}>
				<div className="flex flex-col items-center gap-6">
					{rounds!.map((item: any, index: number) => (
						<Link
							href={`/results/${yearId}/${categoryId}/${item.id}`}
							className="text-sm md:text-2xl hover:underline"
							key={index}>
							{">> "}
							{item.title}
							{" <<"}
						</Link>
					))}
				</div>
			</BottomTitleLayout>
		</div>
	);
}
