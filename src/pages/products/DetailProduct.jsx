import { useParams } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { Cart, Heart } from "../../components/atoms/icons";
import Button from "../../components/atoms/Button";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import IconButton from "../../components/atoms/IconButton";
import ProductGallery from "../../components/molecules/ProductGallery";
import WarrantyOptions from "../../components/organisms/product/WarrantyOptions";
import ServicePolicy from "../../components/organisms/product/ServicePolicy";
import productImage from "../../assets/homepage/product-image.png";
import productBundleImage from "../../assets/homepage/product-bundle.jpeg";
import SimilarProduct from "../../components/organisms/product/SimilarProduct";

const images = [productImage, productBundleImage];

const DetailProduct = () => {
  const { id } = useParams();
  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Product", to: "/products" },
    { label: "Apple iPhone X", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <section className="flex flex-col items-center justify-between gap-14 lg:flex-row">
        <div>
          <ProductGallery images={images} />
        </div>
        <div>
          <h1 className="text-3xl font-semibold leading-[54px] text-black lg:text-4xl">
            Apple iPhone X
          </h1>
          <div className="mt-5 text-xl font-medium text-gray-800 lg:text-2xl">
            Silver | 256GB | Ram 8GB
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
            Rp. 3.200.000
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

            <div className="mt-4">
              <WarrantyOptions />
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <IconButton
              className="flex lg:inline-flex"
              outline
              icon={<Heart pathFill="#f97316" />}
            />
            <Button outline className="flex lg:inline-flex lg:px-7">
              <Cart pathFill="#f97316" />
              Tambahkan Keranjang
            </Button>
            <Button className="flex lg:inline-flex lg:px-7">Beli</Button>
          </div>
        </div>
      </section>
      <section className="mt-16 flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
        <div className="w-full">
          <h5 className="mb-[18px] text-lg font-medium leading-9 md:text-xl lg:text-2xl">
            Deskripsi Produk
          </h5>
          <div className="text-justify text-base leading-loose md:text-lg lg:text-xl">
            IPhone X adalah ponsel pintar yang dirancang, dikembangkan, dan
            dipasarkan oleh Apple. Ini adalah bagian dari iPhone generasi ke-11.
            Ini dirilis pada 3 November 2017. Ini adalah penerus dari iPhone 8
            dan iPhone 8 Plus. IPhone X adalah ponsel pertama Apple yang
            memiliki layar OLED. Ini memiliki layar 5,8 inci dengan resolusi
            2436 x 1125 piksel. Ini memiliki rasio kontras 1.000.000:1 dan
            kecerahan hingga 625 nits. IPhone X memiliki desain yang berbeda
            dari iPhone sebelumnya. Ini memiliki layar yang hampir tanpa
            bingkai. Ini memiliki kamera ganda di bagian belakang. Kamera ini
            memiliki dua lensa 12 MP. Satu lensa adalah lensa wide-angle dan
            yang lainnya adalah lensa telephoto. Kamera ini memiliki fitur
            seperti zoom optik 2x, zoom digital hingga 10x, dan mode potret.
            IPhone X memiliki kamera depan 7 MP. Ini memiliki fitur seperti mode
            potret, pencahayaan potret, dan animoji. IPhone X memiliki chip A11
            Bionic. Ini adalah chip pertama yang memiliki unit pemrosesan
            neural. Ini memiliki dua inti performa dan empat inti efisiensi.
            IPhone X memiliki dua pilihan penyimpanan internal: 64 GB dan 256
            GB. IPhone X memiliki dua pilihan warna: Space Gray dan Silver.
            IPhone X memiliki baterai 2716 mAh. Ini memiliki fitur pengisian
            cepat dan pengisian nirkabel. IPhone X menjalankan iOS 11. IPhone X
            mendukung Face ID. Ini adalah sistem pengenalan wajah yang digunakan
            untuk membuka kunci ponsel.
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
                    <td>Silver</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Penyimpanan</td>
                    <td className="w-6 align-top">:</td>
                    <td>256GB</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">RAM</td>
                    <td className="w-6 align-top">:</td>
                    <td>8GB</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Kondisi Gadget</td>
                    <td className="w-6 align-top">:</td>
                    <td>Normal</td>
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
                    <td>Hizkia Jefren Reppi</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Nomor Telepon</td>
                    <td className="w-6 align-top">:</td>
                    <td>08234567890</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Domisili</td>
                    <td className="w-6 align-top">:</td>
                    <td>Minahasa</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Terakhir Login</td>
                    <td className="w-6 align-top">:</td>
                    <td>3 Menit Yang Lalu</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Jumlah Produk</td>
                    <td className="w-6 align-top">:</td>
                    <td>2 Produk Yang Dijual</td>
                  </tr>
                  <tr>
                    <td className="w-48 align-top">Alamat Lengkap</td>
                    <td className="w-6 align-top">:</td>
                    <td>
                      Langowan Selatan, Kabupaten Minahasa, Provinsi Sulawesi
                      Utara
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
      <section className="mt-24">
        <SimilarProduct />
      </section>
    </section>
  );
};

export default DetailProduct;
