"use client";  // Mark this as a Client Component

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import '../styles/tailwind-build.css';
import '../styles/index.css';

export default function Page() {
  useEffect(() => {
    const toggleHeader = () => {
      // Your toggle function here
    };

    document.getElementById('collapse-btn')?.addEventListener('click', toggleHeader);

    return () => {
      document.getElementById('collapse-btn')?.removeEventListener('click', toggleHeader);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SaaSy Dark</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/logo/logo.png" type="image/x-icon" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Title of the project" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/PaulleDemon" />
        <meta property="og:image" content="" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
          integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-black tw-text-white">
        <header className="tw-max-w-lg:tw-px-4 tw-max-w-lg:tw-mr-auto tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%] lg:tw-justify-around">
          <a className="tw-h-[50px] tw-w-[50px] tw-p-[4px]" href="">
            <img
              src="/logo/logo.png"
              alt="logo"
              className="tw-object tw-h-full tw-w-full"
            />
          </a>
          <div
                className="collapsible-header animated-collapse max-lg:tw-shadow-md"
                id="collapsed-header-items"
            >
                <div
                    className="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center"
                >
                    <a className="header-links" href=""> About us </a>
                    <a className="header-links" href="#pricing"> Pricing </a>
                    <a className="header-links" href=""> Solutions </a>
                    <a className="header-links" href=""> Features </a>
                    <a className="header-links" href=""> Company </a>
                </div>
                <div
                    className="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center"
                >
                    <a
                        href=""
                        aria-label="signup"
                        className="tw-rounded-full tw-bg-white tw-px-3 tw-py-2 tw-text-black tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
                    >
                        <span>Get started</span>
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <button
                className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-white lg:tw-hidden"
                onclick="toggleHeader()"
                aria-label="menu"
                id="collapse-btn"
            ></button>
        </header>

        <section
            className="hero-section tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-md:tw-mt-[50px]"
            id="hero-section"
        >
            <div
                className="tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
            >
                <div
                    className="tw-flex tw-flex-col tw-place-content-center tw-items-center"
                >
                    <div
                        className="reveal-up gradient-text tw-text-center tw-text-6xl tw-font-semibold tw-uppercase tw-leading-[80px] max-lg:tw-text-4xl max-md:tw-leading-snug"
                    >
                        <span className=""> Ship more </span>
                        <br />
                        <span className=""> with SaaS templates </span>
                    </div>
                    <div
                        className="reveal-up tw-mt-10 tw-max-w-[450px] tw-p-2 tw-text-center tw-text-gray-300 max-lg:tw-max-w-full"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        Lorem ipsum dolor sit amet.
                    </div>

                    <div
                        className="reveal-up tw-mt-10 tw-flex tw-place-items-center tw-gap-4"
                    >
                        <a
                            className="btn tw-bg-[#7e22ce85] tw-shadow-lg tw-shadow-primary tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            href=""
                        >
                            Get started
                        </a>
                        <a
                            className="btn tw-flex tw-gap-2 !tw-bg-black !tw-text-white tw-transition-colors tw-duration-[0.3s] hover:!tw-bg-white hover:!tw-text-black"
                            href=""
                        >
                            <i className="bi bi-play-circle-fill"></i>
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>

                <div
                    className="reveal-up tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center"
                    id="dashboard-container"
                >
                    <div
                        className="tw-relative tw-max-w-[80%] tw-overflow-hidden tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
                        id="dashboard"
                    >
                        <img
                            src="./images/home/dashboard.png"
                            alt="dashboard"
                            className="tw-h-full tw-w-full tw-object-cover tw-opacity-90 max-lg:tw-object-contain"
                        />
                    </div>

                    <div
                        className="hero-img-bg-grad tw-absolute tw-left-[20%] tw-top-5 tw-h-[200px] tw-w-[200px]"
                    ></div>
                </div>
            </div>
        </section>

        <section
            className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
        >
            <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">
                Trusted by brands you know
            </h2>

            <div className="reveal-up carousel-container">
                <div
                    className="carousel lg:w-place-content-center tw-mt-6 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2"
                >
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/google.svg"
                            alt="Google"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/microsoft.svg"
                            alt="Microsoft"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/adobe.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/airbnb.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/stripe.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./images/brand-logos/reddit.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            <div
                className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5"
            >
                <div
                    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <h2
                        className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-3xl"
                    >
                        Key benifits
                    </h2>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[80%] tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col"
                >
                    <div
                        className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]"
                    >
                        <div
                            className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]"
                        >
                            <div
                                className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2"
                            >
                                <i
                                    className="bi bi-rocket-takeoff-fill tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"
                                ></i>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                            <h3
                                className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl"
                            >
                                Minimize hours spent
                            </h3>
                            <div className="tw-text-gray-300">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]"
                    >
                        <div
                            className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-text-[150px]"
                        >
                            <div
                                className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2"
                            >
                                <i
                                    className="bi bi-layout-sidebar-inset tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"
                                ></i>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                            <h3
                                className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl"
                            >
                                Simple to use
                            </h3>
                            <div className="tw-text-gray-300">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </div>
                        </div>
                    </div>
                    <div
                        className="reveal-up tw-flex tw-h-[400px] tw-w-[450px] tw-flex-col tw-gap-3 tw-text-center max-md:tw-w-[320px]"
                    >
                        <div
                            className="border-gradient tw-h-[200px] tw-w-full tw-overflow-hidden max-md:tw-h-[150px]"
                        >
                            <div
                                className="tw-flex tw-h-full tw-w-full tw-place-content-center tw-place-items-end tw-p-2"
                            >
                                <i
                                    className="bi bi-lightning-charge-fill tw-text-7xl tw-text-gray-200 max-md:tw-text-5xl"
                                ></i>
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-4 tw-p-2">
                            <h3
                                className="tw-mt-8 tw-text-2xl tw-font-normal max-md:tw-text-xl"
                            >
                                Speed up your development
                            </h3>
                            <div className="tw-text-gray-300">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            <div
                className="tw-mt-8 tw-flex tw-flex-col tw-place-items-center tw-gap-5"
            >
                <div
                    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <h2
                        className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-2xl"
                    >
                        Features loved by everyone
                    </h2>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[80%] tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col"
                >
                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-globe"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Global
                            </h3>
                            <p className="tw-text-gray-300 max-md:tw-text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio
                            </p>
                        </div>
                    </div>

                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-bar-chart-fill"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Insights
                            </h3>
                            <p className="tw-text-gray-300 max-md:tw-text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio laboriosam
                            </p>
                        </div>
                    </div>

                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-cloud-fill"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Cloud backup
                            </h3>
                            <p className="tw-text-gray-300 max-md:tw-text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio laboriosam
                            </p>
                        </div>
                    </div>

                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-fingerprint"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                2 Factor Authentication
                            </h3>
                            <p className="tw-text-gray-300 max-md:tw-text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio laboriosam
                            </p>
                        </div>
                    </div>

                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-sliders"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                3rd party integrations
                            </h3>
                            <p className="tw-text-gray-300 max-md:tw-text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio laboriosam
                            </p>
                        </div>
                    </div>

                    <div
                        className="reveal-up tw-flex tw-h-[200px] tw-w-[450px] tw-gap-8 tw-rounded-xl tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 max-md:tw-w-[320px]"
                    >
                        <div className="tw-text-4xl max-md:tw-text-2xl">
                            <i className="bi bi-gear-fill"></i>
                        </div>

                        <div className="tw-flex tw-flex-col tw-gap-4">
                            <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Advanced configurations
                            </h3>
                            <p className="tw-text-sm tw-text-gray-300">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Animi quasi consequuntur,
                                distinctio laboriosam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            <div
                className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10"
            >
                <div className="tw-flex">
                    <div
                        className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]"
                    >
                        <img
                            src="./images/home/dash.png"
                            alt="coding"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-4"
                >
                    <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">
                        Simple to use plugins
                    </h3>

                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            AI powered
                        </h4>
                        <span
                            className="tw-text-lg tw-text-gray-300 max-md:tw-text-base"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            Locally run
                        </h4>
                        <span
                            className="tw-text-lg tw-text-gray-300 max-md:tw-text-base"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-relative tw-flex tw-min-h-[80vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-6"
        >
            <div
                className="reveal-up tw-flex tw-min-h-[60vh] tw-place-content-center tw-place-items-center tw-gap-[10%] max-lg:tw-flex-col max-lg:tw-gap-10"
            >
                <div
                    className="tw-mt-6 tw-flex tw-max-w-[450px] tw-flex-col tw-gap-4"
                >
                    <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">
                        Powerful Insights
                    </h3>

                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            Easy to use
                        </h4>
                        <span
                            className="tw-text-lg tw-text-gray-300 max-md:tw-text-base"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                    <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
                        <h4 className="tw-text-xl tw-font-medium">
                            <i className="bi bi-check-all !tw-text-2xl"></i>
                            All in one panel
                        </h4>
                        <span
                            className="tw-text-lg tw-text-gray-300 max-md:tw-text-base"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reiciendis commodi temporibus at? Aspernatur,
                            a necessitatibus?
                        </span>
                    </div>
                </div>

                <div className="tw-flex">
                    <div
                        className="tw-max-h-[650px] tw-max-w-[850px] tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-shadow-[rgba(170,49,233,0.44021358543417366)]"
                    >
                        <img
                            src="./images/home/insights.png"
                            alt="coding"
                            className="tw-h-full tw-w-full tw-object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]"
        >
            <h3
                className="tw-text-4xl tw-font-medium tw-text-gray-200 max-md:tw-text-2xl"
            >
                You're in good hands
            </h3>
            <div
                className="tw-mt-8 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3"
            >
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero.
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Trich B</div>
                            <div className="tw-text-gray-400">AMI, ceo</div>
                        </div>
                    </div>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore deserunt delectus consectetur enim cupiditate
                        ab nemo voluptas repellendus qui quas..
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">John B</div>
                            <div className="tw-text-gray-400">ABC, cto</div>
                        </div>
                    </div>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem, numquam.
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Mante</div>
                            <div className="tw-text-gray-400">xyz, cto</div>
                        </div>
                    </div>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Soluta, saepe illum. Dicta quisquam praesentium
                        quod!
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Lara</div>
                            <div className="tw-text-gray-400">xz, cto</div>
                        </div>
                    </div>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga accusamus non enim debitis rem neque beatae
                        explicabo corrupti porro ullam?
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">James</div>
                            <div className="tw-text-gray-400">app, cto</div>
                        </div>
                    </div>
                </div>
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-4 max-lg:tw-w-[320px]"
                >
                    <p className="tw-mt-4 tw-text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga accusamus non enim debitis rem neque beatae
                        explicabo corrupti porro ullam?
                    </p>

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Ron</div>
                            <div className="tw-text-gray-400">marketplace, cto</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-place-items-center tw-p-[2%]"
            id="pricing"
        >
            <h3
                className="tw-text-3xl tw-font-medium tw-text-gray-300 max-md:tw-text-2xl"
            >
                Simple pricing
            </h3>

            <div
                className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col"
            >
                <div
                    className="reveal-up tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$9</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
                <div
                    className="reveal-up tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-2 tw-border-primary tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$19</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
                <div
                    className="reveal-up tw-flex tw-w-[380px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]"
                >
                    <h3 className="">
                        <span className="tw-text-5xl tw-font-semibold">$49</span>
                        <span className="tw-text-2xl tw-text-gray-400">/mo</span>
                    </h3>
                    <p className="tw-mt-3 tw-text-center tw-text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <hr />
                    <ul
                        className="tw-mt-4 tw-flex tw-flex-col tw-gap-2 tw-text-center tw-text-lg tw-text-gray-200"
                    >
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <a
                        href="http://"
                        className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]"
                    >
                        Get now
                    </a>
                </div>
            </div>
        </section>

        <section
            className="tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%] max-lg:tw-p-3"
        >
            <h3
                className="reveal-up tw-text-center tw-text-4xl tw-font-medium max-md:tw-text-2xl"
            >
                Read our articles ✨
            </h3>

            <div
                className="reveal-up tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col"
            >
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[250px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./images/home/forest.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-[0.3s] hover:tw-scale-[1.04]"
                            srcset=""
                        />
                    </div>
                    <h3
                        className="tw-mt-2 tw-text-2xl tw-font-semibold max-md:tw-text-xl"
                    >
                        Article 1
                    </h3>
                    <p className="tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[250px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./images/home/mountain.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-[0.3s] hover:tw-scale-[1.04]"
                            srcset=""
                        />
                    </div>
                    <h3
                        className="tw-mt-2 tw-text-2xl tw-font-semibold max-md:tw-text-xl"
                    >
                        Article 2
                    </h3>
                    <p className="tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
                <a
                    href=""
                    className="tw-flex tw-h-[400px] tw-w-[400px] tw-flex-col tw-gap-4 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[300px]"
                >
                    <div
                        className="tw-h-[250px] tw-w-full tw-overflow-hidden tw-rounded-md"
                    >
                        <img
                            src="./images/home/photography.jpg"
                            alt="article image"
                            className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-[0.3s] hover:tw-scale-[1.04]"
                            srcset=""
                        />
                    </div>
                    <h3
                        className="tw-mt-2 tw-text-2xl tw-font-semibold max-md:tw-text-xl"
                    >
                        Article 3
                    </h3>
                    <p className="tw-text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab, explicabo!
                    </p>
                    <span>
                        <span>Learn more</span>
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </a>
            </div>
        </section>

        <section
            className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]"
        >
            <h3
                className="tw-text-4xl tw-font-medium tw-text-gray-300 max-md:tw-text-2xl"
            >
                Faq
            </h3>
            <div
                className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4"
            >
                <div
                    className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]"
                >
                    <div
                        className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
                    >
                        <span>What license are the source code?</span>
                        <i className="bi bi-plus tw-ml-auto tw-font-semibold"></i>
                    </div>
                    <div className="content">
                        All the templates are under MIT license
                    </div>
                </div>

                <div
                    className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]"
                >
                    <div
                        className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
                    >
                        <span>Can I request new templates?</span>
                        <i className="bi bi-plus tw-ml-auto tw-font-semibold"></i>
                    </div>
                    <div className="content">
                        you can request a generic template from
                        <a
                            href="https://github.com/PaulleDemon/landing-pages/issues/new/choose"
                            className="tw-underline"
                        >
                            Github template request</a
                        >. If you are looking for Custom design you should
                        <a href="https://tally.so/r/woO0Kx" className="tw-underline"
                            >contact here</a
                        >
                    </div>
                </div>

                <div
                    className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]"
                >
                    <div
                        className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
                    >
                        <span>I need a custom template?</span>
                        <i className="bi bi-plus tw-ml-auto tw-font-semibold"></i>
                    </div>
                    <div className="content">
                        If you are looking for Custom design you can
                        <a href="https://tally.so/r/woO0Kx" className="tw-underline"
                            >contact here</a
                        >
                    </div>
                </div>

                <div
                    className="faq tw-w-full tw-rounded-md tw-border-[1px] tw-border-solid tw-border-[#1F2123] tw-bg-[#080808]"
                >
                    <div
                        className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg"
                    >
                        <span>Will you add new templates?</span>
                        <i className="bi bi-plus tw-ml-auto tw-font-semibold"></i>
                    </div>
                    <div className="content">
                        New templates are added every Friday. So star ⭐️
                        <a
                            href="https://github.com/PaulleDemon/awesome-landing-pages"
                            className="tw-underline"
                            >Github</a
                        >
                    </div>
                </div>
            </div>

            <div
                className="tw-mt-20 tw-flex tw-flex-col tw-place-items-center tw-gap-4"
            >
                <div className="tw-text-3xl max-md:tw-text-2xl">
                    Still have questions?
                </div>
                <a
                    href="http://"
                    className="btn !tw-rounded-full !tw-border-[1px] !tw-border-solid !tw-border-gray-300 !tw-bg-transparent tw-transition-colors tw-duration-[0.3s]"
                >
                    Contact
                </a>
            </div>
        </section>

        <section
            className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%] max-md:tw-px-2"
        >
            <div
                className="tw-flex tw-w-full tw-max-w-[80%] tw-place-content-center tw-place-items-center tw-justify-between tw-gap-3 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-secondary tw-p-6 max-md:tw-max-w-full max-md:tw-flex-col"
            >
                <div className="tw-flex tw-flex-col tw-gap-1">
                    <h2 className="tw-text-3xl tw-text-gray-300 max-md:tw-text-xl">
                        Join our newsletter
                    </h2>
                    <div className="tw-text-gray-300">Lorem ipsum dolor sit.</div>
                </div>

                <div
                    className="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2"
                >
                    <input
                        type="email"
                        className="input tw-h-full tw-w-full !tw-border-gray-600 tw-p-2 tw-outline-none"
                        placeholder="email"
                    />
                    <a
                        className="btn !tw-rounded-full !tw-border-[1px] !tw-border-solid !tw-border-gray-300 !tw-bg-transparent tw-transition-colors tw-duration-[0.3s]"
                        href=""
                    >
                        Signup
                    </a>
                </div>
            </div>
        </section>

        <footer
            className="tw-mt-auto tw-flex tw-w-full tw-place-content-around tw-gap-3 tw-p-[5%] tw-px-[10%] tw-text-white max-md:tw-flex-col"
        >
            <div
                className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full"
            >
                <img
                    src="./logo/logo.png"
                    alt="logo"
                    srcset=""
                    className="tw-max-w-[120px]"
                />
                <div>
                    2 Lord Edward St,
                    <br />
                    D02 P634,
                    <br />
                    United States
                </div>
                <div className="tw-mt-3 tw-text-lg tw-font-semibold">Follow us</div>
                <div className="tw-flex tw-gap-4 tw-text-2xl">
                    <a href="" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a
                        href="https://twitter.com/@pauls_freeman"
                        aria-label="Twitter"
                    >
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com/"
                        className="tw-h-[40px] tw-w-[40px]"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>

            <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
                <h2 className="tw-text-3xl max-md:tw-text-xl">Company</h2>
                <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                    <a href="" className="footer-link">Use cases</a>
                    <a href="" className="footer-link">Integrations</a>
                    <a href="" className="footer-link">Change logs</a>
                    <a href="" className="footer-link">Blogs</a>
                    <a href="" className="footer-link">Contact</a>
                </div>
            </div>

            <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-gap-4">
                <h2 className="tw-text-3xl max-md:tw-text-xl">Resources</h2>
                <div className="tw-flex tw-flex-col tw-gap-3 max-md:tw-text-sm">
                    <a href="" className="footer-link">About us</a>
                    <a href="" className="footer-link">FAQ</a>
                    <a href="" className="footer-link">Contact Us</a>
                    <a href="" className="footer-link">Blogs</a>
                    <a href="" className="footer-link">Privacy policy</a>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
}
