import Head from 'next/head';
import { Pacifico } from 'next/font/google';
import { linkCardData } from '@/components/LinkCard/Types';
import LinkCard from '@/components/LinkCard/LinkCard';
import Image from 'next/image';
import ocean from '../public/oceanBeach.webp';

const inter = Pacifico({ subsets: ['latin'], weight: '400' });

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Danny Hanford</title>
      </Head>
      <div className="h-screen">
        <div className="absolute -z-10">
          <Image src={ocean} priority quality={100} alt="beach" />
        </div>
        <div className="flex flex-col">
          <div className="mt-40 flex flex-row justify-center">
            <div className="flex flex-col justify-center rounded-md bg-peach-400 shadow-md">
              <div className="m-4">
                <div
                  className={`mb-7 text-center text-7xl ${inter.className} text-graphite-400`}
                >
                  Danny
                </div>
                <div className="text-center">
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
    </>
  );
}
