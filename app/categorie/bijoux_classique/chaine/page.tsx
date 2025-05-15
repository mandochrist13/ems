import CategoryLayout from "@/components/category-layout"

export default function ChainesPage() {
  const products = [
    {
      id: 1,
      name: "Chaîne Maille Forçat",
      price: 259000,
      image: "/images/colier_boucle.jpg",
      slug: "chaine-maille-forcat",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Chaîne Maille Vénitienne",
      price: 279000,
      image: "/images/médaillon_croix.jpg",
      slug: "chaine-maille-venitienne",
    },
 
    
  ]

  return (
    <CategoryLayout
      title="Chaînes"
      description="Nos chaînes en or sont conçues pour durer toute une vie. Chaque maille est méticuleusement assemblée pour créer des pièces à la fois robustes et élégantes, parfaites à porter seules ou avec un pendentif."
      products={products}
      heroImage="/images/chain-set.png"
    />
  )
}
