"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { algorithms, dataStructures } from "@/data/navData";
import NavListItem from "./NavListItem";

export function NavMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Getting started: Dropdown menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Getting Started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <NavListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </NavListItem>
              <NavListItem href="/data-structures/" title="Data Structures">
                How to install dependencies and structure your app.
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
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Algorithms
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
