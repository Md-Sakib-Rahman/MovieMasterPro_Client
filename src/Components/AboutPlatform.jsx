
import React from 'react';
import splitStringUsingRegex from '../Utils/splitStringUsingRegex';
import {motion } from "motion/react"
const AboutPlatform = () => {
  const firstPara= "Welcome to MovieMaster Pro, your all-in-one solution for movie management. Our platform is designed for film enthusiasts to effortlessly browse a vast library, manage their personal favorites, and organize movies into custom collections."
  const secondPara= "Discover new titles with advanced filtering, track your watchlist, and build a beautiful, personal database of every movie you love. Whether you're a casual viewer or a dedicated collector, MovieMaster Pro brings your entire movie world together in one simple, elegant interface."
  const firstParaSplit = splitStringUsingRegex(firstPara)
  const secondParaSplit = splitStringUsingRegex(secondPara)
  const charVariants = {
      hidden: {opacity: 0},
      reveal: {opacity: 1},
  }
  return (
    <div className="py-16 bg-base-200"> 
      <div className="container mx-auto max-w-4xl px-4">
        
        
        <h2 className="text-3xl font-bold text-center mb-8">
          🎬 About MovieMaster Pro
        </h2>
        
        
        <motion.p className="text-center text-lg mb-4"
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: 0.005}}
          viewport={{ once: true }}
        >
          {
            firstParaSplit.map((char, index) => {
              return (
                <motion.span
                key={index}
                transition={{duration: 0.5}}
                variants={charVariants}
              >{char}</motion.span>
              )
            })
          }
          
        </motion.p>
        
          <motion.p className="text-center text-lg mb-4"
          initial="hidden"
          whileInView="reveal"
          transition={{staggerChildren: 0.005, delayChildren: 1}}
          viewport={{ once: true }}
        >
          {
            secondParaSplit.map((char, index) => {
              return (
                <motion.span
                key={index}
                transition={{duration: 0.5}}
                variants={charVariants}
                
              >{char}</motion.span>
              )
            })
          }
          
        </motion.p>
        

      </div>
    </div>
  );
};

export default AboutPlatform;