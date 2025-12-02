import React, { useContext } from "react";
import { Link } from "react-router";
import {
  BiCameraMovie,
  BiHeart,
  BiListPlus,
  BiSearchAlt,
} from "react-icons/bi";
import AboutBanner from "../assets/about-banner.jpg";
import TrackListPng from "../assets/track-list.png";
import { Context } from "../Context/Context";
const About = () => {
  const { darkmode } = useContext(Context);
  console.log("darkMode ", darkmode);
  return (
    <>
      <div className="pt-20 pb-16 min-h-screen  ">
        <div
          style={{
            backgroundImage: darkmode
              ? `linear-gradient(rgba(27, 23, 23, 0.8), rgba(27, 23, 23, 1)), url(${AboutBanner})`
              : `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url(${AboutBanner})`,
            backgroundRepeat: "repeat-x",
          }}
          className="
      
      
      text-center px-4  mb-16 h-[400px] w-full  flex flex-col justify-center items-center "
        >
          <h1 className={` max-sm:text-2xl text-5xl font-bold mb-6 ${darkmode ? "text-primary" : "text-base-content"}  drop-shadow-lg`}>
            Welcome to MovieMaster Pro
          </h1>
          <p className=" max-sm:text-sm max-md:text-md text-xl text-base-content/80 leading-relaxed px-40 max-md:px-20">
            The ultimate destination for film enthusiasts to curate, organize,
            and discover their next cinematic adventure. We bring order to your
            movie world.
          </p>
        </div>

        <div className="container mx-auto px-6 mb-20">
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <div className="card-body text-center p-10">
              <div>
                <img
                  className="w-[200px] mx-auto rounded-full"
                  src={TrackListPng}
                  alt=""
                />
              </div>
              <h2 className="card-title text-3xl justify-center mb-4">
                Our Mission
              </h2>
              <p className="text-lg max-w-3xl mx-auto max-sm:text-sm">
                In a world overflowing with content, keeping track of what
                you've seen and what you want to watch can be a challenge.
                <strong> MovieMaster Pro</strong> was built with a simple goal:
                to provide a clean, intuitive space where movies aren't just
                listed, but celebrated. We empower you to build your personal
                library and share your passion for cinema.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card bg-base-100 hover:bg-primary hover:text-black group shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center ">
              <BiCameraMovie className="text-6xl text-primary group-hover:text-black mb-4" />
              <h3 className="card-title text-xl mb-2">My Collection</h3>
              <p>
                Build your digital shelf. Add movies you own or have watched to
                your personal collection to keep a permanent record of your
                viewing history.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 hover:bg-primary hover:text-black group shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <BiListPlus className="text-6xl group-hover:text-black text-secondary mb-4" />
              <h3 className="card-title text-xl mb-2">Smart Watchlist</h3>
              <p>
                Never forget a recommendation again. Save movies to your
                Wishlist so you always have an answer to the question, "What
                should we watch tonight?"
              </p>
            </div>
          </div>

          <div className="card bg-base-100 hover:bg-primary hover:text-black group shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <BiSearchAlt className="text-6xl group-hover:text-black text-accent mb-4" />
              <h3 className="card-title text-xl mb-2">Discovery</h3>
              <p>
                Explore our extensive database. Filter by genre, rating, or
                release year to find hidden gems or catch up on the latest
                blockbusters.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 hover:bg-primary hover:text-black group shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <BiHeart className="text-6xl group-hover:text-black text-error mb-4" />
              <h3 className="card-title text-xl mb-2">Community</h3>
              <p>
                Join a community of movie lovers. See top-rated films, track
                trending releases, and manage your contributions to the
                platform.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your collection?
          </h2>
          <Link
            to="/allmovies"
            className="btn btn-primary btn-lg btn-wide shadow-lg"
          >
            Browse Movies
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
