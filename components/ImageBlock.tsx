import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const ImageBlock = ({ src, alt }: Props) => {
  return (
    <div className="my-4 overflow-hidden mx-auto rounded-md max-w-3xl">
      <Image src={src} alt={alt} width={1200} height={200} />
    </div>
  );
};

export default ImageBlock;
