import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/home"));
const SignInPage = React.lazy(() => import("./pages/sign-in"));
const SignUpPage = React.lazy(() => import("./pages/sign-up"));
const VerificationPage = React.lazy(() => import("./pages/verification"));
const InvitePage = React.lazy(() => import("./pages/invite"));
const DashboardPage = React.lazy(() => import("./pages/dashboard"));
const OrderSummaryPage = React.lazy(() => import("./pages/order-summary"));
const SettingsPage = React.lazy(() => import("./pages/dashboard/settings"));

export default function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" caseSensitive element={<HomePage />}></Route>
        <Route path="sign-in" element={<SignInPage />}></Route>
        <Route path="sign-up" element={<SignUpPage />}></Route>
        <Route path="verification" element={<VerificationPage />}></Route>
        <Route path="invite" element={<InvitePage />}></Route>
        <Route path="dashboard" caseSensitive>
          <Route index element={<DashboardPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="order-summary" caseSensitive element={<OrderSummaryPage />}></Route>
      </Routes>
    </Suspense>
  );
}
