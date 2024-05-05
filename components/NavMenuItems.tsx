"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NavListItem from "./NavListItem";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMenuItems() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Getting started: Dropdown menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <NavListItem href="/docs" title="Introduction">
                Styles for headings, paragraphs, lists...etc
              </NavListItem>
              <NavListItem href="/data-structures/" title="Data Structures">
                Styles for headings, paragraphs, lists...etc
              </NavListItem>
              <NavListItem href="/algorithms" title="Algorithms">
                Styles for headings, paragraphs, lists...etc
              </NavListItem>
              <NavListItem href="/big-o" title="Big-O Time">
                Styles for headings, paragraphs, lists...etc
              </NavListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Data Structures: Dropdown Menu */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Data Structures
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {dataStructures.map((dataStructure) => (
                <NavListItem
                  key={dataStructure.title}
                  title={dataStructure.title}
                  href={dataStructure.href}
                >
                  {dataStructure.description}
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* Algorithms: Dropdown Menu */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Practice
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {algorithms.map((algorithm) => (
                <NavListItem
                  key={algorithm.title}
                  title={algorithm.title}
                  href={algorithm.href}
                >
                  {algorithm.description}
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <Link
            href="/practice"
            legacyBehavior
            passHref
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-accent/50`}
            >
              Practice
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Machine Learning: Dropdown Menu
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Machine Learning
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {machineLearning.map((ml) => (
                <NavListItem
                  key={ml.title}
                  title={ml.title}
                  href={ml.href}
                >
                  {ml.description}
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
