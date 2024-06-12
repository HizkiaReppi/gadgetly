import Breadcrumb from "../../components/atoms/Breadcrumb";
import { formatToRp, toCapitalizeCase } from "../../utils/format";
import productImage from "../../assets/homepage/product-image.png";
import { Link } from "react-router-dom";
import IconButton from "../../components/atoms/IconButton";
import { FaEye } from "react-icons/fa6";

const AllOrders = () => {
  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Pesanan", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-primary-500">
          Semua Pesanan
        </h1>
        <section className="mt-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="mb-4 h-16 rounded-xl border-b-2 border-b-black px-2 py-5">
                <th className="w-[65%] text-center text-base font-medium md:text-lg lg:text-xl">
                  Barang
                </th>
                <th className="hidden w-[15%] text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  Harga
                </th>
                <th className="hidden w-[15%] text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  Status
                </th>
                <th className="w-[15%] text-center text-base font-medium md:text-lg lg:text-xl">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="flex flex-col items-center gap-2 p-2 md:flex-row md:gap-3 lg:gap-5">
                  <img
                    src={productImage}
                    alt="IPhone X"
                    className="h-40 w-40 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                      IPhone X
                    </h2>
                    <p className="text-sm font-medium text-gray-500 md:text-base lg:text-lg">
                      {toCapitalizeCase("Blue")} | 128GB | RAM 8GB
                    </p>
                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                      Berfungsi Dengan Baik | Produk Lengkap | Kondisi{" "}
                      {toCapitalizeCase("NORMAL")} | Garansi 30 Hari
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Harga: {formatToRp(5000000)}
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Status: <span className="badge-green">Selesai</span>
                    </p>
                  </div>
                </td>
                <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  {formatToRp(5000000)}
                </td>
                <td className="hidden text-center md:table-cell">
                  <p className="badge-green">Selesai</p>
                </td>
                <td className="text-center">
                  <Link to={`/orders/1`}>
                    <IconButton icon={<FaEye className="text-xl" />} />
                  </Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="flex flex-col items-center gap-2 p-2 md:flex-row md:gap-3 lg:gap-5">
                  <img
                    src={productImage}
                    alt="IPhone X"
                    className="h-40 w-40 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                      IPhone X
                    </h2>
                    <p className="text-sm font-medium text-gray-500 md:text-base lg:text-lg">
                      {toCapitalizeCase("Blue")} | 128GB | RAM 8GB
                    </p>
                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                      Berfungsi Dengan Baik | Produk Lengkap | Kondisi{" "}
                      {toCapitalizeCase("NORMAL")} | Garansi 30 Hari
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Harga: {formatToRp(5000000)}
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Status:{" "}
                      <span className="badge-yellow">Sedang Dikirim</span>
                    </p>
                  </div>
                </td>
                <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  {formatToRp(5000000)}
                </td>
                <td className="hidden text-center md:table-cell">
                  <p className="badge-yellow">Sedang Dikirim</p>
                </td>
                <td className="text-center">
                  <Link to={`/orders/1`}>
                    <IconButton icon={<FaEye className="text-xl" />} />
                  </Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="flex flex-col items-center gap-2 p-2 md:flex-row md:gap-3 lg:gap-5">
                  <img
                    src={productImage}
                    alt="IPhone X"
                    className="h-40 w-40 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                      IPhone X
                    </h2>
                    <p className="text-sm font-medium text-gray-500 md:text-base lg:text-lg">
                      {toCapitalizeCase("Blue")} | 128GB | RAM 8GB
                    </p>
                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                      Berfungsi Dengan Baik | Produk Lengkap | Kondisi{" "}
                      {toCapitalizeCase("NORMAL")} | Garansi 30 Hari
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Harga: {formatToRp(5000000)}
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Status:{" "}
                      <span className="badge-yellow">Sedang Dikirim</span>
                    </p>
                  </div>
                </td>
                <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  {formatToRp(5000000)}
                </td>
                <td className="hidden text-center md:table-cell">
                  <p className="badge-yellow">Sedang Dikirim</p>
                </td>
                <td className="text-center">
                  <Link to={`orders/1`}>
                    <IconButton icon={<FaEye className="text-xl" />} />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
};

export default AllOrders;
