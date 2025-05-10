import CategoryLayout from "@/components/category-layout"

export default function ColliersPage() {
  const products = [
    {
      id: 1,
      name: "Collier Coquillage Doré",
      price: 399000,
      image: "/images/cowrie-set.png",
      slug: "collier-coquillage-dore",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Collier Cercle & Barre",
      price: 349000,
      image: "/images/circle-set.png",
      slug: "collier-cercle-barre",
    },
    {
      id: 3,
      name: "Collier Multi-Fleurs",
      price: 329000,
      image: "/images/flower-necklace.png",
      slug: "collier-multi-fleurs",
    },
    {
      id: 4,
      name: "Collier Chaîne Émeraude",
      price: 349000,
      image: "/images/emerald-necklace.png",
      slug: "collier-chaine-emeraude",
      isNew: true,
    },
    {
      id: 5,
      name: "Collier Cristal Cascade",
      price: 399000,
      image: "/images/crystal-necklace.png",
      slug: "collier-cristal-cascade",
    },
    {
      id: 6,
      name: "Collier Pendentif Géométrique",
      price: 379000,
      image: "/images/circle-set.png",
      slug: "collier-pendentif-geometrique",
    },
    {
      id: 7,
      name: "Collier Multi-rangs",
      price: 429000,
      image: "/images/chain-set.png",
      slug: "collier-multi-rangs",
    },
    {
      id: 8,
      name: "Collier Ras-de-cou Perles",
      price: 359000,
      image: "/images/crystal-necklace.png",
      slug: "collier-ras-de-cou-perles",
    },
  ]

  return (
    <CategoryLayout
      title="Colliers Personnalisés"
      description="Notre collection de colliers en or allie tradition et modernité. Des pièces uniques qui sublimeront votre décolleté et apporteront une touche d'élégance à toutes vos tenues, du quotidien aux occasions spéciales."
      products={products}
      heroImage="/images/crystal-necklace.png"
    />
  )
}
