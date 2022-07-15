import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-9 md:mt-12 lg:mt-5 xl:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
        <div className="pl-24 flex flex-col space-y-2">
          <a href="#" className="flex items-center text-4xl font-bold">
            <img src={require('../../assets/near_logo_stack1.png').default} alt="" />
            <span className="w-0.5 h-11 bg-black ml-1 mr-2"></span>
            Arts
            <span className="w-2 h-2 rounded-full bg-black ml-1 -mt-5"></span>
          </a>
          <a href="#" className="mt-2 font-semibold text-gray-500 hover:text-black ">
            info@nearartgenerator
          </a>
          <a href="#" className="font-semibold text-gray-500 hover:text-black">
            1-232-3434 (Main)
          </a>
        </div>
        <div className="pl-24">
          <p className="text-xl font-bold">About</p>
          <ul className="text-gray-500 font-semibold space-y-1 mt-2">
            <li>
              <a href="" className="hover:text-black">
                About contract
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                About NEAR{' '}
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                About NEAR ecosystem
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-24">
          <p className="text-xl font-bold">Community</p>
          <ul className="text-gray-500 font-semibold space-y-1 mt-2">
            <li>
              <a href="" className="hover:text-black">
                Community OS Wiki
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                Forum
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-24">
          <p className="text-xl font-bold">Help</p>
          <ul className="text-gray-500 font-semibold space-y-1 mt-2">
            <li>
              <a href="" className="hover:text-black">
                Support
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                info@nearanalytics
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                1-232-3434 (Main)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
