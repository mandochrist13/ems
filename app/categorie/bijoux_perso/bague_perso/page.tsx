import CategoryLayout from "@/components/category-layout"

export default function BaguesPage() {
  const products = [
    {
      id: 1,
      name: "Bague Solitaire Classique",
      price: 499000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-solitaire-classique",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Alliance Or Jaune",
      price: 349000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "alliance-or-jaune",
    },
    {
      id: 3,
      name: "Bague Cocktail Pierre Précieuse",
      price: 599000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-cocktail-pierre-precieuse",
      isNew: true,
    },
    {
      id: 4,
      name: "Bague Tressée Deux Ors",
      price: 429000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-tressee-deux-ors",
    },
    {
      id: 5,
      name: "Bague Chevalière Gravable",
      price: 379000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-chevaliere-gravable",
    },
    {
      id: 6,
      name: "Bague Éternité Diamants",
      price: 799000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-eternite-diamants",
    },
    {
      id: 7,
      name: "Bague Nœud Infini",
      price: 329000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-noeud-infini",
    },
    {
      id: 8,
      name: "Bague Fleur Vintage",
      price: 459000,
      image: "/placeholder.svg?height=500&width=500",
      slug: "bague-fleur-vintage",
    },
  ]

  return (
    <CategoryLayout
      title="Bagues"
      description="Découvrez notre collection de bagues en or, des pièces intemporelles qui symbolisent l'amour, l'engagement ou simplement votre style personnel. Chaque bague est conçue avec précision pour sublimer votre main avec élégance."
      products={products}
      heroImage="/placeholder.svg?height=1000&width=2000"
    />
  )
}
