import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navList: { title: string; href: string }[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/#about' },
    // { title: 'Portfolio', href: '/#portfolio' },
    { title: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <div className="flex-col">
        <div className="flex flex-grow flex-row drop-shadow-md">
          {navList.map((link: any) => (
            <div className="flex-grow bg-peach-400" key={link.title}>
              <Link href={link.href}>
                <div className="text-center font-semibold text-graphite-400 ">
                  <div className="m-1 rounded text-lg hover:backdrop-brightness-75">
                    {link.title}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
