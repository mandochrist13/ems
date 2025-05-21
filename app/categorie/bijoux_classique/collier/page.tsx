import CategoryLayout from "@/components/category-layout"

export default function ColliersPage() {
  const products = [
    {
      id: 1,
      name: "Collier Coquillage Doré",
      price: 399000,
      image: "/images/collier&bracelet_treffle_noir.jpg",
      slug: "collier-coquillage-dore",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Collier Cercle & Barre",
      price: 349000,
      image: "/images/collier&bracellet_infinity.jpg",
      slug: "collier-cercle-barre",
    },
    {
      id: 3,
      name: "Collier Multi-Fleurs",
      price: 329000,
      image: "/images/medaillon_star_squarre_circle.jpg",
      slug: "collier-multi-fleurs",
    },
    {
      id: 4,
      name: "Collier Chaîne Émeraude",
      price: 349000,
      image: "/images/medaillon_treffle_emeraude.jpg",
      slug: "collier-chaine-emeraude",
      isNew: true,
    },
    {
      id: 5,
      name: "Collier Cristal Cascade",
      price: 399000,
      image: "/images/medaillon_treffle_noir.jpg",
      slug: "collier-cristal-cascade",
    },
  
  ]

  return (
    <CategoryLayout
      title="Colliers"
      description="Notre collection de colliers en or allie tradition et modernité. Des pièces uniques qui sublimeront votre décolleté et apporteront une touche d'élégance à toutes vos tenues, du quotidien aux occasions spéciales."
      products={products}
      heroImage="/images/crystal-necklace.png"
    />
  )
}
