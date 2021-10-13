module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rightbar: "#F9F8F9",
        develbg: "#EAEEFD",
        naver: "#1FC700",
        kakao: "#FFEB00",
        google: "#D93025",
        bg1: "#383430",
        bg2: "#908D8E",
        bg3: "#40382F",
        bg4: "#DCDCDC",
      },

      transitionDelay: {
        2000: "2000ms",
      },

      fontFamily: {
        test: ["pretend-medium"],
        btest: ["pretend-bold"],
        ebtest: ["pretend-EBold"],
        eltest: ["pretend-ELight"],
        ltest: ["pretend-light"],
        rtest: ["pretend-Reg"],
        sbtest: ["pretend-SBold"],
        ttest: ["pretend-Thin"],
        quiche: ["quiche-Sans"],
      },

      backgroundImage: {
        universe:
          "url('https://media.discordapp.net/attachments/874660081160044625/890236396487442472/2021_09_22_23_00_1.gif')",
      },

      inset: {
        "9/10": "90%",
        "3/10": "30%",
        "4/10": "40%",
        "55/100": "55%",
        "6/10": "60%",
      },

      width: {
        0.25: "0.0625rem",
      },

      height: {
        0.25: "0.0625rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
