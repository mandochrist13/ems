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
