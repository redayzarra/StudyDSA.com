"use client";

import GraphNodes from "@/components/GraphNodes";
import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";
import { Edge, NodeStyle } from "@/types/problems";

const SettingsPage = () => {
  // const nodeStyles: NodeStyle[] = [
  //   { backgroundColorClass: "bg-red-500" },
  //   { backgroundColorClass: "bg-blue-500" },
  //   { backgroundColorClass: "bg-green-600" },
  //   { backgroundColorClass: "bg-orange-500" },
  //   { backgroundColorClass: "bg-purple-500" },
  //   // { backgroundColorClass: "bg-pink-400" },
  // ];
  // const edges: Edge[] = [
  //   { from: 0, to: 1, bidirectional: false },
  //   { from: 1, to: 3, bidirectional: false },
  //   { from: 1, to: 4, bidirectional: true },
  //   { from: 3, to: 4, bidirectional: true },
  //   { from: 4, to: 2, bidirectional: true },
  //   // { from: 4, to: 5, bidirectional: false },
  //   // { from: 5, to: 0, bidirectional: true },
  // ];
  return (
    <div className="flex flex-1 w-full min-h-[200px] md:min-h-[0px]">
      {/* <GraphNodes
        nodeStyles={nodeStyles}
        connectionColor="bg-red-400"
        size={30}
        edges={edges}
        width={400}
        height={400}
        className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] h-full w-full z-50"
      /> */}
    </div>
  );
};

export default SettingsPage;
