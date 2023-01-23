import Link from "next/link";
import React from "react";
import { resultData, resultsDataProps } from "../../../data/results";
import BottomTitleLayout from "../../../layouts/BottomTitleLayout";
import ResultsBg from "../../../public/images/results-bg.svg";

export function getCategories(year: string) {
	return resultData.find((result) => result.year.toString().match(year))?.category;
}

export default function Page({ params }: { params: { yearId: string } }) {
	const { yearId } = params;
	const categories = getCategories(yearId);

	return (
		<div>
			<BottomTitleLayout props={{ title: `${yearId} Results`, bgImage: ResultsBg }}>
				<div className="flex flex-col items-center gap-6">
					{categories!.map((item: any, index: number) => (
						<Link href={`/results/${yearId}/${item.title}`} className="text-sm md:text-2xl hover:underline" key={index}>
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
