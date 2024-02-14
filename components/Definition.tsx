import { Chapter, Topic } from "@prisma/client";
import React, { PropsWithChildren } from "react";

interface Props {
  chapter?: Chapter;
  topic?: Topic;
}

const Definition = ({ chapter, topic, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <h2 className="font-bold">
        Definition: <span className="font-normal">{children}</span>
      </h2>
    </div>
  );
};

export default Definition;
