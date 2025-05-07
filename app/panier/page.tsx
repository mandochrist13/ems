"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // Exemple de panier - dans une application réelle, vous utiliseriez un état global ou un contexte
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Parure Coquillage Doré",
      price: 399,
      quantity: 1,
      image: "/images/cowrie-set.png",
    },
    {
      id: 2,
      name: "Bracelet Torsadé Or",
      price: 299,
      quantity: 1,
      image: "/images/twisted-bracelet.png",
    },
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  return (
    <div className="bg-white">
      <div className="container px-4 py-8">
        <Link
          href="/collections"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Continuer mes achats
        </Link>

        <h1 className="text-3xl font-serif font-bold text-black mb-8">Votre Panier</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-medium text-black mb-2">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">Découvrez nos collections et ajoutez des articles à votre panier.</p>
            <Button asChild>
              <Link href="/collections">Découvrir nos collections</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-medium text-black">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.price} F CFA</p>
                      <div className="flex items-center mt-auto">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button onClick={() => removeItem(item.id)} className="ml-4 text-gray-500 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.price * item.quantity} F CFA</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h2 className="text-xl font-medium text-black mb-6">Résumé de la commande</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{subtotal} F CFA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span>{shipping === 0 ? "Gratuit" : `${shipping} F CFA`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{total} F CFA</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {shipping === 0
                    ? "Livraison gratuite pour les commandes supérieures à 200 000 F CFA"
                    : "Livraison gratuite à partir de 200 000 F CFA d'achat"}
                </p>
                <Button className="w-full bg-black hover:bg-black/90 mt-4">Passer à la caisse</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
