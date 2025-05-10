import CategoryLayout from "@/components/category-layout"

export default function BouclesPage() {
  const products = [
    {
      id: 1,
      name: "Boucles d'oreilles Coquillage",
      price: 149000,
      image: "/images/cowrie-set.png",
      slug: "boucles-coquillage",
      isNew: true,
    },
    {
      id: 2,
      name: "Boucles d'oreilles Cercle & Barre",
      price: 129000,
      image: "/images/circle-set.png",
      slug: "boucles-cercle-barre",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Boucles d'oreilles Fleur Dorée",
      price: 159000,
      image: "/images/flower-necklace.png",
      slug: "boucles-fleur-doree",
    },
    {
      id: 4,
      name: "Boucles d'oreilles Ovales Texturées",
      price: 139000,
      image: "/images/cowrie-set.png",
      slug: "boucles-ovales-texturees",
    },
    {
      id: 5,
      name: "Boucles d'oreilles Créoles Torsadées",
      price: 169000,
      image: "/images/circle-set.png",
      slug: "boucles-creoles-torsadees",
    },
    {
      id: 6,
      name: "Boucles d'oreilles Pendantes Cristal",
      price: 189000,
      image: "/images/crystal-necklace.png",
      slug: "boucles-pendantes-cristal",
    },
    {
      id: 7,
      name: "Boucles d'oreilles Minimalistes",
      price: 119000,
      image: "/images/circle-set.png",
      slug: "boucles-minimalistes",
    },
    {
      id: 8,
      name: "Boucles d'oreilles Perles Dorées",
      price: 149000,
      image: "/images/cowrie-set.png",
      slug: "boucles-perles-dorees",
    },
  ]

  return (
    <CategoryLayout
      title="Boucles d'Oreilles"
      description="Découvrez notre collection exclusive de boucles d'oreilles en or, conçues pour sublimer votre visage avec élégance et raffinement. Chaque pièce est méticuleusement fabriquée pour vous offrir un bijou intemporel."
      products={products}
      heroImage="/images/cowrie-set.png"
    />
  )
}
