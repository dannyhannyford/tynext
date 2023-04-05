import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-row justify-center">
        <div className="flex flex-col justify-center rounded-md bg-peach-400">
          <div className="m-4 max-w-md">
            <div>Seattle, Washington</div>
            <div>Phone number available upon request</div>
            <Link href="mailto:dannyhannyford@gmail.com">
              dannyhannyford@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
