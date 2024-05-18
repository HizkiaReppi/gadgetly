import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/atoms/Button";
import InputField from "../components/molecules/InputField";
import registerIllustration from "../assets/auth/register-illustration.png";
import logoGadgetly from "../assets/logo/logo-1-black.png";
import { registerUser } from "../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/");
      reset();
    }
  }, [authStatus, navigate, reset]);

  useEffect(() => {
    if (authError) {
      const errorMap = {
        Name: "name",
        Username: "username",
        Email: "email",
        Password: "password",
      };

      Object.entries(authError).forEach(([key, value]) => {
        const errorKey = errorMap[key];
        if (errorKey) {
          setError(errorKey, {
            type: "manual",
            message: value,
          });
        }
      });
    }
  }, [authError, setError]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <section className="container my-10 flex flex-col-reverse justify-center gap-32 md:flex-row lg:justify-between">
      <div className="w-full md:w-3/4 lg:w-full">
        <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
          Daftar Ke Gadgetly
        </h1>
        <h4 className="text-base md:text-lg lg:text-xl">
          Silahkan isi form berikut untuk melanjutkan.
        </h4>
        <form
          className="mt-6 flex flex-col gap-5 lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Nama Lengkap"
            type="text"
            name="name"
            id="name"
            placeholder="Nama Lengkap"
            minLength={3}
            maxLength={100}
            register={register}
            errors={errors?.name}
            required
          />
          <InputField
            label="Nama Pengguna"
            type="text"
            name="username"
            id="username"
            placeholder="Nama Pengguna"
            minLength={3}
            maxLength={50}
            register={register}
            errors={errors?.username}
            required
          />
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
          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Konfirmasi Kata Sandi"
            minLength={6}
            maxLength={255}
            register={register}
            errors={errors?.confirm_password}
            watch={watch("password")}
            placeholderWatch="Password"
            required
          />
          <Button type="submit" disabled={authStatus === "loading"}>
            {authStatus === "loading" && (
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
            {authStatus === "loading" ? "Mendaftarkan..." : "Daftar Sekarang"}
          </Button>
        </form>
        <hr className="my-4 h-1 w-full lg:my-5" />
        <div>
          <Link to="/" className="btn btn-outline w-full">
            <FcGoogle className="text-xl md:text-2xl lg:text-3xl" />
            Daftar Dengan Google
          </Link>
          <p className="mt-3 text-center text-sm md:text-base lg:mt-5">
            Sudah memiliki akun? <Link to="/auth/login">Masuk sekarang!</Link>
          </p>
        </div>
        <hr className="my-4 h-1 w-full lg:my-5" />
        <p className="mx-auto w-full text-center text-sm text-gray-800 md:w-[592px] md:text-base">
          Dengan membuat akun, saya setuju dengan{" "}
          <Link
            to="/legal/terms-and-conditions"
            className="text-gray-900 underline"
          >
            Syarat dan Ketentuan
          </Link>
          , dan{" "}
          <Link to="/legal/privacy-policy" className="text-gray-900 underline">
            Ketentuan Privasi
          </Link>{" "}
          Gadgetly.
        </p>
      </div>
      <div className="hidden rounded-xl border border-gray-300 bg-gray-50 px-10 py-14 shadow-lg lg:block">
        <img src={logoGadgetly} alt="Logo Gadgetly" className="w-48" />
        <h2 className="mt-9 w-96 text-3xl font-medium">
          Ayo gabung dengan Gadgetly!
        </h2>
        <img
          src={registerIllustration}
          alt="Login Illustration"
          className="mt-24"
        />
      </div>
    </section>
  );
};

export default RegisterPage;
