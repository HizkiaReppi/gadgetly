import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Loading from "./components/atoms/Loading";

const Homepage = lazy(() => import("./pages/Homepage"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="auth">
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}
