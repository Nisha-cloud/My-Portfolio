import React from "react";
// import plantShop from "../assets/portfolio/Final-logo-plant-shop.png";
import inotebook from "../assets/portfolio/portfolio latpop and mobile.png";
// import navbar from "../assets/portfolio/navbarresp.png";
// import GamingProject from "../assets/portfolio/gamingProject.png";
import textUtils from "../assets/portfolio/TextUtils-latpop-and-mobile.png";
import bookstore from "../assets/portfolio/nisha-bookstore-portfolio.png"
import art from "../assets/portfolio/nisha-portfolio-art.png"
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookstore,
      live:"https://nisha-bookstore.netlify.app/",
      glink:"https://github.com/Nisha-cloud/Bookstore-Frontend"
    },
    {
      id: 2,
      src: art,
      live:"https://nisha-art-gallery.netlify.app/",
      glink:"https://github.com/Nisha-cloud/The-Art-Gallery"


    },
    {
      id: 3,
      src: inotebook,
      live:"https://nisha-dev-inotebook.netlify.app/",
      glink:"https://github.com/Nisha-cloud/iNotebook-frontend"

    },
    {
      id: 4,
      src: textUtils,
      live:"https://nisha-dev-textutils.netlify.app/",
      glink:"https://github.com/Nisha-cloud/Textutils"

    }
  ];

  return (
    <div
      name="works"
      className="bg-gradient-to-b to-white from-slate-400 w-full text-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-19 mt-10">

        

          <p className="text-4xl text-pink-600 font-bold inline border-b-4 border-gray-500">
            Works
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , live , glink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={live} rel="noreferrer" target="_blank">


                <button className=" px-6 py-3 m-2 duration-200 hover:scale-110 hover:pb-3" >
                 <strong>
                   See Live
                  </strong>
                </button>
                </a>
              


                <a href={glink} rel="noreferrer" target="_blank">


                  <button className=" px-6 py-3 m-2 duration-200 hover:scale-110 hover:pb-3" >
                    <strong>

                    Code
                    </strong>
                  </button>
                  </a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;