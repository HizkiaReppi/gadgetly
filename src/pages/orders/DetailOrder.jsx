import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import { formatToRp, toCapitalizeCase } from "../../utils/format";
import { getOrderById } from "../../services/orderService";

const DetailOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrderById(id);
        setOrder(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  const product = order.items[0].product;

  console.log({ order });
  console.log(order.items);
  console.log(product);

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Pesanan", to: "/orders" },
    { label: "Detail Pesanan", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-primary-500">
          Detail Pesanan
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="flex flex-col items-center gap-2 p-2 md:flex-row md:gap-3 lg:gap-5">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="h-40 w-40 object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                      {product.title}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 md:text-base lg:text-lg">
                      {toCapitalizeCase(product.color)} | {product.storage} |
                      RAM {product.ram}
                    </p>
                    <p className="text-sm font-medium text-gray-500 lg:text-base">
                      Berfungsi Dengan Baik | Produk Lengkap | Kondisi{" "}
                      {toCapitalizeCase(product.condition)}
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Harga: {formatToRp(product.price)}
                    </p>
                    <p className="mt-2 text-base font-semibold md:hidden">
                      Status:{" "}
                      <span className="badge-green">{order.status}</span>
                    </p>
                  </div>
                </td>
                <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                  {formatToRp(product.price)}
                </td>
                <td className="hidden text-center md:table-cell">
                  <p
                    className={`badge-${order.status === "PENDING" ? "yellow" : "green"}`}
                  >
                    {order.status}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mt-5 flex flex-col justify-between gap-x-5 rounded-2xl bg-white p-10 shadow-md md:flex-row">
          <div>
            <h2 className="mb-2 text-lg font-medium">Detail Pengiriman</h2>
            <div className="grid grid-cols-2 gap-5 md:gap-6 lg:gap-7">
              <div>
                <h6 className="mb-1 font-medium">ID Pengiriman</h6>
                <p>{order.delivery?.id || "N/A"}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Status</h6>
                <p>{order.status}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Nama Pengirim</h6>
                <p>Hizkia Reppi</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Nomor Telepon Pengirim</h6>
                <p>082345678910</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Alamat Pengirim</h6>
                <p>
                  Jurusan PTIK (Ruangan Lab RPL), Universitas Negeri Manado.
                  Minahasa, Provinsi Sulawesi Utara
                </p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Nomor Resi</h6>
                <p>{order.delivery?.tracking_number || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="hidden h-80 w-1 bg-black md:block"></div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Detail Pesanan</h2>
            <div className="grid grid-cols-2 gap-7">
              <div>
                <h6 className="mb-1 font-medium">ID Pesanan</h6>
                <p>{order.id}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Metode Pembayaran</h6>
                <p>{toCapitalizeCase(order?.detail?.payment_method?.split("_").join(" "))}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Nama Penerima</h6>
                <p>{order.detail.fullname}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Nomor Telepon Penerima</h6>
                <p>{order.detail.phone}</p>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Alamat Penerima</h6>
                <p>{order.detail.address}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailOrder;
