import Link from "next/link";



export default function Footer() {
  return (
    <footer className="border-t bg-white">
        <div className="container flex flex-col gap-8 py-8 md:py-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold tracking-tighter">
                Accessoires By EMS
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              L'élégance intemporelle à travers des créations uniques
            </p>
            <div className="flex gap-4 text-gray-500">
              <Link href="#" className="hover:text-black">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-black">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-black">
                <span className="sr-only">Pinterest</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="12" x2="12" y1="8" y2="16" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Collections</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Nouveautés
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Bagues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Colliers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Bracelets
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">À Propos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Notre Histoire
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Nos Artisans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Matériaux
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Durabilité
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Service Client</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Livraison
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Retours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Conditions Générales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-black">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Accessoires By EMS. Tous droits
              réservés.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-gray-500 hover:text-black">
                Conditions Générales
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-black">
                Confidentialité
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-black">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
}
