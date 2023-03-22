import React from "react";
import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.svg";
import { Carousel } from "../../components/Carousel/Carousel";
import { qna } from "../../data/qna";
import { GraphQLClient } from "graphql-request";

async function getQnas() {
	const hygraph: any = new GraphQLClient("https://ap-northeast-1.cdn.hygraph.com/content/clffi6gru1r7f01te7njwb2fz/master");

	const { faqs } = await hygraph.request(
		`
      {
        faqs(first: 50) {
          answer {
            markdown
          }
          id
          question
        }
      }
    `
	);

	return faqs;
}

export default async function Page() {
	const qnas: any = await getQnas();

	console.log(qnas.length);

	return (
		<div className="w-screen h-screen pt-16 bg-black">
			<Image src={FaqBg} alt={"Faq Earth Image"} className="z-10" fill priority style={{ objectFit: "cover" }} />
			<div className="relative z-20 flex flex-col w-screen p-10 overflow-hidden gap-28">
				<div className="relative w-full overflow-x-scroll sm:overflow-hidden rounded-2xl">
					<Carousel qna={qnas} />
				</div>
				{/* <div className="relative w-full overflow-x-scroll sm:overflow-hidden rounded-2xl mr-36 sm:w-auto">
					<Carousel qna={qna} />
				</div> */}
			</div>
		</div>
	);
}
