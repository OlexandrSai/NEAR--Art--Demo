import React from 'react';
import { Home } from '../components/Home';
import { Footer } from '../components/Footer';
import { ChangeContract } from '../components/ChangeContract';

export const HomePage = () => {
  return (
    <section className="bg-gray-400 w-full ">
      <div className="w-full h-full linear-40 inner-shadow">
        <ChangeContract />
        <div className="p-4 md:px-10 md:py-14 lg:px-9 lg:py-8 xl:px-11 xl:py-12 2xl:px-12 2xl:py-14 mx-auto">
          <Home />
          <Footer />
        </div>
      </div>
    </section>
  );
};
