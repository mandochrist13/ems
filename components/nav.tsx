"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Homme",
    href: "/docs/primitives/alert-dialog",
    description:
      "Chaque montre est une déclaration : de style, de goût, de ponctualité raffinée. Des pièces qui marquent plus que l’heure.",
  },
  {
    title: "Femme",
    href: "/docs/primitives/hover-card",
    description:
      "Un hommage à l’art horloger. Des montres qui allient précision, distinction et présence intemporelle.",
  },
];

export default function Nav() {
  return (
    <div className="flex sticky top-0 z-50 flex-col bg-white">
      <header className=" w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png?height=600&width=400"
                alt="Collection de bagues"
                width={400}
                height={600}
                className="object-cover w-full h-[60px] "
              />
            </Link>
            <p className="text-xl font-semibold tracking-tighter">
              Accessoires By EMS
            </p>
          </div>
          <div className="flex items-center gap-6 md:gap-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Nouveautés
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Bijoux classiques
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full bg-[url('/images/flower-necklace.png')] bg-cover bg-center w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 text-white mt-4 text-lg font-medium">
                              Bagues
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                              Symboles d&apos;attachement ou de style, elles
                              captivent par leur éclat et leur singularité.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Colliers">
                        Des créations qui racontent une histoire, proches du
                        cœur, empreintes de poésie ou de puissance.
                      </ListItem>
                      <ListItem href="/" title="Chaînes">
                        Minimalistes ou sophistiquées, elles habillent le cou ou
                        le poignet avec fluidité et lumière.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Gourmettes">
                        Élégance traditionnelle revisitée, entre force et
                        raffinement, pour un bijou à forte identité.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Boucles d'oreilles"
                      >
                        Des éclats subtils à chaque mouvement, symboles
                        d&apos;élégance discrète ou d&apos;audace assumée.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Montres</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="relative grid w-[400px] bg-[url('/images/watch_ban.jpeg')] bg-cover bg-center gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {/* Overlay sombre */}
                      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

                      {components.map((component) => (
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
                  <NavigationMenuTrigger>
                    Bijoux personnalisés
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex bg-[url('/images/flower-necklace.png')]  h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-white text-lg font-medium">
                              Bracelets gravés
                            </div>
                            <p className="text-sm leading-tight text-white/80">
                            Gravures précieuses, prénoms, dates ou messages secrets — chaque bijou devient une œuvre personnelle, un trésor à soi.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Colliers prénom">Des créations qui racontent une histoire, proches du cœur, empreintes de poésie ou de puissance.</ListItem>
                      <ListItem
                        href="/docs/installation"
                        title="Bagues personnalisées"
                      >Symboles d&apos;attachement ou de style, elles captivent par leur éclat et leur singularité.</ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Panier</span>
            </Button>
          </div> */}
        </div>
      </header>
    </div>
  );
}
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
