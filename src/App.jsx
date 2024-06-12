import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loading from "./components/atoms/Loading";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";

const Homepage = lazy(() => import("./pages/Homepage"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SellerProfile = lazy(() => import("./pages/sellers/Profile"));
const SellerDashboard = lazy(() => import("./pages/sellers/SellerDashboard"));
const SellerAddProduct = lazy(() => import("./pages/sellers/AddProduct"));
const DetailProduct = lazy(() => import("./pages/products/DetailProduct"));
const Cart = lazy(() => import("./pages/products/Cart"));
const ShippingInformation = lazy(
  () => import("./pages/checkout/ShippingInformation"),
);
const CheckoutConfirmation = lazy(
  () => import("./pages/checkout/CheckoutConfirmation"),
);
const AllOrders = lazy(() => import("./pages/orders/AllOrders"));
const DetailOrder = lazy(() => import("./pages/orders/DetailOrder"));

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
          <Route path="cart" element={<Cart />} />
          <Route path="orders">
            <Route path="" element={<AllOrders />} />
            <Route path=":id" element={<DetailOrder />} />
          </Route>
          <Route path="checkout">
            <Route
              path="shipping-information"
              element={<ShippingInformation />}
            />
            <Route path="confirmation" element={<CheckoutConfirmation />} />
          </Route>
          <Route path="products">
            <Route path=":id" element={<DetailProduct />} />
          </Route>
          <Route path="auth">
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="oauth/callback" element={<OAuthCallback />} />
          </Route>
          <Route path="sellers">
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="profile" element={<SellerProfile />} />
            <Route path="selling" element={<SellerAddProduct />} />
          </Route>
          <Route path="legal">
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
        {location.pathname.includes("auth") ||
        location.pathname.includes("legal") ? null : (
          <Footer />
        )}
      </Suspense>
    </>
  );
}
