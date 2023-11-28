"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavListItem from "./NavListItem";

const courses: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {/* Getting Started: Dropdown Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent dark:hover:bg-accent/50">
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <p className="mb-2 mt-4 text-lg font-medium">StudyDSA</p>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Dive into Data Structures & Algorithms! Boost your coding
                      skills and ace interviews, no matter your skill level.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <NavListItem href="/introduction" title="Introduction">
                Discover what I offer and how it can benefit your learning.
              </NavListItem>
              <NavListItem href="/studyguide" title="Study Guide">
                Your roadmap to mastering DSA: Tips, strategies, and best
                practices for effective learning.
              </NavListItem>
              <NavListItem href="/resources" title="Resources">
                Explore the wealth of resources I have collected over the years
                to study DSA.
              </NavListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Courses: Dropdown Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent hover:bg-accent/50">
            Courses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {courses.map((course) => (
                <NavListItem
                  key={course.title}
                  title={course.title}
                  href={course.href}
                >
                  {course.description}
                </NavListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Jobs */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-accent/50`}
            >
              Job Listings
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
