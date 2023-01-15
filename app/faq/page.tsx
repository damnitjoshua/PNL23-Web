import React from "react";
import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.svg";
import { Carousel } from "../../components/Carousel/Carousel";
import { qna } from "../../data/qna";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-black">
      <Image
        src={FaqBg}
        alt={"Faq Earth Image"}
        className="z-10"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="relative z-20 overflow-hidden w-screen p-10 flex flex-col gap-36">
        <div className="w-auto relative ml-36 overflow-hidden rounded-2xl h-60">
          <Carousel qna={qna} />
        </div>
        <div className=" w-auto relative overflow-hidden rounded-2xl mr-36">
          <Carousel qna={qna} />
        </div>
      </div>
    </div>
  );
}
