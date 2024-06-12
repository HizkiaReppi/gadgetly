const WarrantyOptions = ({ selectedWarranty, setSelectedWarranty }) => {
  const handleChange = (event) => {
    setSelectedWarranty(event.target.value);
  };

  return (
    <ul className="flex w-full items-center gap-4 md:gap-5 lg:gap-6">
      <li>
        <input
          type="radio"
          id="garansi-30-hari"
          name="garansi"
          value="garansi-30-hari"
          className="peer hidden"
          checked={selectedWarranty === "garansi-30-hari"}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="garansi-30-hari"
          className={`btn ${selectedWarranty == "garansi-30-hari" ? "btn-normal" : "btn-outline"}`}
        >
          30 Hari
        </label>
      </li>
      <li>
        <input
          type="radio"
          id="garansi-6-bulan"
          name="garansi"
          value="garansi-6-bulan"
          className="peer hidden"
          checked={selectedWarranty === "garansi-6-bulan"}
          onChange={handleChange}
        />
        <label
          htmlFor="garansi-6-bulan"
          className={`btn ${selectedWarranty == "garansi-30-hari" ? "btn-outline" : "btn-normal"}`}
        >
          6 Bulan
        </label>
      </li>
    </ul>
  );
};

export default WarrantyOptions;
