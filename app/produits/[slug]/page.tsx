"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ShoppingBag } from "lucide-react"
import produits from "@/data/produit"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Params = {
  slug: string
}

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = use(params)
  const [quantity, setQuantity] = useState(1)


  
  
  // Maintenant tu as produitsAvecSlug où chaque produit a un slug !
  

  // TROUVER LE PRODUIT
  const product = produits.find((item) => item.slug === resolvedParams.slug)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  if (!product) {
    return <div>Produit non trouvé</div>
  }

  return (
    <div className="bg-white container">
      <div className="container px-4 py-8">
        <Link href="/collections" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Retour aux collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image src={product.photo || "/placeholder.svg"} alt={product.titre} fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {produits.map((item) => (
                <div key={item.id} className="aspect-square relative overflow-hidden rounded-lg border border-gray-200">
                  <Image src={item.photo || "/placeholder.svg"} alt={item.titre} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-serif font-bold text-black">{product.titre}</h1>
              <p className="text-2xl font-semibold mt-4">{product.prix} F CFA</p>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button onClick={decrementQuantity} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md">-</button>
                <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300">{quantity}</div>
                <button onClick={incrementQuantity} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md">+</button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black w-full hover:bg-black/90 ">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Ajouter au panier
                </Button>
              </div>
            </div>

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="care">Entretien</TabsTrigger>
                <TabsTrigger value="shipping">Livraison</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4 text-sm text-gray-600 whitespace-pre-line">
                {product.details}
              </TabsContent>
              <TabsContent value="care" className="mt-4 text-sm text-gray-600 whitespace-pre-line">
                {product.care}
              </TabsContent>
              <TabsContent value="shipping" className="mt-4 text-sm text-gray-600">
                <p>Livraison gratuite pour toutes les commandes supérieures à 200€.</p>
                <p className="mt-2">Délai de livraison estimé: 2-4 jours ouvrables.</p>
                <p className="mt-2">Livraison express disponible (24h) pour 15€ supplémentaires.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-serif font-bold text-black mb-8">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produits.map((item) => (
              <Link key={item.id} href={`/produits/${item.photo}`} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                  <Image src={item.photo || "/placeholder.svg"} alt={item.titre} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-medium text-black">{item.titre}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.prix} F CFA</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
