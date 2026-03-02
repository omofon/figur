import React from "react";

function Hero() {
  return (
    <section className="container-padding flex flex-col justify-center gap-15 lg:flex-row sm:gap-20 lg:min-h-screen lg:pt-10">
      <div className="flex flex-col items-center lg:items-start mt-10 md:mt-20 text-center lg:text-start gap-8 lg:w-[60%]">
        {/* Badge */}
        <div className="flex gap-3 items-center py-3 px-4 rounded-full bg-mint border border-[#C4EAEB]">
          <span className="text-primary-navy text-xs font-bold md:font-medium whitespace-nowrap">
            More than a digital payment
          </span>
          <div
            className="hero__bolt-ctn rounded-full bg-teal inline-flex p-1"
            aria-hidden="true"
          >
            <img
              width="12"
              height="12"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/lightning-bolt--v1.png"
              alt=""
              role="presentation"
            />
          </div>
        </div>

        {/* Heading & Text */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Your financial lifestyle app
        </h1>
        <p className="text-sm">
          Experience seamless accessibility to pay bills effortlessly, own a
          Virtual Dollar Card, convert excess Airtime to Cash, and enjoy Awoof
          Data services.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-row flex-nowrap gap-3 justify-center lg:justify-start w-full">
          <a
            href="https://play.google.com/store/apps/details?id=com.figur.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-navy px-4 py-3 rounded-md flex flex-row items-center gap-2 hover:bg-navy-hover shrink-0 whitespace-nowrap"
          >
            <svg
              width="20"
              height="20"
              viewBox="-9 0 274 274"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M188.813 178.875c32.459-17.823 57.067-31.404 59.188-32.459 6.785-3.609 13.792-13.159 0-20.577-4.453-2.332-28.428-15.491-59.188-32.459l-42.642 43.064 42.642 42.431z"
                fill="#FFD900"
              />
              <path
                d="M146.171 136.444L10.394 273.287c3.187.422 6.785-.422 11.027-2.754 8.906-4.875 103.318-56.434 167.392-91.647l-42.642-42.442z"
                fill="#F43249"
              />
              <path
                d="M146.171 136.444l42.642-42.853S30.971 7.452 21.421 2.365C17.823.234 13.792-.399 10.183.234l135.988 136.21z"
                fill="#00EE76"
              />
              <path
                d="M146.171 136.444L10.183.234C4.664 1.511 0 6.386 0 16.358v240.805c0 9.127 3.609 15.701 10.394 16.335l135.777-137.054z"
                fill="#00D3FF"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs text-white leading-none">Get it on</span>
              <span className="text-sm text-white font-semibold">
                Google Play
              </span>
            </div>
          </a>
          <a
            href="https://apps.apple.com/app/figur/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-navy px-4 py-3 rounded-md flex flex-row items-center gap-2 hover:bg-navy-hover shrink-0 whitespace-nowrap"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 22.773 22.773"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.186 2.282 1.454 3.558 3.038 4.31z"
              />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs text-white leading-none">
                Download on the
              </span>
              <span className="text-sm text-white font-semibold">
                App Store
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Video Demonstration */}
      <div className="relative w-full max-w-105 aspect-3/4 rounded-3xl overflow-hidden bg-black self-center lg:self-start">
        <video
          controls
          autoPlay
          loop
          muted
          preload="metadata"
          aria-label="Figur app demonstration video"
          poster="/images/demo-img.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/demo.mp4" type="video/mp4" />
          <source src="/videos/demo.webm" type="video/webm" />
          Your browser doesn't support HTML5 video
        </video>
      </div>
    </section>
  );
}

export default Hero;
