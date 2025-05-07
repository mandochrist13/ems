import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Collection Coquillage",
      description: "Des bijoux inspirés par la beauté naturelle des coquillages",
      image: "/images/cowrie-set.png",
      slug: "coquillage",
    },
    {
      id: 2,
      name: "Collection Cercle d'Or",
      description: "L'élégance intemporelle des formes circulaires",
      image: "/images/circle-set.png",
      slug: "cercle-or",
    },
    {
      id: 3,
      name: "Collection Fleur Dorée",
      description: "La délicatesse florale capturée en or",
      image: "/images/flower-necklace.png",
      slug: "fleur-doree",
    },
  ]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-black mb-6">Nos Collections</h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Découvrez nos collections exclusives de bijoux en or, conçues avec passion et savoir-faire artisanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h2 className="text-2xl font-serif font-medium mb-2">{collection.name}</h2>
                  <p className="text-sm text-white/80 mb-4">{collection.description}</p>
                  <div className="flex items-center text-sm font-medium">
                    Découvrir <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-black text-center mb-12">
            Nos Pièces Phares
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              name="Bracelet Torsadé Or"
              price="299"
              image="/images/twisted-bracelet.png"
              slug="bracelet-torsade-or"
            />
            <ProductCard
              name="Bracelet Cordon Noir & Or"
              price="249"
              image="/images/black-gold-bracelet.png"
              slug="bracelet-cordon-noir-or"
            />
            <ProductCard
              name="Collier Chaîne Émeraude"
              price="349"
              image="/images/emerald-necklace.png"
              slug="collier-chaine-emeraude"
            />
            <ProductCard
              name="Collier Cristal Cascade"
              price="399"
              image="/images/crystal-necklace.png"
              slug="collier-cristal-cascade"
            />
            <ProductCard
              name="Ensemble Chaîne Luxe"
              price="599"
              image="/images/chain-set.png"
              slug="ensemble-chaine-luxe"
            />
            <ProductCard
              name="Bracelet Bambou Or"
              price="279"
              image="/images/bamboo-bracelet.png"
              slug="bracelet-bambou-or"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ name, price, image, slug }) {
  return (
    <Link href={`/produits/${slug}`} className="group">
      <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-medium text-black">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{price} F CFA</p>
    </Link>
  )
}
