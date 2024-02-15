import { Chapter, Topic } from "@prisma/client";
import React, { PropsWithChildren } from "react";

interface Props {
  chapter?: Chapter;
  topic?: Topic;
  id: string
}

const Definition = ({ id, chapter, topic, children }: PropsWithChildren<Props>) => {
  return (
    <div id={id}>
      <h2 className="font-bold">
        Definition: <span className="font-normal">{children}</span>
      </h2>
    </div>
  );
};

export default Definition;
