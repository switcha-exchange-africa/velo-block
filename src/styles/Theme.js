import React from "react";
import { ThemeProvider } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

// export const backgroundColor = theme("theme", {
//   light: "#fff",
//   dark: "#2d2d2d",
// });

// export const textColor = theme("theme", {
//   light: "#000",
//   dark: "#fff",
// });

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   font-family: sans-serif;
//   background-color: ${backgroundColor};
//   color: ${textColor};
// `;

export const darkTheme = {
//   body: "#363537",
//   text: "#FAFAFA",
//   toggleBorder: "#6B8096",
//   gradient: "linear-gradient(#091236, #1E215D)",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);

export default Theme;