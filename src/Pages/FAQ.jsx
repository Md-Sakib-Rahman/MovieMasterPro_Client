import React, { useContext } from "react";
import { BiCameraMovie, BiListPlus, BiSupport, BiSearch } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { Context } from "../Context/Context";
import AboutBanner from "../assets/about-banner.jpg";
const FAQ = () => {
  const {darkmode} = useContext(Context)  
  return (
    <div
    style={{
                backgroundImage: darkmode
                  ? `linear-gradient(rgba(27, 23, 23, 0.8), rgba(27, 23, 23, 1)), url(${AboutBanner})`
                  : `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url(${AboutBanner})`,
                backgroundRepeat: "repeat-x",
              }}
    className="pt-24 pb-16 min-h-screen bg-base-200">
      
      
      <div className="text-center px-4 max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-base-content">
          How can we help?
        </h1>
        
        
        <div className="relative max-w-lg mx-auto">
          <input 
            type="text" 
            placeholder="Search for answers..." 
            className="input input-bordered w-full pl-12 py-6 bg-base-100 shadow-lg focus:outline-none focus:border-primary" 
          />
          <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-500" />
        </div>
      </div>

      
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          
          <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/50">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-base-200 rounded-full mb-2">
                <FaUserCog className="text-3xl text-primary" />
              </div>
              <h3 className="card-title text-lg">Account & Login</h3>
              <p className="text-sm text-base-content/70">Managing your profile and settings</p>
            </div>
          </div>

          
          <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/50">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-base-200 rounded-full mb-2">
                <BiCameraMovie className="text-3xl text-secondary" />
              </div>
              <h3 className="card-title text-lg">My Collection</h3>
              <p className="text-sm text-base-content/70">Adding, editing, and deleting movies</p>
            </div>
          </div>

          
          <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/50">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-base-200 rounded-full mb-2">
                <BiListPlus className="text-3xl text-accent" />
              </div>
              <h3 className="card-title text-lg">Watchlist Feature</h3>
              <p className="text-sm text-base-content/70">Saving movies for later viewing</p>
            </div>
          </div>

          
          <div className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/50">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-base-200 rounded-full mb-2">
                <BiSupport className="text-3xl text-error" />
              </div>
              <h3 className="card-title text-lg">Troubleshooting</h3>
              <p className="text-sm text-base-content/70">Bugs, errors, and platform issues</p>
            </div>
          </div>

        </div>
      </div>

      
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="join join-vertical w-full">
          
          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion-4" defaultChecked /> 
            <div className="collapse-title text-xl font-medium">
              How do I add a movie to My Collection?
            </div>
            <div className="collapse-content">
              <p>Navigate to the "Add Movie" page from the menu. Fill in the required details like title, genre, and poster URL, then click Submit. The movie will appear in "My Collection" immediately.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              Can I delete a movie I didn't create?
            </div>
            <div className="collapse-content">
              <p>No. MovieMaster Pro uses a secure ownership system. You can only update or delete movies that were added via your specific account credentials.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              What is the difference between Collection and Watchlist?
            </div>
            <div className="collapse-content">
              <p>"My Collection" represents movies you have personally contributed to the database. The "Watchlist" is for saving movies (created by anyone) that you intend to watch later.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium">
              How do I enable Dark Mode?
            </div>
            <div className="collapse-content">
              <p>You can toggle between the "Cupcake" (Light) and "Forest" (Dark) themes using the switch located in the navigation bar.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FAQ;