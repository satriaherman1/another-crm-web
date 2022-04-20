import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "pages/sign-in";

const SignInPage = React.lazy(() => import("pages/sign-in"));

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="sign-in" element={<SignInPage />}></Route>
      </Routes>
    </Router>
  );
}
