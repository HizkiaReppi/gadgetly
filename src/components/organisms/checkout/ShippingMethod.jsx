const ShippingMethod = ({ register }) => {
  const shippingMethod = [
    {
      id: "j&t",
      name: "J&T",
    },
    {
      id: "jne",
      name: "JNE",
    },
    {
      id: "ninja-express",
      name: "Ninja Express",
    },
    {
      id: "kirim-kurir",
      name: "Kirim Dengan Kurir",
    },
  ];

  const getShippingEstimation = (maxEstimation = 1) => {
    const today = new Date();
    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(threeDaysLater.getDate() + maxEstimation);

    return threeDaysLater.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <h2 className="text-xl">
        Pilihlah metode pengiriman yang akan anda gunakan!
      </h2>
      <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-5">
        {shippingMethod.map((data, index) => (
          <div key={index}>
            <input
              type="radio"
              id={data.id}
              value={data.id}
              className="peer hidden"
              {...register("shipping_method")}
              required
            />
            <label
              htmlFor={data.id}
              className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-black hover:border-primary-500 hover:text-primary-600 peer-checked:border-primary-500 peer-checked:text-primary-600"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">{data.name}</div>
                <div className="w-full">
                  Estimasi Dikirim Paling Lambat{" "}
                  {getShippingEstimation(index + 1)}
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShippingMethod;
