import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { Cart, Heart } from "../../components/atoms/icons";
import Button from "../../components/atoms/Button";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import IconButton from "../../components/atoms/IconButton";
import ProductGallery from "../../components/molecules/ProductGallery";
import WarrantyOptions from "../../components/organisms/product/WarrantyOptions";
import ServicePolicy from "../../components/organisms/product/ServicePolicy";
import SimilarProduct from "../../components/organisms/product/SimilarProduct";
import axios from "../../utils/axios";
import { formatToRp, toCapitalizeCase, diffForHuman } from "../../utils/format";
import { addToCart } from "../../redux/slice/cartSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedWarranty, setSelectedWarranty] = useState("garansi-30-hari");
  const [error, setError] = useState(null);

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Product", to: "/products" },
    { label: product?.title, to: null },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productResponse = await axios.get(`/products/${id}`);
        const productData = productResponse.data.data;
        setProduct(productData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const imagesData = product.images
    ? product.images.map((image) => image.image_url)
    : [];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <section className="flex flex-col items-center justify-between gap-14 lg:flex-row">
        <ProductGallery images={imagesData.slice(0, 5)} />
        <div>
          <h1 className="text-3xl font-semibold leading-[54px] text-black lg:text-4xl">
            {product.title}
          </h1>
          <div className="mt-5 text-xl font-medium text-gray-800 lg:text-2xl">
            {product.color} | {product.storage} | Ram {product.ram}
          </div>
          <div className="mt-5 flex items-center gap-2 text-base text-gray-700 md:mt-7 md:gap-3 md:text-lg lg:mt-9 lg:gap-4 lg:text-xl">
            <div className="inline-flex items-center gap-1.5 leading-[21px]">
              <IoMdCheckmark className="text-base md:text-lg lg:text-xl" />
              Berfungsi dengan baik
            </div>
            |
            <div className="inline-flex items-center gap-1.5 leading-[21px]">
              <IoMdCheckmark className="text-base md:text-lg lg:text-xl" />
              Produk lengkap
            </div>
          </div>
          <div className="mt-6 text-3xl font-semibold leading-normal tracking-wide text-orange-500 md:mt-8 md:text-4xl lg:mt-10 lg:text-[40px]">
            {formatToRp(product.price)}
          </div>
          <hr className="mt-[31px] w-full border-2 border-gray-300" />
          <div className="mt-6">
            <div className="relative h-[29.56px] w-[230.67px]">
              <div className="absolute left-0 top-[5.56px] text-base font-medium uppercase text-black">
                PERPANJANG GARANSI
              </div>
              <div className="absolute left-[186.67px] top-0 text-xs font-normal text-blue-700">
                Pelajari
              </div>
            </div>
            <WarrantyOptions
              selectedWarranty={selectedWarranty}
              setSelectedWarranty={setSelectedWarranty}
            />
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <IconButton outline icon={<Heart pathFill="#f97316" />} />
            <Button
              outline
              className="lg:px-7"
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    warranty: selectedWarranty !== "garansi-30-hari",
                    price: product.price,
                  }),
                )
              }
            >
              <Cart pathFill="#f97316" />
              Tambahkan Keranjang
            </Button>
            <Button className="lg:px-7">Beli</Button>
          </div>
        </div>
      </section>
      <section className="mt-16 flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
        <div className="w-full">
          <h5 className="mb-[18px] text-lg font-medium leading-9 md:text-xl lg:text-2xl">
            Deskripsi Produk
          </h5>
          <div className="text-justify text-base leading-loose md:text-lg lg:text-xl">
            {product.description}
          </div>
        </div>
        <hr className="block w-full border-2 border-gray-300 lg:hidden" />
        <div className="w-full lg:w-[72%]">
          <ServicePolicy />
          <hr className="mt-12 w-full border-2 border-gray-300" />
          <section className="mt-10">
            <h5 className="mb-[18px] text-lg font-medium leading-9 md:text-xl lg:text-2xl">
              Detail Produk
            </h5>
            <div>
              <table className="text-base md:text-lg lg:text-xl">
                <tbody className="flex flex-col gap-3">
                  <tr>
                    <td className="w-48 align-top">Warna</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Penyimpanan</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product.storage}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">RAM</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product.ram}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Kondisi Gadget</td>
                    <td className="w-6 align-top">:</td>
                    <td>{toCapitalizeCase(product.condition)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="mt-8">
            <h5 className="mb-[18px] text-lg font-medium leading-9 md:text-xl lg:text-2xl">
              Detail Penjual
            </h5>
            <div>
              <table className="text-base md:text-lg lg:text-xl">
                <tbody className="flex flex-col gap-3">
                  <tr>
                    <td className="w-48 align-top">Nama Lengkap</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product?.seller?.user?.name}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Nomor Telepon</td>
                    <td className="w-6 align-top">:</td>
                    <td>
                      <a
                        href={`tel:${product?.seller?.phone}`}
                        className="text-black"
                      >
                        {product?.seller?.phone}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Domisili</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product?.seller?.domicile}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Terakhir Login</td>
                    <td className="w-6 align-top">:</td>
                    <td>{diffForHuman(product?.seller?.user?.last_login)}</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Jumlah Produk</td>
                    <td className="w-6 align-top">:</td>
                    <td>
                      {product?.seller?.Product?.length} Produk Yang Dijual
                    </td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Alamat Lengkap</td>
                    <td className="w-6 align-top">:</td>
                    <td>{product?.seller?.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
      {product?.seller?.Product && (
        <section className="mt-24">
          <SimilarProduct products={product?.seller?.Product?.slice(0, 3)} />
        </section>
      )}
    </section>
  );
};

export default DetailProduct;
