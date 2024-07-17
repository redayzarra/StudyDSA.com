"use client";

import GraphNodes from "@/components/GraphNodes";
import getUser from "@/hooks/client/getUser";
import getUserId from "@/hooks/client/getUserId";
import { Edge, NodeStyle } from "@/types/problems";

const SettingsPage = () => {
  const user = getUser();

  const userId = getUserId();
  console.log(userId);

  const nodeSize = 50;
  const nodeStyles: NodeStyle[] = [
    { backgroundColorClass: "bg-red-400"},
    { backgroundColorClass: "bg-blue-400"},
    { backgroundColorClass: "bg-green-400"},
    { backgroundColorClass: "bg-yellow-400"},
    { backgroundColorClass: "bg-purple-400"},
    { backgroundColorClass: "bg-pink-400"},
  ];

  const edges: Edge[] = [
    { from: 0, to: 1, bidirectional: false },
    { from: 1, to: 2, bidirectional: true },
    { from: 2, to: 3, bidirectional: false },
    { from: 3, to: 4, bidirectional: true },
    { from: 4, to: 5, bidirectional: false },
    { from: 5, to: 0, bidirectional: true },
  ];

  return (
    <div className="space-y-10 w-80">
      <GraphNodes nodeStyles={nodeStyles} connectionColor="bg-red-400" size={45} edges={edges} className="h-[400px] w-[400px] bg-transparent" />
    </div>
  );
};

export default SettingsPage;
