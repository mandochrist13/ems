import CategoryLayout from "@/components/category-layout"

export default function MontresPage() {
  const products = [
    {
      id: 1,
      name: "Montre Classique Bracelet Or",
      price: 599000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-classique-bracelet-or",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Montre Chronographe Luxe",
      price: 799000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-chronographe-luxe",
    },
    {
      id: 3,
      name: "Montre Automatique Squelette",
      price: 899000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-automatique-squelette",
      isNew: true,
    },
    {
      id: 4,
      name: "Montre Minimaliste Cadran Noir",
      price: 499000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-minimaliste-cadran-noir",
    },
    {
      id: 5,
      name: "Montre Dame Pavée Diamants",
      price: 999000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-dame-pavee-diamants",
    },
    {
      id: 6,
      name: "Montre Sport Élégance",
      price: 699000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "montre-sport-elegance",
    },
  ]

  return (
    <CategoryLayout
      title="Montres Homme"
      description="Nos montres allient précision horlogère et élégance intemporelle. Chaque pièce est conçue avec des matériaux de haute qualité pour vous offrir un accessoire à la fois fonctionnel et raffiné qui traversera les époques."
      products={products}
      heroImage="/placeholder.svg?height=1000&width=2000"
    />
  )
}
