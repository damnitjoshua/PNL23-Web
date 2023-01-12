import React, { useState } from "react";

interface CarouselCardProps {
  question: string;
  answer: string;
  [x: string]: any;
}

export function CarouselCard({
  question,
  answer,
  ...props
}: CarouselCardProps) {
  const [text, setText] = useState<string>(question);
  return (
    <div
      onMouseEnter={() => {
        setText(answer);
      }}
      onMouseLeave={() => {
        setText(question);
      }}
      className={`flex justify-center bg-opacity-25 hover:bg-opacity-40 bg-white w-72 h-48 rounded-2xl pt-4 transition-all`}
    >
      <p className="text-white">{text}</p>
    </div>
  );
}
