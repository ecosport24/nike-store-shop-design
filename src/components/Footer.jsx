import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="text-slate-200 nike-container">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((value, index) => (
              <div key={index} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {value.title}
                </h1>
              </div>
            ))}
            {links.map((value, index) => (
              <ul key={index} className="grid items-center gap-1">
                {value.map((item, index) => (
                  <li key={index} className="text-sm sm:text-xs">
                    {item.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup>All
              Reserved Rights 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
