import Link from 'next/link';
import React from 'react';
import pin from '../public/pin.png';
import phone from '../public/smartphone.png';
import Image from 'next/image';
import mail from '../public/mail.png';

export default function Contact() {
  return (
    <>
      <div className="flex flex-col bg-beige-400">
        <div
          id="contact"
          className="mb-7 mt-12 text-center text-6xl text-graphite-400"
        >
          LET'S CHAT!
        </div>
        <div className="mx-4 mb-20 flex flex-row justify-center text-left text-base">
          <div className="mb-4 flex flex-col justify-center rounded-md bg-peach-400">
            <div className="m-4 max-w-md">
              <div className="flex flex-row">
                <Image
                  src={pin}
                  width="14"
                  height="14"
                  alt="map pin"
                  className="ml-2 mr-4 mb-2"
                />
                <div>Seattle, Washington</div>
              </div>
              <div className="flex flex-row">
                <Image
                  src={phone}
                  height="32"
                  width="32"
                  alt="phone"
                  className="mb-1 mr-2"
                />
                <div className="mt-1">Phone number available upon request</div>
              </div>
              <div className="flex flex-row">
                <Image
                  src={mail}
                  height="32"
                  width="32"
                  alt="mail"
                  className="mr-2"
                />
                <Link
                  href="mailto:dannyhannyford@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mt-1"
                >
                  dannyhannyford@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
