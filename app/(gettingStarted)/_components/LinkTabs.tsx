"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export function LinkTabs() {
  const router = useRouter();

  const onClick = (value: string) => {
    router.push(`/${value}`);
  };
  return (
    <Tabs defaultValue="introduction" className="w-96">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="introduction"
          onClick={() => onClick("introduction")}
        >
          Introduction
        </TabsTrigger>
        <TabsTrigger value="studyguide" onClick={() => onClick("studyguide")}>
          Study Guide
        </TabsTrigger>
        <TabsTrigger value="resources" onClick={() => onClick("resources")}>
          Resources
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
