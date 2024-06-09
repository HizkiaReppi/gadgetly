import iconPengiriman from "../../../assets/icon/icon-pengiriman.png";
import iconLamaPengiriman from "../../../assets/icon/icon-lama-pengiriman.png";
import iconPengembalian from "../../../assets/icon/icon-pengembalian.png";
import { Link } from "react-router-dom";

const ServicePolicy = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <img
            src={iconPengiriman}
            alt="Ikon Pengiriman"
            className="h-10 w-10 object-cover"
          />
          <h6 className="text-lg font-medium text-black md:text-xl lg:text-2xl">
            Pengiriman
          </h6>
        </div>
        <p className="text-base md:text-lg lg:text-xl">
          ID Rp.25.00,00 (Pengiriman Normal)
          <br />
          <Link to="#">Pelajari lebih lanjut</Link>
        </p>
      </div>
      <div>
        <div className="mb-3 flex items-center gap-3">
          <img
            src={iconLamaPengiriman}
            alt="Ikon Lama Pengiriman"
            className="h-10 w-10 object-cover"
          />
          <h6 className="text-lg font-medium text-black md:text-xl lg:text-2xl">
            Lama Pengiriman
          </h6>
        </div>
        <p className="text-justify text-base md:text-lg lg:text-xl">
          Perkiraan lama pengiriman 7-10 hari kerja untuk pengiriman domestik.
          Mohon beri catatan tambahan untuk pengiriman internasional di judul
          pengiriman
        </p>
      </div>
      <div>
        <div className="mb-3 flex items-center gap-3">
          <img
            src={iconPengembalian}
            alt="Ikon Pengembalian"
            className="h-10 w-10 object-cover"
          />
          <h6 className="text-lg font-medium text-black md:text-xl lg:text-2xl">
            Pengembalian
          </h6>
        </div>
        <p className="text-base md:text-lg lg:text-xl">
          30 hari pengembalian. Pembeli menanggung ongkos kirim pengembalian
        </p>
      </div>
    </div>
  );
};

export default ServicePolicy;
