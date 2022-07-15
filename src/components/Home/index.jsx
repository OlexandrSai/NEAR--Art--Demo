import React from 'react';
import { useStore } from '../../store';
import { signIn } from '../../services/near';
import { routes } from '../../router/routes';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

export const Home = () => {
  const { accountId, setApiError } = useStore();

  const navigate = useNavigate();

  const { addToast } = useToasts();

  const handleSignIn = async () => {
    if (accountId) {
      navigate(routes.Dashboard);
    } else {
      const mainUrl = process.env.REACT_APP_MAIN_URL;
      const successUrl = mainUrl ? mainUrl + routes.Dashboard : undefined;
      try {
        await signIn(successUrl);
      } catch (error) {
        setApiError(error);
        addToast(error.message, {
          appearance: 'error',
          autoDismiss: true,
          autoDismissTimeout: 30000,
        });
      }
    }
  };

  return (
    <div className="relative border-card w-full border-2 border-white z-0">
      <img
        src={require('../../assets/2.png').default}
        alt=""
        className="hidden md:block absolute bottom-96 lg:bottom-6 -left-14 pointer-events-none"
      />
      <img
        src={require('../../assets/dots.png').default}
        alt=""
        className="hidden md:block absolute -top-14 -right-8 xl:right-14"
      />

      <div className="flex flex-col lg:flex-row px-4 md:px-16 h-card">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <a href="#" className="flex items-center mt-7 md:mt-16 lg:mt-8 xl:mt-14 2xl:mt-20 text-4xl font-bold">
              <img src={require('../../assets/near_logo_stack1.png').default} alt="" />
              <span className="w-0.5 h-11 bg-black ml-1 mr-2" />
              Arts
              <span className="w-2 h-2 rounded-full bg-black ml-1 -mt-5" />
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h1 className="z-50 relative mt-4 md:mt-6 xl:mt-7 text-2xl md:text-3xl 2xl:text-6xl font-bold leading-8 md:leading-10 2xl:leading-tight text-center lg:text-left">
              This demo allows you <br /> to
              <span className="absolute hidden lg:inline-block title-bg lg:mx-3 2xl:mx-5 rounded-2xl">
                generate art
              </span>
              <span className="inline-block lg:hidden">generate art</span>
            </h1>

            <p className="offer-text text-xs 2xl:text-base mt-8 md:mt-11 lg:mt-7 2xl:mt-11 bg-gradient-to-b from-black to-gray-400 text-transparent bg-clip-text text-center lg:text-left">
              Consectetur platea ac in sapien sollicitudin massa. Congue vestibulum urna sapien quis adipiscing maecenas
              sed. Imperdiet erat blandit duis lacus lectus eu, tortor luctus. Leo ultrices diam risus porta mauris nisl
              euismod libero etiam. Diam tincidunt fusce cum massa at sapien volutpat nunc. Morbi tincidunt urna, mattis
              sagittis auctor elementum consectetur bibendum.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-8 lg:mt-6 2xl:mt-11">
            <button onClick={handleSignIn}>
              <div className="bg-gray-300 offer-btn rounded-full">
                <div className="flex h-full items-center justify-center ">
                  <p className="font-bold text-sm 2xl:text-2xl">
                    Login with
                    <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-black hover:from-blue-500 to-black hover:to-blue-400">
                      NEAR
                    </span>
                  </p>
                </div>
              </div>
            </button>
            <div className="relative p-12 mt-8 lg:mt-0 lg:ml-8 ">
              <img
                src={require('../../assets/mark.png').default}
                alt=""
                className="absolute -top-4 left-3 lg:hidden xl:block"
              />
              <div className="relative z-10 ">
                <p className="text-sm xl:text-base tracking-tighter">
                  <b>Login for see more</b> <br />
                  here can be your art
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 ">
          <div className="relative flex items-center justify-center mt-8">
            <img
              src={require('../../assets/square.png').default}
              alt=""
              className="w-24 lg:w-32 absolute top-6 md:-top-10 left-24"
            />
            <img
              src={require('../../assets/black.png').default}
              alt=""
              className="w-24 lg:w-32 absolute top-24 right-20"
            />

            <img
              src={require('../../assets/white.png').default}
              alt=""
              className="w-24 lg:w-32 absolute -bottom-12 left-12"
            />
            <img
              src={require('../../assets/romb.png').default}
              alt=""
              className="w-24 lg:w-32 absolute -bottom-16 md:-bottom-48 left-56"
            />
            <img
              src={require('../../assets/vector.png').default}
              alt=""
              className="w-24 lg:w-32 absolute -bottom-12 md:-bottom-36 right-0 md:right-24"
            />

            <div className="art-bg w-art transform rotate-6">
              <div className="p-2 md:p-4 lg:p-3 xl:p-4">
                <img src={require('../../assets/art-img.png').default} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="art-bg w-art transform -rotate-12 -ml-6 mt-64">
              <div className="p-2 md:p-4 lg:p-3 xl:p-4">
                <img src={require('../../assets/art-img.png').default} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
