"use client";

import ErrorAnimation from "@/public/lotties/ErrorAnimation.json";
import Lottie from "lottie-react";
import CardWrapper from "./CardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-fit flex rounded-md overflow-hidden items-center justify-center">
        <Lottie
          animationData={ErrorAnimation}
          download={false}
          allowTransparency={true}
          loop={true}
          autoplay={true}
          height={1000}
          width={1000}
        />{" "}
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
