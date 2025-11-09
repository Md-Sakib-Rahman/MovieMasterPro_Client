
import React from 'react';

const AboutPlatform = () => {
  return (
    <div className="py-16 bg-base-200"> {/* Uses a light background color */}
      <div className="container mx-auto max-w-4xl px-4">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          🎬 About MovieMaster Pro
        </h2>
        
        {/* Content Paragraphs */}
        <p className="text-center text-lg mb-4">
          Welcome to <strong>MovieMaster Pro</strong>, your all-in-one solution for movie management. Our platform is designed for film enthusiasts to effortlessly browse a vast library, manage their personal favorites, and organize movies into custom collections.
        </p>
        <p className="text-center text-lg">
          Discover new titles with advanced filtering, track your watchlist, and build a beautiful, personal database of every movie you love. Whether you're a casual viewer or a dedicated collector, MovieMaster Pro brings your entire movie world together in one simple, elegant interface.
        </p>

      </div>
    </div>
  );
};

export default AboutPlatform;