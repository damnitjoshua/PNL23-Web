import React from "react";
import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.svg";
import { Carousel } from "../../components/Carousel/Carousel";
import { qna } from "../../data/qna";

export default function Page() {
  return (
		<div className="w-screen h-screen pt-16 bg-black">
			<Image src={FaqBg} alt={"Faq Earth Image"} className="z-10" fill priority style={{ objectFit: "cover" }} />
			<div className="relative z-20 flex flex-col w-screen p-10 overflow-hidden gap-28">
				<div className="relative w-full overflow-x-scroll sm:w-auto sm:ml-36 sm:overflow-hidden rounded-2xl">
					<Carousel qna={qna} />
				</div>
				<div className="relative w-full overflow-x-scroll sm:overflow-hidden rounded-2xl mr-36 sm:w-auto">
					<Carousel qna={qna} />
				</div>
			</div>
		</div>
	);
}
