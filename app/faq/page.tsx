import React from "react";
import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.svg";
import { Carousel } from "../../components/Carousel/Carousel";
import { qna } from "../../data/qna";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-black pt-16">
      <Image
        src={FaqBg}
        alt={"Faq Earth Image"}
        className="z-10"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-20 overflow-hidden w-screen p-10 flex flex-col gap-28">
        <div className="w-full sm:w-auto relative sm:ml-36 overflow-x-scroll sm:overflow-hidden rounded-2xl">
          <Carousel qna={qna} />
        </div>
        <div className="w-full relative overflow-x-scroll sm:overflow-hidden rounded-2xl mr-36 sm:w-auto">
          <Carousel qna={qna} />
        </div>
      </div>
    </div>
  );
}
