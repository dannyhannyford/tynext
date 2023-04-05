/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function About() {
  return (
    <>
      <div id="about" className="mx-4 mb-20 flex flex-row justify-center">
        <div className="flex flex-col justify-center rounded-md bg-peach-400">
          <div className="m-4 max-w-3xl">
            <div className="mb-4">
              Hi there! My name is Danny Hanford, I'm a software engineer with a
              passion for building robust, scalable backend systems. I've worked
              on a variety of challenging projects at Vizio and Amazon, from
              mapping TV configurations for Vizio’s large-scale IoT operations
              to modernizing Woot’s backend with Apollo GraphQL.
            </div>
            <div className="">
              Currently, I'm working towards my AWS Solutions Architect -
              Associate Certification, with the goal of designing better
              cloud-based architecture. Looking ahead, I'm excited to continue
              growing my skills in backend software engineering and eventually
              take on a leadership role in a fast-paced, innovative
              organization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
