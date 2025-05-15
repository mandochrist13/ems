// Données de textes juridiques pour la démonstration
const produits = [
    {
      id: 1,
      slug: "bracelet-bamboo",
      photo: "/images/boucle noeud.jpg?height=400&width=300",
      prix: 5000,
      titre: "Bracelet bamboo en or ",
      description:
        "Or 18 carats.",
      categorie: "Bague",
      descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
    },
    {
        id: 2,
        slug: "bracelet-cordon-noir-or",
        photo: "/images/bracelet_eye.jpg?height=400&width=300",
        prix: 5000,
        titre: "Bracelet Noir et or",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 3,
        slug: "collier-chaine-or",
        photo: "/images/colier_boucle.jpg?height=400&width=300",
        prix: 5000,
        titre: "Médaillon en or chaine",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 4,
        slug: "collier-pointe-or",
        photo: "/images/croix_blanche.jpg?height=400&width=300",
        prix: 5000,
        titre: "Collier & paire de boucle style pointe",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 5,
        slug: "collier-cowrie",
        photo: "/images/gourmette_chaine_argent.jpg?height=400&width=300",
        prix: 5000,
        titre: "Collier & paire de boucle style cowrie",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 6,
        slug: "collier-cristal",
        photo: "/images/médaillon_croix.jpg?height=400&width=300",
        prix: 5000,
        titre: "Collier en or chic",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 7,
        slug: "collier-emerald",
        photo: "/images/boucle_zero2.jpg?height=400&width=300",
        prix: 5000,
        titre: "Collier or et médaillon Emeraude",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      {
        id: 8,
        slug: "collier-flower",
        photo: "/images/boucle_crochet.jpg?height=400&width=300",
        prix: 5000,
        titre: "Collier or et médaillon Fleur",
        description:
          "Or 18 carats.",
        categorie: "Bague",
        descriptionDetailles:
      "Cette élégante parure en or 18 carats s'inspire des formes organiques des coquillages. Comprenant un collier et des boucles d'oreilles assorties, cet ensemble apportera une touche d'élégance naturelle à toutes vos tenues.",
    details:
      "Or 18 carats\nPoids: 8g (collier), 3g (paire de boucles d'oreilles)\nFermeture sécurisée\nLivré dans un écrin de luxe",
    care: "Évitez le contact avec l'eau, les parfums et les produits cosmétiques\nNettoyez délicatement avec un chiffon doux\nRangez séparément dans son écrin pour éviter les rayures",
    images: ["/images/cowrie-set.png", "/images/cowrie-set.png", "/images/cowrie-set.png"],
    rating: 4.8,
    reviewCount: 24,
    related: [
      {
        name: "Bracelet Torsadé Or",
        price: "299",
        image: "/images/twisted-bracelet.png",
        slug: "bracelet-torsade-or",
      },
      {
        name: "Collier Chaîne Émeraude",
        price: "349",
        image: "/images/emerald-necklace.png",
        slug: "collier-chaine-emeraude",
      },
      {
        name: "Bracelet Bambou Or",
        price: "279",
        image: "/images/bamboo-bracelet.png",
        slug: "bracelet-bambou-or",
      },
    ],
      },
      
  ];
  export default produits;