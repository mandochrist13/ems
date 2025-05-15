import CategoryLayout from "@/components/category-layout"

export default function BouclesPage() {
  const products = [
    {
      id: 1,
      name: "Boucles d'oreilles Coquillage",
      price: 149000,
      image: "/images/boucle noeud.jpg",
      slug: "boucles-coquillage",
      isNew: true,
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 2,
      name: "Boucles d'oreilles Cercle & Barre",
      price: 129000,
      image: "/images/boucle_crochet.jpg",
      slug: "boucles-cercle-barre",
      isBestseller: true,
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 3,
      name: "Boucles d'oreilles Fleur Dorée",
      price: 159000,
      image: "/images/boucle_ronde.jpg",
      slug: "boucles-fleur-doree",
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 4,
      name: "Boucles d'oreilles Ovales Texturées",
      price: 139000,
      image: "/images/boucle_torssade.jpg",
      slug: "boucles-ovales-texturees",
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 5,
      name: "Boucles d'oreilles Créoles Torsadées",
      price: 169000,
      image: "/images/boucle_zero.jpg",
      slug: "boucles-creoles-torsadees",
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 6,
      name: "Boucles d'oreilles Pendantes Cristal",
      price: 189000,
      image: "/images/boucle_zero2.jpg",
      slug: "boucles-pendantes-cristal",
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
    },
    {
      id: 7,
      name: "Boucles d'oreilles Minimalistes",
      price: 119000,
      image: "/images/boucle-diams.jpg",
      slug: "boucles-minimalistes",
      lien: "https://produit.accessoiresbyems.com/produit/boucle-doreille-noeud-papillon/",
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
