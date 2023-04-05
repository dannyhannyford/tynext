import Head from 'next/head';
import { Inter } from 'next/font/google';
import { linkCardData } from '@/components/LinkCard/Types';
import LinkCard from '@/components/LinkCard/LinkCard';
import Image from 'next/image';
import ocean from '../public/oceanBeach.webp';

const inter = Inter({ subsets: ['latin'] });

// export async function getStaticProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

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
                <div className="text-center">Danny</div>
                <div className="text-center">
                  Full-Stack Software Engineer. I work with beeps and Boops.
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
