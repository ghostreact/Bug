import { createTheme, NextUIProvider } from "@nextui-org/react";
// import "../styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NavbarComponent from "../Components/NavbarComponent";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      body: "#FFF",
      text: "#363537",
      toggleBorder: "#FFF",
      background: "#363537",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      body: "#363537",
      text: "#FAFAFA",
      toggleBorder: "#6B8096",
      background: "#999",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    // <NextThemesProvider
    //   defaultTheme="system"
    //   attribute="class"
    //   value={{
    //     light: lightTheme.className,
    //     dark: darkTheme.className,
    //   }}
    // >
    <NextUIProvider>
      {/* <NavbarComponent /> */}
      <Component {...pageProps} />
    </NextUIProvider>
    // </NextThemesProvider>
  );
}

export default MyApp;
