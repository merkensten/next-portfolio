import { Container } from '../components/layouts/Container';
import { Wrapper } from '../components/layouts/Wrapper';
import { RoutingPath } from '../helpers/RoutingPath';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container bgColor="bg-white">
      <Wrapper padding="py-8">
        <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                404
              </p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Sidan hittades inte
                  </h1>
                  <p className="mt-3 text-base text-gray-500">
                    Dubbelkolla webbläsarens adressfält och försök igen.
                  </p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link href={RoutingPath.home}>
                    <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Gå till startsidan
                    </a>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
