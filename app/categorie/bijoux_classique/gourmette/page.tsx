import CategoryLayout from "@/components/category-layout"

export default function GourmettesPage() {
  const products = [
    {
      id: 1,
      name: "Gourmette Classique Or",
      price: 349000,
      image: "/images/bracelet_buterfly.jpg",
      slug: "gourmette-classique-or",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Gourmette Identité Plate",
      price: 379000,
      image: "/images/bracelet_buterfly2.jpg",
      slug: "gourmette-identite-plate",
    },
    {
      id: 3,
      name: "Gourmette Maille Américaine",
      price: 399000,
      image: "/images/bracelet_clou.jpg",
      slug: "gourmette-maille-americaine",
      isNew: true,
    },
    {
      id: 4,
      name: "Gourmette Figaro Gravable",
      price: 429000,
      image: "/images/bracelet_coeur.jpg",
      slug: "gourmette-figaro-gravable",
    },
    {
      id: 5,
      name: "Gourmette Alternée Diamants",
      price: 599000,
      image: "/images/bracelet_croix.jpg",
      slug: "gourmette-alternee-diamants",
    },
    {
      id: 6,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_eye2.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 7,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_lotus.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 8,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_maillon.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 9,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_mini_diamant.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 10,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_perle_trefle.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 11,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_treflle_red.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 12,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/bracelet_V.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 13,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/gourmette_5_eye.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 14,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/gourmette_clou2.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 15,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/gourmette_couer.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 16,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/gourmette_perle&treffle_noir.jpg",
      slug: "gourmette-maille-marine",
    },
    {
      id: 13,
      name: "Gourmette Maille Marine",
      price: 369000,
      image: "/images/gourmette_sabot.jpg",
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
