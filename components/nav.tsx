import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <div className="flex sticky top-0 z-50 flex-col bg-white">
      <header className=" w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png?height=600&width=400"
              alt="Collection de bagues"
              width={400}
              height={600}
              className="object-cover w-full h-[40px] "
            />
            <span className="text-xl font-bold tracking-tighter">
              Accessoires By EMS
            </span>
          </Link>
          <div className="flex items-center gap-6 md:gap-10">
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-black/80"
              >
                Nouveautés
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium transition-colors hover:text-black/80"
              >
                Bijoux classiques
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium transition-colors hover:text-black/80"
              >
                Montres
              </Link>
              <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-black/80"
              >
                Bijoux personnalisés
              </Link>
              
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Panier</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
