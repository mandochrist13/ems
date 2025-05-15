import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
  isBestseller?: boolean;
  lien?: string; // Optional link property for the product
}

interface CategoryLayoutProps {
  title: string;
  description: string;
  products: Product[];
  heroImage: string;
}

export default function CategoryLayout({
  title,
  description,
  products,
  heroImage,
}: CategoryLayoutProps) {
  return (
    <div className="bg-white">
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {title}
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute top-2 right-2 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    Nouveau
                  </div>
                )}
                {product.isBestseller && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
                    Best-seller
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-black">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {product.price.toLocaleString()} F CFA
              </p>

              <Link href={product.lien}>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  Voir le produit
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
