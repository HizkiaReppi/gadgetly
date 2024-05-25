import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Loading from "./components/atoms/Loading";
import Navbar from "./components/molecules/Navbar";

const Homepage = lazy(() => import("./pages/Homepage"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        {location.pathname.includes("auth") ||
        location.pathname.includes("legal") ? null : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="auth">
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="oauth/callback" element={<OAuthCallback />} />
          </Route>
          <Route path="legal">
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}
