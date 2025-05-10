"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

const watchComponents: ComponentItem[] = [
  {
    title: "Homme",
    href: "/categorie/montre/homme",
    description:
      "Chaque montre est une déclaration : de style, de goût, de ponctualité raffinée. Des pièces qui marquent plus que l'heure.",
  },
  {
    title: "Femme",
    href: "/categorie/montre/femme",
    description:
      "Un hommage à l'art horloger. Des montres qui allient précision, distinction et présence intemporelle.",
  },
];

const classicJewelrySubmenu: SubMenuItem[] = [
  {
    title: "Bagues",
    href: "/categorie/bijoux_classique/bague",
    description:
      "Symboles d'attachement ou de style, elles captivent par leur éclat et leur singularité.",
  },
  {
    title: "Colliers",
    href: "/categorie/bijoux_classique/collier",
    description:
      "Des créations qui racontent une histoire, proches du cœur, empreintes de poésie ou de puissance.",
  },
  {
    title: "Chaînes",
    href: "/categorie/bijoux_classique/chaine",
    description:
      "Minimalistes ou sophistiquées, elles habillent le cou ou le poignet avec fluidité et lumière.",
  },
  {
    title: "Gourmettes",
    href: "/categorie/bijoux_classique/gourmette",
    description:
      "Élégance traditionnelle revisitée, entre force et raffinement, pour un bijou à forte identité.",
  },
  {
    title: "Boucles d'oreilles",
    href: "/categorie/bijoux_classique/boucle",
    description:
      "Des éclats subtils à chaque mouvement, symboles d'élégance discrète ou d'audace assumée.",
  },
];

const personalizedJewelrySubmenu: SubMenuItem[] = [
  {
    title: "Bracelets gravés",
    href: "/categorie/bijoux_perso/bracelet",
    description:
      "Gravures précieuses, prénoms, dates ou messages secrets — chaque bijou devient une œuvre personnelle, un trésor à soi.",
  },
  {
    title: "Colliers prénom",
    href: "/categorie/bijoux_perso/collier_prenom",
    description:
      "Des créations qui racontent une histoire, proches du cœur, empreintes de poésie ou de puissance.",
  },
  {
    title: "Bagues personnalisées",
    href: "/categorie/bijoux_perso/bague",
    description:
      "Symboles d'attachement ou de style, elles captivent par leur éclat et leur singularité.",
  },
];

const mobileMenuItems: MenuItem[] = [
  { 
    label: "Nouveautés", 
    href: "/collections" 
  },
  {
    label: "Bijoux classiques",
    submenu: classicJewelrySubmenu,
  },
  {
    label: "Montres",
    submenu: watchComponents,
  },
  {
    label: "Bijoux personnalisés",
    submenu: personalizedJewelrySubmenu,
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [submenuOpen, setSubmenuOpen] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (key: number) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex sticky top-0 z-50 flex-col bg-white">
      <header className="w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png?height=600&width=400"
                alt="Collection de bagues"
                width={400}
                height={600}
                className="object-cover w-full h-[60px]"
              />
            </Link>
            <p className="text-sm md:text-xl font-semibold tracking-tighter">
              Accessoires By EMS
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-6 md:gap-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/collections" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Nouveautés
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Bijoux classiques</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full bg-[url('/images/flower-necklace.png')] bg-cover bg-center w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                            href="/categorie/bijoux_classique/bague"
                          >
                            <div className="mb-2 text-white mt-4 text-lg font-medium">
                              Bagues
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              {classicJewelrySubmenu[0].description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {classicJewelrySubmenu.slice(1).map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.title}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Montres</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="relative grid w-[400px] bg-[url('/images/watch_ban.jpeg')] bg-cover bg-center gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
                      {watchComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          className="relative text-white hover:text-black z-10"
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Bijoux personnalisés</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex bg-[url('/images/flower-necklace.png')] h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                            href="/categorie/bijoux_perso/bracelet"
                          >
                            <div className="mb-2 mt-4 text-white text-lg font-medium">
                              {personalizedJewelrySubmenu[0].title}
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              {personalizedJewelrySubmenu[0].description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {personalizedJewelrySubmenu.slice(1).map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.title}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Burger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-1 w-8 bg-black rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 w-8 bg-black rounded transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 w-8 bg-black rounded transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Mobile menu */}
          <div
            className={`lg:hidden fixed top-16 left-0 bg-white w-full max-h-[calc(100vh-64px)] overflow-auto transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } z-30 shadow-xl`}
            aria-hidden={!menuOpen}
          >
            <ul className="flex flex-col divide-y divide-gray-200">
              {mobileMenuItems.map((item, idx) =>
                !item.submenu ? (
                  <li key={idx}>
                    <Link
                      href={item.href || "#"}
                      className="block px-6 py-4 text-gray-900 text-lg font-medium hover:bg-gray-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={idx}>
                    <button
                      onClick={() => toggleSubmenu(idx)}
                      className="w-full flex justify-between items-center px-6 py-4 text-gray-900 text-lg font-medium hover:bg-gray-50 focus:outline-none"
                      aria-expanded={submenuOpen[idx] ? "true" : "false"}
                      aria-controls={`submenu-${idx}`}
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          submenuOpen[idx] ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <ul
                      id={`submenu-${idx}`}
                      className={`overflow-hidden transition-all duration-300 ${
                        submenuOpen[idx] ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      {item.submenu.map((subitem, sidx) => (
                        <li key={sidx} className="border-t border-gray-200 bg-gray-50">
                          <Link
                            href={subitem.href}
                            className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={() => setMenuOpen(false)}
                          >
                            <div className="font-medium">{subitem.title}</div>
                            {subitem.description && (
                              <p className="text-sm text-gray-500 mt-1">
                                {subitem.description}
                              </p>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}