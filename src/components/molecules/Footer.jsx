import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import Input from "../atoms/Input";
import IconButton from "../atoms/IconButton";
import logo from "../../assets/logo/logo-1-white.png";
import { footerLinks } from "../../constants/data";

const Footer = () => {
  const { register } = useForm();
  return (
    <footer className="h-full w-full bg-[#FAAC37]">
      <div className="w-full px-16 py-8 pt-14 text-white md:top-80">
        <div className="flex flex-col items-start justify-between gap-14 md:flex-row">
          <div>
            <img src={logo} alt="Gadgetly" height={80} />
            <p className="my-6 w-full text-justify text-sm md:w-[515px]">
              Platform online terdepan untuk membeli dan menjual HP bekas
              berkualitas! Kami memahami bahwa teknologi bergerak cepat, dan
              kebutuhan Anda akan gadget terbaru terus berkembang. Di Gadgetly,
              kami menyediakan solusi cerdas untuk mengupgrade perangkat Anda
              tanpa harus merogoh kocek dalam-dalam. Ganti, Jual, Hemat dengan
              HP Bekas Berkualitas!
            </p>
            <div className="flex items-center gap-3">
              <Link
                title="Instagram"
                to="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white hover:border-gray-500"
              >
                <FaInstagram className="text-2xl text-white" />
              </Link>
              <Link
                title="Facebook"
                to="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white hover:border-gray-500"
              >
                <RiFacebookCircleLine className="text-2xl text-white" />
              </Link>
              <Link
                title="Whatsapp"
                to="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white hover:border-gray-500"
              >
                <FaWhatsapp className="text-2xl text-white" />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="flex w-full items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white md:h-14 md:w-14">
                  <MdOutlineEmail className="text-3xl" />
                </div>
                <label htmlFor="email_subscribe">
                  <p className="text-nowrap text-base font-semibold">
                    Masukan Email Anda
                  </p>
                  <p className="w-full text-xs md:w-36">
                    Tetap update dengan produk terbaru!
                  </p>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="email"
                  register={register}
                  name="email_subscribe"
                  id="email_subscribe"
                  className="w-full border-white text-white placeholder:text-white focus:border-white md:w-64"
                  placeholder="Masukan Email Anda"
                />
                <IconButton
                  className="p-2.5 md:p-5"
                  icon={<FaArrowRight className="text-lg" />}
                />
              </div>
            </div>
            <div className="mt-9 flex flex-wrap items-start gap-x-[75px] gap-y-8">
              {footerLinks.map((footerLink) => (
                <div key={footerLink.title}>
                  <p className="text-base font-semibold">{footerLink.title}</p>
                  <ul className="text-xs">
                    {footerLink.links.map((link) => (
                      <li key={link.title} className="mt-3.5">
                        <Link to={link.href} className="text-white">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-t-white pt-8 text-center text-xs md:text-base">
          <p>&copy; Copyright 2024 - Gadgetly | Dikembangkan oleh 7Teen </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
