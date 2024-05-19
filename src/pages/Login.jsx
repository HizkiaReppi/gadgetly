import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/atoms/Button";
import InputField from "../components/molecules/InputField";
import loginIllustration from "../assets/auth/login-illustration.png";
import logoGadgetly from "../assets/logo/logo-1-black.png";
import { loginUser } from "../redux/slice/auth/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const loginStatus = useSelector((state) => state.login.status);
  const loginError = useSelector((state) => state.login.error);

  useEffect(() => {
    if (loginStatus === "succeeded") {
      navigate("/");
      reset();
    }
  }, [loginStatus, navigate, reset]);

  useEffect(() => {
    if (loginError) {
      if (Array.isArray(loginError)) {
        loginError.forEach((value) => {
          if (value.includes("Email")) {
            setError("email", {
              type: "manual",
              message: value,
            });
          } else {
            setError("password", {
              type: "manual",
              message: value,
            });
          }
        });
      } else {
        setError("email", {
          type: "manual",
          message: loginError,
        });
      }
    }
  }, [loginError, setError]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <section className="container my-10 flex flex-col-reverse justify-center gap-32 md:flex-row lg:items-center lg:justify-between">
      <div className="w-full md:w-3/4 lg:w-full">
        <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Masuk Ke Gadgetly
        </h1>
        <h4 className="text-base md:text-lg lg:text-xl">
          Silahkan masukkan informasi akun kamu.
        </h4>
        <form
          className="mt-6 flex flex-col gap-5 lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Alamat Email"
            type="email"
            name="email"
            id="email"
            placeholder="Alamat Email"
            minLength={3}
            maxLength={255}
            register={register}
            errors={errors?.email}
            required
          />
          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            id="password"
            placeholder="Kata Sandi"
            minLength={6}
            maxLength={255}
            register={register}
            errors={errors?.password}
            required
          />
          <Button type="submit" disabled={loginStatus === "loading"}>
            {loginStatus === "loading" && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline h-6 w-6 animate-spin fill-primary-500 text-gray-400"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {loginStatus === "loading" ? "Sedang Masuk..." : "Masuk Sekarang"}
          </Button>
        </form>
        <hr className="my-4 h-1 w-full lg:my-5" />
        <div>
          <Link to="/" className="btn btn-outline w-full">
            <FcGoogle className="text-xl md:text-2xl lg:text-3xl" />
            Masuk Dengan Google
          </Link>
          <p className="mt-3 text-center text-sm md:text-base lg:mt-5">
            Belum memiliki akun?{" "}
            <Link to="/auth/register">Daftar sekarang!</Link>
          </p>
        </div>
      </div>
      <div className="hidden rounded-xl border border-gray-300 bg-gray-50 px-10 py-14 shadow-lg lg:block">
        <img src={logoGadgetly} alt="Logo Gadgetly" className="w-48" />
        <h2 className="mt-9 w-96 text-3xl font-medium">
          Halo, Selamat Datang Kembali di Gadgetly!
        </h2>
        <img
          src={loginIllustration}
          alt="Login Illustration"
          className="mt-24"
        />
      </div>
    </section>
  );
};

export default LoginPage;
