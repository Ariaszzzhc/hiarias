import { defineConfig } from "http://esm.sh/windicss@3.4.0/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        wgreen: {
          DEFAULT: "#C6D57E",
          50: "#C6D57E",
        },
        wred: {
          DEFAULT: "#D57E7E",
          50: "#D57E7E",
        },
        wblue: {
          DEFAULT: "#A2CDCD",
          50: "#A2CDCD",
        },
        wyellow: {
          DEFAULT: "#FFE1AF",
          50: "#FFE1AF",
        },
      },
    },
  },
});
