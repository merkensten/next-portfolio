import Image from 'next/image';
import Link from 'next/link';

// Helpers
import { RoutingPath } from '../../helpers/RoutingPath';

const navigation = [
  { name: 'Om Mig', href: RoutingPath.omMig },
  { name: 'Voii', href: RoutingPath.voii },
  { name: 'Caferangen', href: RoutingPath.caferangen },
  { name: 'Stensholms Trädgård', href: RoutingPath.stensholmsTradgard },
];

export const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-200 lg:border-none">
          <div className="flex items-center">
            <Link href={RoutingPath.home}>
              <a>
                <span className="sr-only">startsida</span>
                <Image
                  className="h-10 w-auto"
                  src="/mattis-logo.svg"
                  alt=""
                  width={100}
                  height={50}
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-base font-medium text-black hover:text-gray-500">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href={RoutingPath.projekt}>
              <a className="inline-block bg-gray-800 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                Mina projekt
              </a>
            </Link>
            <Link href={RoutingPath.kontakt}>
              <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-black hover:bg-gray-200">
                Kontakta mig
              </a>
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-black hover:text-gray-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
