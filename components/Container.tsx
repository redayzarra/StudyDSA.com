import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Container = ({ children, className}: PropsWithChildren<Props>) => {
  return (
    <div className={`mx-auto max-w-[85rem] py-6 px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
