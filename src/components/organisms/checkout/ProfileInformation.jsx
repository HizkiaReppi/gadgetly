import { useState } from "react";
import InputField from "../../molecules/InputField";

const ProfileInformation = ({ register, setValue }) => {
  const [phone, setPhone] = useState("");
  const [waSameAsPhone, setWaSameAsPhone] = useState(false);

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setPhone(value);
    if (waSameAsPhone) {
      setValue("whatsapp", value);
    }
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setWaSameAsPhone(checked);
    if (checked) {
      setValue("whatsapp", phone);
    }
  };
  return (
    <>
      <h2 className="text-xl">Lengkapi data diri anda dibawah ini!</h2>
      <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
        <InputField
          register={register}
          id="fullname"
          name="fullname"
          minLength={3}
          maxLength={100}
          placeholder="Nama Lengkap"
          type="text"
          label="Nama Lengkap"
          defaultValue=""
          inputClassName="bg-white"
          required
        />
        <InputField
          register={register}
          id="email"
          name="email"
          minLength={3}
          maxLength={100}
          placeholder="Email"
          type="email"
          label="Email"
          defaultValue=""
          inputClassName="bg-white"
          required
        />
        <InputField
          register={register}
          id="phone"
          name="phone"
          minLength={3}
          maxLength={100}
          placeholder="Nomor Telepon"
          type="tel"
          label="Nomor Telepon"
          onChange={handlePhoneChange}
          inputClassName="bg-white"
          required
        />
        <InputField
          register={register}
          id="whatsapp"
          name="whatsapp"
          minLength={3}
          maxLength={100}
          placeholder="Nomor Whatsapp"
          type="tel"
          label="Nomor Whatsapp"
          inputClassName="bg-white"
          required
        />
        <div className="col-span-1 flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            id="wa-checkbox"
            name="wa-checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-white text-orange-500 focus:ring-2 focus:ring-orange-500 md:h-5 md:w-5 lg:h-6 lg:w-6"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="wa-checkbox" className="text-sm md:text-base">
            Nomor Whatsapp sama dengan Nomor Telepon
          </label>
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
