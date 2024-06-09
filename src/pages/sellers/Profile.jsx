import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import InputField from "../../components/molecules/InputField";
import TextareaField from "../../components/molecules/TextareaField";
import Button from "../../components/atoms/Button";
import axios from "../../utils/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const ProfileSeller = () => {
  const user = useAuth(true);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const redirectPath = location.state?.path || "/sellers";

  if (!user) {
    navigate("/auth/login", {
      state: {
        path: location.pathname,
      },
      replace: true,
    });
  }

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`/sellers/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const responseData = response.data;
        setUserProfile(responseData.data);
        reset(responseData.data);
      } catch (error) {
        setUserProfile({});
      }
    };

    fetchSeller();
  }, [reset, user.id, user.token]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`/sellers`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (res.status === 201) {
        navigate(redirectPath, { replace: true });
        reset();
      }
    } catch (error) {
      toast.error("Terjadi kesalahan!");
      const errorMapper = {
        Domisili: "domicile",
        Alamat: "address",
        Nomor: "phone",
      };

      if (error.response.data.data) {
        const errorMessages = Array.isArray(error.response.data.data)
          ? error.response.data.data
          : [error.response.data.data];

        errorMessages.forEach((errorMessage) => {
          const errorKey = Object.keys(errorMapper).find((key) =>
            errorMessage.includes(key),
          );
          const field = errorKey ? errorMapper[errorKey] : "password";

          setError(field, {
            type: "manual",
            message: errorMessage,
          });

          toast.error(`Error di ${field}: ${errorMessage}`);
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-10 my-20 md:mx-20 lg:mx-28">
      <div className="rounded-3xl bg-white px-6 py-8 shadow-md md:px-20 md:py-14">
        <h1 className="text-xl font-semibold text-primary-500 md:text-2xl lg:text-3xl">
          Profil Penjual
        </h1>
        <h6 className="mt-2.5 text-base font-medium text-black md:text-lg lg:text-xl">
          Silahkan lengkapi data diri anda agar dapat berjualan
        </h6>
        <form
          className="mt-6 flex flex-col gap-y-4 md:gap-y-8 lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col gap-x-[50px] gap-y-4 md:flex-row md:gap-y-8">
            <InputField
              label="No HP"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Nomor HP"
              minLength={10}
              maxLength={15}
              register={register}
              errors={errors?.phone}
              className="w-full"
              defaultValue={userProfile.phone}
              required
            />
            <InputField
              label="Domisili"
              type="text"
              name="domicile"
              id="domicile"
              placeholder="Domisili"
              minLength={1}
              maxLength={255}
              register={register}
              errors={errors?.domicile}
              className="w-full"
              defaultValue={userProfile.domicile}
              required
            />
          </div>
          <TextareaField
            label="Alamat Lengkap"
            type="text"
            name="address"
            id="address"
            placeholder="Alamat Lengkap"
            minLength={1}
            maxLength={255}
            register={register}
            errors={errors?.address}
            defaultValue={userProfile.address}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
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
            {isLoading === "loading"
              ? "Melengkapi Profil..."
              : "Lengkapi Profil"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSeller;
