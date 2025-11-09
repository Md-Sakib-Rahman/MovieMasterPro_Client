// tailwind.config.js

export default {
  // No 'content' array is needed in v4.1
  
  plugins: [
    require('daisyui'),
  ],

  // This is still 100% relevant
  daisyui: {
    themes: [
      {
        cupcake: {
          // Import all the default cupcake colors
          ...require("daisyui/src/theming/themes")["cupcake"],
          
          // Override just the primary button color
          "primary": "#ff0099", 
          "primary-content": "#ffffff", 
        },
      },
      {
        forest: {
          // Import all the default forest colors
          ...require("daisyui/src/theming/themes")["forest"],
          
          // Override just the primary button color
          "primary": "#1eb854", 
          "primary-content": "#1a242a",
        },
      },
    ],
  },
}