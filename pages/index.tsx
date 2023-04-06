import Head from 'next/head';
import { Pacifico } from 'next/font/google';
import { linkCardData } from '@/components/Types';
import LinkCard from '@/components/LinkCard/LinkCard';
import Image from 'next/image';
import ocean from '../public/oceanBeach.webp';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const inter = Pacifico({ subsets: ['latin'], weight: '400' });

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Danny Hanford</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <div className="relative flex-1">
          <Image
            src={ocean}
            priority
            quality={100}
            alt="beach"
            fill
            className="object-cover"
          />
          <div
            id="Top Content"
            className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
          >
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <div className="mx-4 flex flex-col justify-center rounded-md bg-peach-400 shadow-md">
                  <div className="m-4">
                    <div
                      className={`mb-7 text-center text-7xl ${inter.className} text-graphite-400`}
                    >
                      Danny
                    </div>
                    <div className="text-center font-semibold text-graphite-400">
                      Full-Stack Software Engineer. I work with beeps and boops.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                {linkCardData.map((data: any) => (
                  <LinkCard key={data.title} {...data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <About />
      </div>
      <div className="flex-1">
        <Portfolio />
      </div>
      <div className="flex-1">
        <Contact />
      </div>
    </>
  );
}
