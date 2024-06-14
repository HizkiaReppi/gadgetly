import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toggleProduct,
  removeProduct,
  checkout,
} from "../../redux/slice/cartSlice";
import { FaTrash } from "react-icons/fa6";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import IconButton from "../../components/atoms/IconButton";
import { formatToRp, toCapitalizeCase } from "../../utils/format";
import Button from "../../components/atoms/Button";
import SimilarProduct from "../../components/organisms/product/SimilarProduct";
import axios from "../../utils/axios";

const Cart = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state) => state.cart.products);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const ids = dataProducts.map((product) => product.id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("/products/find-by-ids", { ids });
      const data = response.data;
      setProducts(data.data);
    };

    fetchData();
  }, [dataProducts]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/products?limit=3");
      const data = response.data;
      setSimilarProduct(data.data);
    };

    fetchData();
  }, []);

  const subtotal = dataProducts
    .filter((product) => product.checked)
    .reduce((acc, product) => acc + Number(product.price), 0);

  const handleCheckout = () => {
    dispatch(checkout());
    navigate("/checkout/shipping-information", { replace: true });
  };

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Keranjang", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <section className="mt-7">
        <table className="w-full border-collapse">
          <thead>
            <tr className="mb-4 h-16 rounded-xl bg-primary-500 px-2 py-5 text-white shadow-md">
              <th className="w-[10%] text-center text-base font-medium md:text-lg lg:text-xl">
                Pilih
              </th>
              <th className="w-[65%] text-center text-base font-medium md:text-lg lg:text-xl">
                Barang
              </th>
              <th className="hidden w-[15%] text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                Harga
              </th>
              <th className="w-[10%] text-center text-base font-medium md:text-lg lg:text-xl">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              product.warranty = dataProducts.find(
                (data) => data.id === product.id,
              ).warranty;
              return (
                <tr
                  key={product.id}
                  className={products.length - 1 !== index ? "border-b" : ""}
                >
                  <td className="text-center">
                    <input
                      checked={product.checked}
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 bg-white text-orange-500 focus:ring-2 focus:ring-orange-500 lg:h-6 lg:w-6"
                      onChange={() => dispatch(toggleProduct(product.id))}
                    />
                  </td>
                  <td className="flex flex-col items-center gap-2 p-2 md:flex-row md:gap-3 lg:gap-5">
                    <img
                      src={product.images}
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
                      <p className="text-sm font-semibold text-primary-400 md:text-base lg:text-lg">
                        Berhasil Mendapatkan Garansi{" "}
                        {product.warranty ? "6 Bulan" : "30 Hari"}
                      </p>
                      <p className="mt-2 text-base font-semibold md:hidden">
                        {formatToRp(product.price)}
                      </p>
                    </div>
                  </td>
                  <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                    {formatToRp(product.price)}
                  </td>
                  <td className="p-2 text-center font-semibold">
                    <IconButton
                      outline
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="bg-red-500 p-2 text-white hover:bg-red-700 hover:text-white md:p-2.5 lg:p-3"
                      icon={
                        <FaTrash className="text-base md:text-lg lg:text-xl" />
                      }
                    />
                  </td>
                </tr>
              );
            })}
            {dataProducts.length < 1 && (
              <tr className="pt-20">
                <td
                  colSpan={4}
                  className="text-center text-base font-semibold md:text-lg lg:text-xl"
                >
                  Keranjang Kosong
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-5 flex justify-between border-t-2 border-t-black p-4">
          <span className="text-base font-semibold md:text-lg lg:text-xl">
            Sub-total
          </span>
          <span className="text-base font-semibold md:text-lg lg:text-xl">
            {formatToRp(subtotal)}
          </span>
        </div>
        <div className="mt-4 flex justify-center">
          <Button onClick={handleCheckout}>Pesan Sekarang</Button>
        </div>
      </section>
      <section className="mt-24">
        <SimilarProduct products={similarProduct} />
      </section>
    </section>
  );
};

export default Cart;
