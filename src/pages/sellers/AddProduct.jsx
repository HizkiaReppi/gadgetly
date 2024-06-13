import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/atoms/Button";
import InputError from "../../components/atoms/InputError";
import Label from "../../components/atoms/Label";
import LoadingAnimation from "../../components/atoms/icons/LoadingAnimation";
import InputField from "../../components/molecules/InputField";
import TextareaField from "../../components/molecules/TextareaField";
import useAuth from "../../hooks/useAuth";
import axios from "../../utils/axios";

const AddProduct = () => {
  const user = useAuth(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorImage, setErrorImage] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get("/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Gagal memuat kategori.");
    }
  }, []);

  const fetchSeller = useCallback(async () => {
    try {
      await axios.get(`/sellers/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      const status = error.response?.status;
      if (status === 404) {
        navigate("/sellers/profile", {
          state: { path: location.pathname },
          replace: true,
        });
      }
    }
  }, [user, navigate, location.pathname]);

  useEffect(() => {
    if (!user?.token) {
      navigate("/auth/login", {
        state: { path: location.pathname },
        replace: true,
      });
      return;
    }

    fetchCategories();
    fetchSeller();
  }, [user, navigate, location.pathname, fetchCategories, fetchSeller]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("condition", data.condition);
    formData.append("color", data.color);
    formData.append("storage", `${data.storage} GB`);
    formData.append("ram", `${data.ram} GB`);
    formData.append("category_id", Number(data.category_id));
    formData.append("user_id", user.id);
    images.forEach((image) => {
      formData.append("images", image);
    });

    setIsLoading(true);

    try {
      const response = await axios.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 201) {
        reset();
        setImages([]);
        alert("Product added successfully!");
        navigate("/", {replace: true})
      }
    } catch (error) {
      handleFormError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormError = (error) => {
    const errorMapper = {
      Nama: "title",
      Penyimpanan: "storage",
      RAM: "ram",
      Deskripsi: "description",
      Harga: "price",
      Kondisi: "condition",
      Warna: "color",
      File: "images",
      Kategori: "category_id",
    };

    if (error.response?.data?.data) {
      const errorMessages = Array.isArray(error.response.data.data)
        ? error.response.data.data
        : [error.response.data.data];

      errorMessages.forEach((errorMessage) => {
        const errorKey = Object.keys(errorMapper).find((key) =>
          errorMessage.includes(key),
        );
        const field = errorMapper[errorKey];
        if (field === "images") {
          setErrorImage(errorMessage);
        } else {
          setError(field, {
            type: "manual",
            message: errorMessage,
          });
        }
      });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      setErrorImage("Maksimal 10 gambar yang dapat diunggah.");
    } else {
      setImages(files);
    }
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-10 my-20 md:mx-20 lg:mx-28">
      <div className="rounded-3xl bg-white px-6 py-8 shadow-md md:px-20 md:py-14">
        <h1 className="text-xl font-semibold text-primary-500 md:text-2xl lg:text-3xl">
          Jual Produk
        </h1>
        <h6 className="mt-2.5 text-base font-medium text-black md:text-lg lg:text-xl">
          Silahkan lengkapi data produk yang ingin anda jual
        </h6>
        <form
          className="mt-6 flex flex-col gap-y-4 md:gap-y-8 lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="flex w-full flex-col items-center justify-center">
            <p className="self-start text-sm text-black lg:text-base">
              Foto Produk
            </p>
            <label
              htmlFor="dropzone-file"
              className={`dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed ${errorImage ? "border-red-500" : "border-gray-300"}  bg-transparent hover:bg-gray-50`}
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {images.length > 0 ? (
                    images.map((file) => file.name).join(", ")
                  ) : (
                    <>
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </>
                  )}
                </p>
                <p className="text-center text-xs text-gray-500">
                  {images.length > 0
                    ? `Anda bisa mengunggah ${10 - images.length} foto lagi (optional)`
                    : ""}{" "}
                  <br />
                  PNG, JPG or JPEG (MAX. 2MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                {...register("images", { required: true })}
                className="hidden"
                name="images"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <div className="self-start">
              <InputError error={errorImage} />
            </div>

            {images.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-40 w-40 lg:h-80 lg:w-80"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`product-${index}`}
                      className="h-full w-full rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded bg-red-500 text-sm text-white"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <InputField
            label="Nama Produk"
            type="text"
            name="title"
            id="title"
            placeholder="Nama Produk"
            minLength={3}
            maxLength={100}
            register={register}
            errors={errors?.title}
            className="w-full"
            required
          />
          <div className="flex w-full flex-col gap-x-[50px] gap-y-4 md:flex-row md:gap-y-8">
            <div className="w-full">
              <Label htmlFor="condition" className="mb-1.5">
                Kondisi
              </Label>
              <select
                id="condition"
                className={`block w-full rounded-lg border bg-white px-6 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:px-[30px] lg:py-[15px] lg:text-base ${
                  errors.condition ? "border-red-500" : "border-gray-300"
                }`}
                {...register("condition", {
                  required: "Kondisi wajib dipilih",
                })}
              >
                <option defaultValue="">Pilih Kondisi</option>
                <option value="NORMAL">Normal</option>
                <option value="NEW">Baru</option>
                <option value="REFURBISHED">Pernah Diperbaiki</option>
              </select>
              <InputError error={errors?.condition} />
            </div>
            <div className="w-full">
              <Label htmlFor="category_id" className="mb-1.5">
                Merek
              </Label>
              <select
                id="category_id"
                className={`block w-full rounded-lg border bg-white px-6 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 lg:px-[30px] lg:py-[15px] lg:text-base ${
                  errors.category_id ? "border-red-500" : "border-gray-300"
                }`}
                {...register("category_id", {
                  required: "Kategori wajib dipilih",
                })}
              >
                <option defaultValue="">Pilih Merek Yang Tersedia</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <InputError error={errors?.category_id} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-x-[50px] gap-y-4 md:flex-row md:gap-y-8">
            <InputField
              label="Harga (dalam Rupiah)"
              type="number"
              name="price"
              id="price"
              placeholder="Harga"
              minLength={3}
              maxLength={30}
              register={register}
              errors={errors?.price}
              className="w-full"
              required
            />
            <InputField
              label="Warna"
              type="text"
              name="color"
              id="color"
              placeholder="Warna"
              minLength={2}
              maxLength={50}
              register={register}
              errors={errors?.color}
              className="w-full"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-x-[50px] gap-y-4 md:flex-row md:gap-y-8">
            <InputField
              label="Penyimpanan (dalam GB)"
              type="number"
              name="storage"
              id="storage"
              placeholder="Penyimpanan"
              minLength={2}
              maxLength={20}
              register={register}
              errors={errors?.storage}
              className="w-full"
              required
            />
            <InputField
              label="RAM (dalam GB)"
              type="number"
              name="ram"
              id="ram"
              placeholder="RAM"
              minLength={1}
              maxLength={20}
              register={register}
              errors={errors?.ram}
              className="w-full"
              required
            />
          </div>
          <TextareaField
            label="Deskripsi Produk (Opsional)"
            name="description"
            id="description"
            placeholder="Deskripsi Produk"
            maxLength={1000}
            register={register}
            errors={errors?.description}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading && <LoadingAnimation />}
            {isLoading === "loading" ? "Sedang Menambahkan..." : "Jual Produk"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
