function Footer() {
  return (
    <footer className="container-padding bg-white flex flex-col gap-6 py-20">
      <div
        role="navigation"
        aria-label="Footer navigation"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-20 xl:gap-24"
      >
        {/* Brand and App Links */}
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <a href="/" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#0052FF"
              role="img"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="logo-title">figur logo</title>
              <path d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
            </svg>
            <span className="text-3xl font-bold text-primary-navy">figur</span>
          </a>
          <p className="text-light-gray text-xs leading-relaxed max-w-xs">
            You can feel confident that you're always in control of your money.
          </p>

          <div className="flex flex-row flex-nowrap gap-3 justify-center md:justify-start w-full">
            <a
              href="https://play.google.com/store/apps/details?id=com.figur.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-navy px-3 py-2 rounded-md flex flex-row items-center gap-2 hover:bg-navy-hover shrink-0 whitespace-nowrap"
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
                <span className="text-[8px] text-white leading-none">
                  Get it on
                </span>
                <span className="text-[10px] text-white font-semibold">
                  Google Play
                </span>
              </div>
            </a>
            <a
              href="https://apps.apple.com/app/figur/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-navy px-3 py-2 rounded-md flex flex-row items-center gap-2 hover:bg-navy-hover shrink-0 whitespace-nowrap"
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
                <span className="text-[8px] text-white leading-none">
                  Download on the
                </span>
                <span className="text-[10px] text-white font-semibold">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Links: Figur */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h5 className="font-bold text-sm">Figur</h5>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Individuals
            </a>
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Businesses
            </a>
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Vault
            </a>
          </div>
        </div>

        {/* Links: Legal */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h5 className="font-bold text-sm">Legal</h5>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Privacy policy
            </a>
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-primary-navy text-sm hover:underline">
              Faqs
            </a>
          </div>
        </div>

        {/* Links: Contact */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h5 className="font-bold text-sm">Contact Us</h5>
          <div className="flex flex-col gap-2">
            <p className="text-light-gray text-sm">
              Join our community and be the first to know new features and
              updates
            </p>
            <p className="text-primary-navy text-sm font-medium">
              0201 8891 734, 0700 0611 080
            </p>
            <a
              href="mailto:support@figur.africa"
              className="text-primary-navy text-sm hover:underline"
            >
              support@figur.africa
            </a>
            <div className="flex justify-center md:justify-start items-center gap-3 mt-2">
              {/* Social Icons - Reduced to 18px for a cleaner look */}
              {[
                {
                  name: "LinkedIn",
                  viewBox: "4 4 42 42",
                  d: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z",
                },
                {
                  name: "X",
                  viewBox: "4 4 22 22",
                  d: "M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z",
                },
                {
                  name: "Facebook",
                  viewBox: "4 4 22 22",
                  d: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z",
                },
                {
                  name: "Instagram",
                  viewBox: "3 3 24 24",
                  d: "M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z",
                },
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={icon.name}
                  className="text-[#63748a] hover:text-primary-navy transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox={icon.viewBox}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-80 hover:opacity-100"
                  >
                    <path d={icon.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-b-gray-700/40 my-4"></div>

      {/* Legal Footer Notes */}
      <div className="flex flex-col gap-3 max-w-xl">
        <p className="text-gray-600 text-sm leading-relaxed">
          &copy; 2026 Figur Partners Limited RC 1956603. All rights reserved
        </p>
        <p className="text-light-gray text-xs leading-relaxed">
          Figur is a financial technology company - it is not a bank and does
          not hold or claim to hold a banking license. The banking
          services/financial services offered on the Figur platform are provided
          by CBN-licensed banks and financial institutions.
        </p>
        <p className="text-light-gray text-xs leading-relaxed">
          All trademarks and brand names belong to their respective owners. Use
          of these trademarks and brand names do not represent endorsement by or
          association with Figur Partners Limited. Google Play and the Google
          Play logo are registered trademarks of Google LLC. Apple, the Apple
          logo, and iPhone are registered trademarks of Apple Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
