import React from "react";
import Image from "next/image";
import FaqBg from "../../public/images/faq-bg.svg";
import { CarouselCard } from "../../components/CarouselCard";

export default function Page() {
  return (
    <div className="h-screen bg-black">
      <Image
        src={FaqBg}
        alt={"Faq Earth Image"}
        className="z-10"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="container relative z-20">
        <CarouselCard />
      </div>
    </div>
  );
}
