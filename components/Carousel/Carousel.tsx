"use client";

import React, { useEffect, useState } from "react";
import { CarouselCard } from "../CarouselCard";

type CarouselItems = { question: string; answer: string }[];

interface CarouselProps {
  qna: CarouselItems;
  [x: string]: any;
}

export function Carousel({ qna, ...props }: CarouselProps) {
  const [transition, setTransition] = useState<string>("transition-all");
  const [transitionAmount, setTransitionAmount] = useState<number>(-19.25);
  const [carouselItems, setCarouselItems] = useState<CarouselItems>(qna);
  const [isTicking, setIsTicking] = useState<boolean>(false);

  const shiftPrev = (copy: CarouselItems) => {
    let lastcard = copy.pop();
    if (lastcard) {
      copy.splice(0, 0, lastcard);
    }
    setCarouselItems(copy);
  };

  const shiftNext = (copy: CarouselItems) => {
    let firstcard = copy.shift();
    if (firstcard) {
      copy.splice(copy.length, 0, firstcard);
    }
    setCarouselItems(copy);
  };

  useEffect(() => {
    if (isTicking) {
      new Promise((resolve) => setTimeout(resolve, 200)).then(() => {
        setTransition("");
        if (transitionAmount < 0) {
          shiftNext([...carouselItems]);
        } else {
          shiftPrev([...carouselItems]);
        }
        setTransitionAmount(-19.25);
        setIsTicking(false);
      });
    }
  }, [isTicking, transitionAmount, carouselItems]);

  return (
    <div className="relative h-full">
      <div className="absolute left-0 z-30 hidden w-full sm:block">
        <button
          onClick={() => {
            if (!isTicking) {
              setTransition("transition-all");
              setTransitionAmount((prev) => prev + 19.25);
              setIsTicking(true);
            }
          }}
          className="absolute flex items-center justify-center w-12 h-48 font-mono text-3xl font-bold text-center text-gray-600 transition-opacity bg-white opacity-10 hover:opacity-25"
        >
          &lt;
        </button>
        <button
          onClick={() => {
            if (!isTicking) {
              setTransition("transition-all");
              setTransitionAmount((prev) => prev - 19.25);
              setIsTicking(true);
            }
          }}
          className="absolute right-0 flex items-center justify-center w-12 h-48 font-mono text-3xl font-bold text-center text-gray-600 transition-opacity bg-white opacity-10 hover:opacity-25"
        >
          &gt;
        </button>
      </div>
      <div
        onTransitionEnd={() => {}}
        className={`flex flex-row w-fit overflow-hidden gap-5 rounded-2xl relative ${transition}`}
        style={{
          transform: `translate(${transitionAmount}rem, 0rem)`,
        }}
      >
        {carouselItems.map((item: any) => {
          return <CarouselCard key={item.id} question={item.question} answer={item.answer.markdown} />;
        })}
      </div>
    </div>
  );
}
