import React from 'react';

export default function About() {
  return (
    <>
      <div id="about" className="mb-20 flex flex-row justify-center">
        <div className="flex flex-col justify-center rounded-md bg-peach-400">
          <div className="m-4 max-w-3xl">
            <div className="mb-4">
              Hi there! My name is Danny Hanford, and I'm a full stack software
              engineer with a passion for building robust, scalable backend
              systems. With two years of experience at Amazon and Vizio, I've
              worked on a variety of challenging projects, from modernizing
              Woot’s backend with Apollo GraphQL to mapping TV configurations
              for Vizio’s large-scale IoT operations.
            </div>
            <div className="">
              Currently, I'm working towards my AWS Solutions Architect -
              Associate Certification, with the goal of eventually taking on a
              leadership role in cloud-based architecture. Looking ahead, I'm
              excited to continue growing my skills in backend software
              engineering and eventually take on a leadership role in a
              fast-paced, innovative organization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
