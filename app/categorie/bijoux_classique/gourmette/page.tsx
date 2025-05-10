import CategoryLayout from "@/components/category-layout"

export default function GourmettesPage() {
  const products = [
    {
      id: 1,
      name: "Gourmette Classique Or",
      price: 349000,
      image: "/images/chain-set.png",
      slug: "gourmette-classique-or",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Gourmette Identité Plate",
      price: 379000,
      image: "/images/chain-set.png",
      slug: "gourmette-identite-plate",
    },
    {
      id: 3,
      name: "Gourmette Maille Américaine",
      price: 399000,
      image: "/images/chain-set.png",
      slug: "gourmette-maille-americaine",
      isNew: true,
    },
    {
      id: 4,
      name: "Gourmette Figaro Gravable",
      price: 429000,
      image: "/images/chain-set.png",
      slug: "gourmette-figaro-gravable",
    },
    {
      id: 5,
      name: "Gourmette Alternée Diamants",
      price: 599000,
      image: "/images/chain-set.png",
      slug: "gourmette-alternee-diamants",
    },
    {
      id: 6,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/chain-set.png",
      slug: "gourmette-maille-marine",
    },
  ]

  return (
    <CategoryLayout
      title="Gourmettes"
      description="Nos gourmettes en or sont des pièces intemporelles qui peuvent être personnalisées selon vos souhaits. Robustes et élégantes, elles sont parfaites pour un cadeau significatif qui durera toute une vie."
      products={products}
      heroImage="/images/chain-set.png"
    />
  )
}
