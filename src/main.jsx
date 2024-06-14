import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import { store } from "./redux/store";
import App from "./App.jsx";
import "flowbite";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position={"top-right"}
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme={"colored"}
          className={"w-80 px-3 py-5 text-base font-semibold"}
          progressClassName={"py-1 bg-white opacity-100 mt-2"}
          transition={Zoom}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
