"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavListItem from "./NavListItem";
import { algorithms, dataStructures, machineLearning } from "@/data/navData";


export function NavMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Data Structures: Dropdown Menu */}
        <NavigationMenuItem>
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
        </NavigationMenuItem>

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
