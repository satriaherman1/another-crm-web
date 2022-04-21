import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const SignInPage = React.lazy(() => import("./pages/sign-in"));
const SignUpPage = React.lazy(() => import("./pages/sign-up"));
const VerificationPage = React.lazy(() => import("./pages/verification"));
const HomePage = React.lazy(() => import("./pages/home"));

export default function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" caseSensitive element={<HomePage />}></Route>
        <Route path="sign-in" element={<SignInPage />}></Route>
        <Route path="sign-up" element={<SignUpPage />}></Route>
        <Route path="verification" element={<VerificationPage />}></Route>
      </Routes>
    </Suspense>
  );
}
