import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import { formatToRp, toCapitalizeCase } from "../../utils/format";
import IconButton from "../../components/atoms/IconButton";
import useAuth from "../../hooks/useAuth";
import { getOrdersByUserId } from "../../services/orderService";

const AllOrders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const user = useAuth(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrdersByUserId(user.id);
        setOrdersData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const products = ordersData.flatMap((order) =>
    order.items.map((item) => ({
      orderId: order.id,
      status: order.status,
      ...item.product,
    }))
  );

  console.log(products);

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
              {products.map((product) => {
                return (
                  <tr key={product.id} className="border-b">
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
                          {toCapitalizeCase(product.color)} | {product.storage}{" "}
                          | RAM {product.ram}
                        </p>
                        <p className="text-sm font-medium text-gray-500 lg:text-base">
                          Berfungsi Dengan Baik | Produk Lengkap | Kondisi{" "}
                          {toCapitalizeCase(product.condition)}
                        </p>
                        <p className="mt-2 text-base font-semibold md:hidden">
                          Harga: {formatToRp(product.price)}
                        </p>
                        <p className="mt-2 text-base font-semibold md:hidden">
                          Status: <span className="badge-green">{product.status}</span>
                        </p>
                      </div>
                    </td>
                    <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                      {formatToRp(product.price)}
                    </td>
                    <td className="hidden text-center md:table-cell">
                      <p className={`badge-${product.status === 'PENDING' ? 'yellow' : 'green'}`}>
                        {product.status}
                      </p>
                    </td>
                    <td className="text-center">
                      <Link to={`/orders/${product.orderId}`}>
                        <IconButton icon={<FaEye className="text-xl" />} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
};

export default AllOrders;
