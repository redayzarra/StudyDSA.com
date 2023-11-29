"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

export function LinkTabs() {
  const router = useRouter();

  const onClick = (value: string) => {
    router.push(`/${value}`);
  };

  const pathname = usePathname();
  const isActive = (value: string) => {
    return pathname.includes(`/${value}`);
  };

  return (
    <Tabs defaultValue="introduction" className="w-96">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger
          value="introduction"
          onClick={() => onClick("introduction")}
          className={isActive("introduction") ? "font-bold transition-all" : ""}
        >
          Introduction
        </TabsTrigger>
        <TabsTrigger
          value="studyguide"
          className={isActive("studyguide") ? "font-bold transition-all" : ""}
          onClick={() => onClick("studyguide")}
        >
          Study Guide
        </TabsTrigger>
        <TabsTrigger
          value="resources"
          onClick={() => onClick("resources")}
          className={isActive("resources") ? "font-bold transition-all" : ""}
        >
          Resources
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
