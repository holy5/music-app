module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindark: "#171717",
        shimmerdark: "#272727",
        shimmerdark2: "#1E1E1E",
        cherryred: "#EE4950",
        dimred: "##F3777D",
        text: "#FFFFFF",
        gray: "#959D99",
        blackblue: "#2E3A59",
        dimwhite: "#AFB6B3",
        border: "#7A8580",
      },
      boxShadow: {
        vignette: "0 0 300px rgba(0,0,0,0.9) inset",
      },
    },
    plugins: [],
  },
};
