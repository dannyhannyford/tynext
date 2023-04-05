import React from 'react';
import Link from 'next/link';
import type { LinkCardData, ColorVar } from '../Types';
import Image from 'next/image';

export default function LinkCard(props: LinkCardData) {
  const colorVariants: ColorVar = {
    peach: 'bg-peach-400',
    graphite: 'bg-graphite-400',
    seaBlue: 'bg-seaBlue-400',
    beige: 'bg-beige-400',
  };

  return (
    <>
      <Link
        className={`${props.textColor}`}
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <button
          type="button"
          className={`relative m-2 rounded-md shadow-md ${
            colorVariants[props.color as keyof ColorVar]
          } `}
        >
          <div className="m-0.5 flex flex-row rounded-md">
            <Image
              src={props.image}
              width="24"
              height="24"
              alt={`${props.title} image`}
              className="m-1"
            />
            <div className="m-1 font-medium">{props.title}</div>
            <div className="absolute inset-0 rounded-md hover:backdrop-brightness-75"></div>
          </div>
        </button>
      </Link>
    </>
  );
}
