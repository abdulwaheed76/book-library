import React from "react";
import NavBar from "../components/global/navBar";
import RegisterUser from "../components/auth/register";
import { ThemeProvider } from "@emotion/react";
import theme from "../components/global/theme";
export default function Register() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <RegisterUser />
      </ThemeProvider>
    </>
  );
}
