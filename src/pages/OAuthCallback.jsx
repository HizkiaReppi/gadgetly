import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveTokens } from "../redux/slice/auth/loginSlice";

const OAuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    if (accessToken && refreshToken) {
      dispatch(saveTokens({ accessToken, refreshToken }));
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, [dispatch, navigate]);

  return null;
};

export default OAuthCallback;
