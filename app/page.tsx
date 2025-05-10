import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search } from "lucide-react";
import produits from "@/data/produit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div
            className="absolute inset-0 bg-[url('/images/Bannière.png')] bg-cover bg-top bg-fixed"
            aria-hidden="true"
          ></div>

          <div className="relative z-20 flex h-full items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400"></div>
                <span className="text-yellow-400 font-serif italic text-lg">
                  Collection Exclusive
                </span>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400"></div>
              </div>
              <h1 className="text-3xl font-serif font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Élégance Intemporelle
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-white md:text-xl">
                Découvrez notre collection exclusive de bijoux de luxe
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Link href="/collections">
                  <Button className="bg-white hover:bg-slate-400 text-black">
                    Découvrir la Collection
                  </Button>
                </Link>
                <Link href="/"><Button
                  variant="default"
                  className="border-white text-white hover:bg-black/50"
                >
                  Nouveautés
                </Button></Link>
                
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        </section>

        <section className="py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Collections Exclusives
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Des pièces uniques créées avec les matériaux les plus précieux
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-12">
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/images/circle-set.png?height=600&width=400"
                  alt="Collection de bagues"
                  width={400}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Bagues</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-white mt-2"
                    >
                      Découvrir <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/images/flower-necklace.png?height=600&width=400"
                  alt="Collection de colliers"
                  width={400}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">Colliers</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-white mt-2"
                    >
                      Découvrir <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/images/bamboo-bracelet.png?height=600&width=400"
                  alt="Collection de bracelets"
                  width={400}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      Bracelets
                    </h3>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm text-white mt-2"
                    >
                      Découvrir <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nos Pièces Phares
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Découvrez nos créations les plus prisées
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
              {produits.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.photo}
                    alt={item.titre}
                    width={300}
                    height={400}
                    className="aspect-[3/4] object-cover w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="font-medium">{item.titre}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-semibold">{item.prix} F CFA</p>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Ajouter au panier</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/collections"></Link>
              <Button className="bg-black text-white hover:bg-black/90">
                Voir Toute la Collection
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  L'Art de la Joaillerie
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Chaque bijou est conçu avec le plus grand soin, en utilisant
                  des matériaux de qualité, pour offrir un rendu élégant et
                  durable à un prix accessible à tous.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-black/90">
                    Notre Histoire
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                  >
                    Notre boutique
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/ban.jpg?height=720&width=1280"
                  alt="Atelier de joaillerie"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Inscrivez-vous à Notre Newsletter
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl mb-8">
              Recevez en avant-première nos nouvelles collections et offres
              exclusives
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-2 min-[400px]:flex-row">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-black hover:bg-white/90 shrink-0">
                S'inscrire
              </Button>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
