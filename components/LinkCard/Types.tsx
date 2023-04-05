import { StaticImageData } from 'next/image';
import dl from '../../public/dl.png';
import gh from '../../public/github-mark-white.png';
import li from '../../public/linkedin-24.png';

export const linkCardData: Array<CardData> = [
  {
    title: 'RESUME',
    link: 'https://danny-resume.s3.us-west-2.amazonaws.com/DannyHanford.pdf',
    image: dl,
    color: 'beige',
    textColor: 'text-graphite-400',
  },
  {
    title: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/dannyhanford/',
    image: li,
    color: 'seaBlue',
    textColor: 'text-white',
  },
  {
    title: 'GITHUB',
    link: 'https://github.com/dannyhannyford',
    image: gh,
    color: 'graphite',
    textColor: 'text-white',
  },
];

export interface CardData {
  title: string;
  link: string;
  image: string | StaticImageData;
  color: string;
  textColor: string;
}

export type ColorVar = {
  peach: string;
  graphite: string;
  seaBlue: string;
  beige: string;
};
