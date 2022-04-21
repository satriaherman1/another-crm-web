import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import SignUpPage from "./pages/sign-up";

const SignInPage = React.lazy(() => import("./pages/sign-in"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" caseSensitive element={<HomePage />}></Route>
      <Route path="sign-in" element={<SignInPage />}></Route>
      <Route path="sign-up" element={<SignUpPage />}></Route>
    </Routes>
  );
}
