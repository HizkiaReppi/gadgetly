import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import axios from "../../../utils/axios";
import Label from "../../atoms/Label";
import TextareaField from "../../molecules/TextareaField";

const AddressInformation = ({ register, errors, control, setValue }) => {
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(false);
  const [selectedRegency, setSelectedRegency] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(false);
  const [selectedVillage, setSelectedVillage] = useState(false);

  useEffect(() => {
    axios
      .get("https://nusantara-kita.yuefii.my.id/api/nusantara/provinces")
      .then((response) => {
        setProvinces(response.data.data);
      });
  }, []);

  const loadRegencies = (provinceCode) => {
    axios
      .get(
        `https://nusantara-kita.yuefii.my.id/api/nusantara/${provinceCode}/regencies`,
      )
      .then((response) => {
        setRegencies(response.data.data);
      });
  };

  const loadDistricts = (regencyCode) => {
    axios
      .get(
        `https://nusantara-kita.yuefii.my.id/api/nusantara/${regencyCode}/districts`,
      )
      .then((response) => {
        setDistricts(response.data.data);
      });
  };

  const loadVillages = (districtCode) => {
    axios
      .get(
        `https://nusantara-kita.yuefii.my.id/api/nusantara/${districtCode}/villages`,
      )
      .then((response) => {
        setVillages(response.data.data);
      });
  };

  return (
    <div>
      <h2 className="text-xl">Lengkapi alamat pengiriman anda dibawah ini!</h2>
      <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
        <div>
          <Label htmlFor="province" className="mb-1.5">
            Provinsi
          </Label>
          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={provinces.map((province) => ({
                  label: province.name,
                  value: province.code,
                }))}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  setValue("province", selectedOption);
                  setSelectedProvince(selectedOption);
                  loadRegencies(selectedOption.value);
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "rgba(209, 213, 219)",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "rgba(59, 130, 246)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgb(243 244 246)",
                      color: "rgb(243 244 246)",
                    },
                    "&:focus-within": {
                      borderColor: "rgba(59, 130, 246)",
                      boxShadow: "0 0 0 1px rgba(59, 130, 246)",
                    },
                  }),
                  container: (base) => ({
                    ...base,
                    width: "100%",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.625rem",
                    paddingBottom: "0.625rem",
                    fontSize: "0.875rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "rgba(17, 24, 39)",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 20,
                  }),
                }}
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="regency" className="mb-1.5">
            Kabupaten/Kota
          </Label>
          <Controller
            name="regency"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={regencies.map((regency) => ({
                  label: regency.name,
                  value: regency.code,
                }))}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  setValue("regency", selectedOption);
                  setSelectedRegency(selectedOption);
                  loadDistricts(selectedOption.value);
                }}
                isDisabled={!selectedProvince}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "rgba(209, 213, 219)",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "rgba(59, 130, 246)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgb(243 244 246)",
                      color: "rgb(243 244 246)",
                    },
                    "&:focus-within": {
                      borderColor: "rgba(59, 130, 246)",
                      boxShadow: "0 0 0 1px rgba(59, 130, 246)",
                    },
                  }),
                  container: (base) => ({
                    ...base,
                    width: "100%",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.625rem",
                    paddingBottom: "0.625rem",
                    fontSize: "0.875rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "rgba(17, 24, 39)",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 20,
                  }),
                }}
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="district" className="mb-1.5">
            Kecamatan
          </Label>
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={districts.map((district) => ({
                  label: district.name,
                  value: district.code,
                }))}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  setValue("district", selectedOption);
                  setSelectedDistrict(selectedOption);
                  loadVillages(selectedOption.value);
                }}
                isDisabled={!selectedRegency}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "rgba(209, 213, 219)",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "rgba(59, 130, 246)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgb(243 244 246)",
                      color: "rgb(243 244 246)",
                    },
                    "&:focus-within": {
                      borderColor: "rgba(59, 130, 246)",
                      boxShadow: "0 0 0 1px rgba(59, 130, 246)",
                    },
                  }),
                  container: (base) => ({
                    ...base,
                    width: "100%",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.625rem",
                    paddingBottom: "0.625rem",
                    fontSize: "0.875rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "rgba(17, 24, 39)",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 20,
                  }),
                }}
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="village" className="mb-1.5">
            Desa
          </Label>
          <Controller
            name="village"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={villages.map((village) => ({
                  label: village.name,
                  value: village.code,
                }))}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  setValue("village", selectedOption);
                  setSelectedVillage(selectedOption);
                }}
                isDisabled={!selectedDistrict}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "rgba(209, 213, 219)",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "rgba(59, 130, 246)",
                    },
                    "&:disabled": {
                      backgroundColor: "rgb(243 244 246)",
                      color: "rgb(243 244 246)",
                    },
                    "&:focus-within": {
                      borderColor: "rgba(59, 130, 246)",
                      boxShadow: "0 0 0 1px rgba(59, 130, 246)",
                    },
                  }),
                  container: (base) => ({
                    ...base,
                    width: "100%",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "0.625rem",
                    paddingBottom: "0.625rem",
                    fontSize: "0.875rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "rgba(17, 24, 39)",
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 20,
                  }),
                }}
              />
            )}
          />
        </div>
        {selectedVillage && (
          <>
            <TextareaField
              label="Detail Jalan"
              name="street"
              id="street"
              placeholder="Detail Jalan"
              maxLength={50}
              register={register}
              required
              errors={errors?.street}
              textareaClassName="bg-white"
              isDisabled={!selectedVillage}
            />
            <TextareaField
              label="Detail Lainnya (Opsional)"
              name="other_detail"
              id="other_detail"
              placeholder="Detail Lainnya"
              maxLength={50}
              register={register}
              errors={errors?.other_detail}
              textareaClassName="bg-white"
              disabled={!selectedVillage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AddressInformation;
