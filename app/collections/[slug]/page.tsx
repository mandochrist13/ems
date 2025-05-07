import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params


  // ...
  // Exemple de données - dans une application réelle, vous récupéreriez ces données depuis une API ou une base de données
  const collections = {
    coquillage: {
      name: "Collection Coquillage",
      description:
        "Inspirée par la beauté naturelle des coquillages, cette collection capture l'essence de la mer dans des bijoux élégants en or. Chaque pièce est méticuleusement conçue pour refléter les formes organiques et la texture unique des coquillages.",
      image: "/images/cowrie-set.png",
      products: [
        {
          name: "Parure Coquillage Doré",
          price: "399",
          image: "/images/cowrie-set.png",
          slug: "parure-coquillage-dore",
        },
      ],
    },
    "cercle-or": {
      name: "Collection Cercle d'Or",
      description:
        "La collection Cercle d'Or célèbre la perfection et l'élégance intemporelle du cercle. Ces bijoux minimalistes et sophistiqués ajoutent une touche de raffinement à n'importe quelle tenue.",
      image: "/images/circle-set.png",
      products: [
        {
          name: "Parure Cercle & Barre",
          price: "349",
          image: "/images/circle-set.png",
          slug: "parure-cercle-barre",
        },
      ],
    },
    "fleur-doree": {
      name: "Collection Fleur Dorée",
      description:
        "La collection Fleur Dorée s'inspire de la délicatesse et de la beauté des fleurs. Chaque bijou capture l'essence de la nature dans des designs élégants et intemporels.",
      image: "/images/flower-necklace.png",
      products: [
        {
          name: "Collier Multi-Fleurs",
          price: "329",
          image: "/images/flower-necklace.png",
          slug: "collier-multi-fleurs",
        },
      ],
    },
  }

  const collection = collections[ params.slug  as keyof typeof collections]

  if (!collection) {
    return <div>Collection non trouvée</div>
  }

  // Ajout de produits supplémentaires pour toutes les collections
  const additionalProducts = [
    {
      name: "Bracelet Torsadé Or",
      price: "299",
      image: "/images/twisted-bracelet.png",
      slug: "bracelet-torsade-or",
    },
    {
      name: "Bracelet Cordon Noir & Or",
      price: "249",
      image: "/images/black-gold-bracelet.png",
      slug: "bracelet-cordon-noir-or",
    },
    {
      name: "Collier Chaîne Émeraude",
      price: "349",
      image: "/images/emerald-necklace.png",
      slug: "collier-chaine-emeraude",
    },
    {
      name: "Collier Cristal Cascade",
      price: "399",
      image: "/images/crystal-necklace.png",
      slug: "collier-cristal-cascade",
    },
    {
      name: "Bracelet Bambou Or",
      price: "279",
      image: "/images/bamboo-bracelet.png",
      slug: "bracelet-bambou-or",
    },
  ]

  const allProducts = [...collection.products, ...additionalProducts]

  return (
    <div className="bg-white ">
      <div className="container px-4 py-8">
        <Link
          href="/collections"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Toutes les collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
            <Image
              src={collection.image || "/placeholder.svg"}
              alt={collection.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-black mb-6">{collection.name}</h1>
            <p className="text-gray-600">{collection.description}</p>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-black mb-8">Découvrez la collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <Link key={index} href={`/produits/${product.slug}`} className="group">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-black">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price} F CFA</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
