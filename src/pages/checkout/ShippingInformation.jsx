import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/atoms/Button";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import ProfileInformation from "../../components/organisms/checkout/ProfileInformation";
import AddressInformation from "../../components/organisms/checkout/AddressInformation";
import ShippingMethod from "../../components/organisms/checkout/ShippingMethod";

const ShippingInformation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, control } = useForm();

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Checkout", to: null },
    { label: "Informasi Pengiriman", to: null },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-7">
        <h1 className="text-3xl font-semibold text-primary-500">
          Informasi Pengiriman
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="mt-5">
            <ProfileInformation register={register} setValue={setValue} />
          </section>
          <section className="mt-10">
            <AddressInformation
              register={register}
              setValue={setValue}
              control={control}
            />
          </section>
          <section className="mt-10">
            <ShippingMethod register={register} setValue={setValue} />
          </section>
          <div className="mt-10 text-center">
            <Button type="submit" disabled={isLoading}>
              Selanjutnya
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShippingInformation;
