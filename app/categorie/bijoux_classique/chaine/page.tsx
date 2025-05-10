import CategoryLayout from "@/components/category-layout"

export default function ChainesPage() {
  const products = [
    {
      id: 1,
      name: "Chaîne Maille Forçat",
      price: 259000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-forcat",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Chaîne Maille Vénitienne",
      price: 279000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-venitienne",
    },
    {
      id: 3,
      name: "Chaîne Maille Figaro",
      price: 299000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-figaro",
      isNew: true,
    },
    {
      id: 4,
      name: "Chaîne Maille Serpent",
      price: 319000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-serpent",
    },
    {
      id: 5,
      name: "Chaîne Maille Gourmette",
      price: 289000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-gourmette",
    },
    {
      id: 6,
      name: "Chaîne Maille Corde",
      price: 269000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-corde",
    },
    {
      id: 7,
      name: "Chaîne Maille Jaseron",
      price: 249000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-jaseron",
    },
    {
      id: 8,
      name: "Chaîne Maille Palmier",
      price: 329000,
      image: "/images/chain-set.png",
      slug: "chaine-maille-palmier",
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
