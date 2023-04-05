import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navList: { title: string; href: string }[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <>
      <div className="flex flex-row">
        {navList.map((link: any) => (
          <div key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
