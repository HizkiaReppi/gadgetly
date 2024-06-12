import Breadcrumb from "../../components/atoms/Breadcrumb";
import { formatToRp, toCapitalizeCase } from "../../utils/format";
import productImage from "../../assets/homepage/product-image.png";
import Button from "../../components/atoms/Button";

const CheckoutConfirmation = () => {
  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Checkout", to: null },
    { label: "Konfirmasi Pesanan", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-10">
        <h1 className="text-3xl font-semibold text-primary-500">
          Konfirmasi Pesanan
        </h1>
        <section className="mt-5">
          <h2 className="text-2xl font-medium text-primary-500">
            Produk Yang Dipesan
          </h2>
          <div className="mt-3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="mb-4 h-16 rounded-xl border-b-2 border-b-black px-2 py-5">
                  <th className="w-[65%] text-center text-base font-medium md:text-lg lg:text-xl">
                    Barang
                  </th>
                  <th className="hidden w-[15%] text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                    Harga
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
                    </div>
                  </td>
                  <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                    {formatToRp(5000000)}
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
                    </div>
                  </td>
                  <td className="my-auto hidden h-full items-center p-2 text-center text-base font-medium md:table-cell md:text-lg lg:text-xl">
                    {formatToRp(5000000)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-medium text-primary-500">Pembayaran</h2>
          <div className="mt-2.5">
            <h3 className="text-base lg:text-lg">
              Pilih metode pembayaran yang akan anda gunakan di bawah ini
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
              <div>
                <input
                  type="radio"
                  id="cash_on_delivery"
                  value="cash_on_delivery"
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor="cash_on_delivery"
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-black hover:border-primary-500 hover:text-primary-600 peer-checked:border-primary-500 peer-checked:text-primary-600"
                >
                  <div className="block w-full">
                    <div className="flex w-full items-center justify-between font-semibold">
                      <p className="text-base lg:text-lg">Cash On Delivery</p>
                      <p className="text-sm font-medium lg:text-base">
                        Ongkos Kirim: {formatToRp(15000)}
                      </p>
                    </div>
                    <div className="mt-2 w-full text-sm lg:text-base">
                      Anda bisa melakukan pembayaran di tempat tujuan
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cod_cek_dulu"
                  value="cod_cek_dulu"
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor="cod_cek_dulu"
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-black hover:border-primary-500 hover:text-primary-600 peer-checked:border-primary-500 peer-checked:text-primary-600"
                >
                  <div className="block w-full">
                    <div className="flex w-full items-center justify-between font-semibold">
                      <p className="text-base lg:text-lg">COD Cek Dulu</p>
                      <p className="text-sm font-medium lg:text-base">
                        Ongkos Kirim: {formatToRp(30000)}
                      </p>
                    </div>
                    <div className="mt-2 w-full text-sm lg:text-base">
                      Anda bisa bayar di tempat setelah memeriksa barang
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-medium text-primary-500">
            Detail Pesanan
          </h2>
          <div className="mt-2.5">
            <h3 className="text-base lg:text-lg">
              Silahkan lihat informasi pengiriman berikut
            </h3>
            <div className="mt-3 flex flex-col justify-between border-y-2 border-y-black py-2 md:flex-row">
              <div>
                <h4 className="text-lg font-medium">Alamat Pengiriman</h4>
                <div className="mt-2">
                  <p className="leading-loose">
                    Jurusan PTIK, Universitas Negeri Manado. Minahasa, Provinsi
                    Sulawesi Utara
                  </p>
                  <p className="leading-loose">
                    Detail Lainnya: Ruangan Lab RPL
                  </p>
                </div>
                <h4 className="mt-5 text-lg font-medium">Detail Pengiriman</h4>
                <div className="mt-2">
                  <table>
                    <tbody>
                      <tr className="py-5">
                        <td className="py-1.5">Metode Pengiriman</td>
                        <td className="px-3 py-1.5">:</td>
                        <td className="py-1.5">JNE REG</td>
                      </tr>
                      <tr>
                        <td className="py-1.5">Metode Pembayaran</td>
                        <td className="px-3 py-1.5">:</td>
                        <td className="py-1.5">Cash On Delivery</td>
                      </tr>
                      <tr>
                        <td className="py-1.5">Estimasi Dikirim Penjual</td>
                        <td className="px-3 py-1.5">:</td>
                        <td className="py-1.5">Paling Lambat 3 Hari</td>
                      </tr>
                      <tr>
                        <td className="py-1.5">Ongkos Kirim</td>
                        <td className="px-3 py-1.5">:</td>
                        <td className="py-1.5">{formatToRp(150000)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="mb-2 mt-5 text-lg font-medium md:mt-0">
                  Pembayaran
                </h4>
                <table>
                  <tbody>
                    <tr>
                      <td className="py-1.5">Sub-total produk</td>
                      <td className="px-3 py-1.5">:</td>
                      <td className="py-1.5">{formatToRp(1000000)}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Ongkos Kirim</td>
                      <td className="px-3 py-1.5">:</td>
                      <td className="py-1.5">{formatToRp(15000)}</td>
                    </tr>
                    <tr>
                      <td className="py-1.5">Jasa Aplikasi</td>
                      <td className="px-3 py-1.5">:</td>
                      <td className="py-1.5">{formatToRp(3000)}</td>
                    </tr>
                    <tr className="text-base font-semibold lg:text-lg">
                      <td className="py-1.5">Total</td>
                      <td className="px-3 py-1.5">:</td>
                      <td className="py-1.5">{formatToRp(1150000)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-8 text-center">
          <Button>Pesan Sekarang</Button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutConfirmation;
