import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/atoms/Button";
import InputField from "../components/molecules/InputField";
import registerIllustration from "../assets/auth/register-illustration.png";
import logoGadgetly from "../assets/logo/logo-1-black.png";
import axios from "../utils/axios";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/auth/register", data);
      const responseData = response.data;

      if (responseData.status === true) {
        localStorage.setItem("token", responseData.data.access_token);
        localStorage.setItem("refreshToken", responseData.data.refresh_token);
        navigate("/");
        reset();
      }
    } catch (error) {
      if (error.response) {
        const { data: errorData, error: responseError } = error.response.data;

        const errorMap = {
          Name: "name",
          Username: "username",
          Email: "email",
          Password: "password",
        };

        if (errorData) {
          errorData.forEach((error) => {
            const errorKey = Object.keys(errorMap).find((key) =>
              error.includes(key),
            );
            if (errorKey) {
              setError(errorMap[errorKey], {
                type: "manual",
                message: error,
              });
            }
          });
        }

        if (responseError) {
          const errorKey = Object.keys(errorMap).find((key) =>
            responseError.includes(key),
          );
          if (errorKey) {
            setError(errorMap[errorKey], {
              type: "manual",
              message: responseError,
            });
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
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
            placeholderWatch='Password'
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Mendaftarkan..." : "Daftar Sekarang"}
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
