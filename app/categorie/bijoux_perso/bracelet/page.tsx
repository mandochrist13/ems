import CategoryLayout from "@/components/category-layout"

export default function BraceletsPage() {
  const products = [
    {
      id: 1,
      name: "Bracelet Torsadé Or",
      price: 299000,
      image: "/images/twisted-bracelet.png",
      slug: "bracelet-torsade-or",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Bracelet Cordon Noir & Or",
      price: 249000,
      image: "/images/black-gold-bracelet.png",
      slug: "bracelet-cordon-noir-or",
    },
    {
      id: 3,
      name: "Bracelet Bambou Or",
      price: 279000,
      image: "/images/bamboo-bracelet.png",
      slug: "bracelet-bambou-or",
      isNew: true,
    },
    {
      id: 4,
      name: "Bracelet Jonc Classique",
      price: 259000,
      image: "/images/twisted-bracelet.png",
      slug: "bracelet-jonc-classique",
    },
    {
      id: 5,
      name: "Bracelet Chaîne Fine",
      price: 229000,
      image: "/images/chain-set.png",
      slug: "bracelet-chaine-fine",
    },
    {
      id: 6,
      name: "Bracelet Manchette Texturé",
      price: 349000,
      image: "/images/bamboo-bracelet.png",
      slug: "bracelet-manchette-texture",
    },
    {
      id: 7,
      name: "Bracelet Perles Dorées",
      price: 269000,
      image: "/images/black-gold-bracelet.png",
      slug: "bracelet-perles-dorees",
    },
    {
      id: 8,
      name: "Bracelet Multi-rangs",
      price: 319000,
      image: "/images/chain-set.png",
      slug: "bracelet-multi-rangs",
    },
  ]

  return (
    <CategoryLayout
      title="Bracelets personnalisés"
      description="Explorez notre collection de bracelets en or, alliant élégance et modernité. Des pièces intemporelles qui sublimeront votre poignet pour toutes les occasions, du plus simple au plus sophistiqué."
      products={products}
      heroImage="/images/twisted-bracelet.png"
    />
  )
}
