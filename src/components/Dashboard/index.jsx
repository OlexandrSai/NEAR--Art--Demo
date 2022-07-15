import LoadingOverlay from 'react-loading-overlay';
import React, { useCallback, useEffect, useState } from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { useToasts } from 'react-toast-notifications';
import { cutFilename } from '../../helper/errorHelper';
import { burnDesign, claimDesign, generateDesign, getTempDesign, getViewMyDesign, signOut } from '../../services/near';

export const Dashboard = () => {
  const { accountId, setAccountId, setApiError } = useStore();
  const [generatedDesign, setGeneratedDesign] = useState();
  const [myDesign, setMyDesign] = useState();
  const [inputSeed, setInputSeed] = useState();
  const [isLoading, setIsLoading] = useState();

  const { addToast } = useToasts();

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  const handleBurnDesign = async () => {
    setIsLoading(true);
    try {
      await burnDesign();
      setMyDesign(null);
    } catch (error) {
      const errorMessage = error?.kind?.ExecutionError;
      addToast(cutFilename(errorMessage), {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    }
    setIsLoading(false);
  };

  const handleGenerateDesign = async () => {
    setIsLoading(true);
    try {
      await generateDesign(accountId);
      const tempDesign = await getTempDesign(accountId);
      setGeneratedDesign(tempDesign);
      setInputSeed(tempDesign.seed);
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    }
    setIsLoading(false);
  };

  const handleClaimDesign = async () => {
    setIsLoading(true);
    try {
      await claimDesign(inputSeed);
      setMyDesign(await getViewMyDesign(accountId));
    } catch (error) {
      const errorMessage = error?.kind?.ExecutionError;
      addToast(cutFilename(errorMessage), {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    }
    setIsLoading(false);
  };

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const tempDesign = await getTempDesign(accountId);
      setGeneratedDesign(tempDesign);
      setInputSeed(tempDesign?.seed);
      if (!tempDesign) {
        await handleGenerateDesign(accountId);
      }
      setMyDesign(await getViewMyDesign(accountId));
      setIsLoading(false);
    } catch (error) {
      setApiError(error);
      setIsLoading(false);
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 30000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <LoadingOverlay active={isLoading} spinner className={isLoading ? 'loader' : ''} />
      <div className="flex">
        <div className="relative hidden lg:block dashboard-profile h-auto">
          <img src={require('../../assets/romb.png').default} alt="" className="absolute w-20 left-0 -top-6" />
          <img src={require('../../assets/square.png').default} alt="" className="absolute w-24 -left-6 top-72" />

          <div className="flex flex-col items-center">
            <Link to={routes.Home} className="flex items-center text-4xl font-bold mt-12">
              <img src={require('../../assets/near_logo_stack1.png').default} alt="" />
              <span className="w-0.5 h-11 bg-black ml-1 mr-2"></span>
              Arts
              <span className="w-2 h-2 rounded-full bg-black ml-1 -mt-5"></span>
            </Link>
            <div className="mt-12 w-20 h-20 rounded-full dashboard-profile-img flex justify-center items-center">
              <img src={require('../../assets/near_logo_stack2.png').default} alt="" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-400 text-xl font-bold mt-5">
              {accountId}
            </span>
            <button onClick={handleSignOut} className="flex items-center mt-6 font-bold text-base hover:text-gray-500">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                  fill="black"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>

        <div className="lg:ml-10 w-full">
          <nav>
            <div className="lg:hidden">
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                <Link to={routes.Home} className="flex items-center text-4xl font-bold ">
                  <img src={require('../../assets/near_logo_stack1.png').default} alt="" />
                  <span className="w-0.5 h-11 bg-black ml-1 mr-2" />
                  Arts
                  <span className="w-2 h-2 rounded-full bg-black ml-1 -mt-5" />
                </Link>

                <div className="mt-4 flex justify-between items-center w-full md:w-auto">
                  <div className="flex items-center md:mr-5">
                    <div className="w-10 h-10 md:w-16 md:h-16 p-2 rounded-full dashboard-profile-img flex justify-center items-center">
                      <img src={require('../../assets/near_logo_stack2.png').default} alt="" />
                    </div>
                    <span className="ml-4 md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-400">
                      {accountId}
                    </span>
                  </div>
                  <button onClick={handleSignOut} className="flex items-center font-bold text-sm hover:text-gray-500">
                    <svg
                      className="mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                        fill="black"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-7 lg:mt-0 flex flex-col md:flex-row items-center justify-between w-full">
              {generatedDesign ? (
                <div className="w-full flex items-center">
                  <input
                    type="text"
                    className="placeholder-current text-gray-500 focus:text-black dashboard-search outline-none pl-16 py-4 font-bold"
                    value={inputSeed}
                    onChange={(e) => setInputSeed(parseInt(e.target.value))}
                  />
                  <button
                    onClick={handleClaimDesign}
                    className="ml-6 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-600 transform active:scale-95"
                  >
                    Claim
                  </button>
                </div>
              ) : null}

              <button
                onClick={handleGenerateDesign}
                className="mt-7 md:mt-0 text-sm xl:text-base 2xl:text-lg generate-btn ml-auto bg-gradient-to-r from-purple-700 to-blue-400 rounded-full p-0.5 transform active:scale-95 duration-75"
              >
                <div className="bg-transparent hover:bg-gray-300 rounded-full duration-300">
                  <div className="w-full h-full font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-purple-700 hover:to-blue-400 py-4 duration-500">
                    Generate new art
                  </div>
                </div>
              </button>
            </div>
          </nav>

          {generatedDesign ? (
            <div className="relative mt-8 ownart-bg h-auto px-5 md:px-20 lg:px-16 xl:px-8 2xl:px-10 pt-9 pb-12">
              <div className="relative flex flex-col md:flex-row items-start md:items-end mt-9">
                <img
                  src={require('../../assets/romb.png').default}
                  alt=""
                  className="hidden md:block lg:hidden absolute w-16 top-0 right-24"
                />
                <img
                  src={require('../../assets/black.png').default}
                  alt=""
                  className="hidden md:block absolute w-16 lg:w-24 -top-4 right-0"
                />

                <h1 className=" font-bold text-3xl 2xl:text-4xl md:pl-10">Your last generated art</h1>
                <p className="float-left text-gray-500 mt-3 md:mt-0 md:ml-6 font-bold text-lg 2xl:text-2xl">
                  #{generatedDesign.seed}
                </p>
              </div>
              <pre className="text-xs w-full p-8">{generatedDesign.instructions}</pre>
            </div>
          ) : null}

          <div className="relative flex flex-col md:flex-row items-start md:items-end mt-9">
            <img
              src={require('../../assets/romb.png').default}
              alt=""
              className="hidden md:block lg:hidden absolute w-16 top-0 right-24"
            />
            <img
              src={require('../../assets/black.png').default}
              alt=""
              className="hidden md:block absolute w-16 lg:w-24 -top-4 right-0"
            />

            <h1 className=" font-bold text-3xl 2xl:text-4xl md:pl-10">My art in own</h1>
            <p className="float-left text-gray-500 mt-3 md:mt-0 md:ml-6 font-bold text-lg 2xl:text-2xl">
              here is your art
            </p>
          </div>

          <div className="relative mt-8 ownart-bg h-auto px-5 md:px-20 lg:px-16 xl:px-8 2xl:px-10 pt-9 pb-12">
            <img
              src={require('../../assets/square.png').default}
              alt=""
              className="hidden md:block lg:hidden w-24 absolute top-6 -left-12"
            />
            <img
              src={require('../../assets/vector.png').default}
              alt=""
              className="hidden md:block absolute w-24 -bottom-12 right-0"
            />

            {myDesign ? (
              <div>
                <div className="flex items-center justify-center xl:justify-start">
                  <button
                    onClick={handleBurnDesign}
                    className="hidden xl:flex text-xs 2xl:text-sm ml-9  items-center justify-center xl:w-52 2xl:w-72 burn-shadow font-bold bg-white text-red-400 hover:bg-red-400 hover:text-white rounded-full py-3 transform active:scale-95 duration-75"
                  >
                    <svg
                      className="mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                    >
                      <path
                        d="M22.3543 16.0802C22.3543 14.8669 23.9774 14.5453 24.408 15.6806C25.4496 18.4268 26.2085 20.8836 26.2085 22.2118C26.2085 26.4449 22.7574 29.8764 18.5002 29.8764C14.243 29.8764 10.7918 26.4449 10.7918 22.2118C10.7918 20.7848 11.6678 18.0552 12.8292 15.0634C14.3337 11.1879 15.0859 9.25014 16.0145 9.14576C16.3116 9.11237 16.6358 9.17241 16.9009 9.30996C17.7293 9.73981 17.7293 11.8533 17.7293 16.0802C17.7293 17.3501 18.7647 18.3796 20.0418 18.3796C21.319 18.3796 22.3543 17.3501 22.3543 16.0802Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16.9582 29.8761L16.5595 28.885C15.8536 27.1304 16.1507 25.1313 17.3363 23.6577V23.6577C17.9341 22.9147 19.0656 22.9147 19.6634 23.6577V23.6577C20.849 25.1313 21.1461 27.1304 20.4402 28.885L20.0415 29.8761"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    burn art
                  </button>
                </div>

                <div className="xl:hidden mt-8 flex flex-col md:flex-row items-center">
                  <div className="art-bg p-4 sm:p-8 md:p-4 w-full md:w-2/4 h-auto">
                    <pre style={{ fontSize: '7px', lineHeight: '9px' }}>{myDesign.instructions}</pre>
                  </div>

                  <div className="flex flex-col space-y-8 ml-4 w-full md:w-2/4 mt-6 md:mt-0">
                    <button
                      onClick={handleBurnDesign}
                      className="text-xs 2xl:text-sm flex items-center justify-center w-full burn-shadow font-bold bg-white text-red-400 hover:bg-red-400 hover:text-white rounded-full py-3 transform active:scale-95 duration-75"
                    >
                      <svg
                        className="mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="38"
                        viewBox="0 0 37 38"
                        fill="none"
                      >
                        <path
                          d="M22.3543 16.0802C22.3543 14.8669 23.9774 14.5453 24.408 15.6806C25.4496 18.4268 26.2085 20.8836 26.2085 22.2118C26.2085 26.4449 22.7574 29.8764 18.5002 29.8764C14.243 29.8764 10.7918 26.4449 10.7918 22.2118C10.7918 20.7848 11.6678 18.0552 12.8292 15.0634C14.3337 11.1879 15.0859 9.25014 16.0145 9.14576C16.3116 9.11237 16.6358 9.17241 16.9009 9.30996C17.7293 9.73981 17.7293 11.8533 17.7293 16.0802C17.7293 17.3501 18.7647 18.3796 20.0418 18.3796C21.319 18.3796 22.3543 17.3501 22.3543 16.0802Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16.9582 29.8761L16.5595 28.885C15.8536 27.1304 16.1507 25.1313 17.3363 23.6577V23.6577C17.9341 22.9147 19.0656 22.9147 19.6634 23.6577V23.6577C20.849 25.1313 21.1461 27.1304 20.4402 28.885L20.0415 29.8761"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      burn art
                    </button>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between space-x-20">
                  <div className="bg-gray-800 editor rounded-xl w-full">
                    <div className="w-full h-8 bg-gray-900 rounded-t-xl">
                      <p className="inline-block ml-12 align-middle pt-2 h-full px-4 bg-gray-700 text-gray-400 text-sm">
                        about.#{myDesign.seed}
                      </p>
                      <div className="flex">
                        <div className="grid grid-flow-row text-gray-500 text-sm m-3 md:m-4 gap-y-2">
                          <div>
                            <p>1</p>
                          </div>
                          <div>
                            <p>2</p>
                          </div>
                          <div>
                            <p>3</p>
                          </div>
                          <div>
                            <p>4</p>
                          </div>
                          <div>
                            <p>5</p>
                          </div>
                        </div>
                        <div className="grid grid-flow-row text-gray-500 text-sm m-3 md:m-4">
                          <div className="pb-1 ">
                            <p className="text-green-400">
                              .about <span className="text-gray-500">{'{'}</span>
                            </p>
                          </div>
                          <div className="py-1 border-l border-gray-600 pl-4 md:pl-8">
                            <p className="text-gray-600">{'/* basic info */'}</p>
                          </div>
                          <div className="flex py-1 border-l border-gray-600 pl-4 md:pl-8">
                            <p className="text-blue-200">
                              seed<span className="text-gray-600">:</span>
                            </p>
                            <p className="ml-4 text-purple-200">
                              {myDesign.seed}
                              <span className="text-gray-600">;</span>
                            </p>
                          </div>
                          <div className="flex py-1 border-l border-gray-600 pl-4 md:pl-8">
                            <p className="text-blue-200">
                              Owner<span className="text-gray-600">:</span>
                            </p>
                            <p className="ml-4 text-purple-200">
                              {accountId}
                              <span className="text-gray-600 -ml-2">;</span>
                            </p>
                          </div>
                          <div className="pt-1 ">
                            <p className="text-gray-500">{'}'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden xl:block">
                    <pre className="text-xs">{myDesign.instructions}</pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center xl:justify-start">
                <div className="flex ">
                  <h2 className="text-3xl 2xl:text-4xl font-bold">No arts yet... </h2>
                  <span className="block w-3 h-3  ml-2"> please claim</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
