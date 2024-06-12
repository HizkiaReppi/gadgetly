/**
 * TODO:
 * - [refactor] Refactor the Navbar component in mobile view
 * - [fix] Fix and Integrate Backend Data
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import InputSearch from "./InputSearch";
import Button from "../atoms/Button";
import NavLink from "../atoms/NavLink";
import { CartIcon, HeartIcon, UserIcon } from "../atoms/icons";
import { logout } from "../../redux/slice/auth/logoutSlice";
import logoGadgetly from "../../assets/logo/logo-1-black.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const location = useLocation();
  const { register } = useForm();
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const user = useAuth();

  const handleClick = () => setNav(!nav);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < -1) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);

  return (
    <nav className="sticky left-0 top-0 z-50 flex items-center justify-between bg-white px-10 py-5 shadow md:px-20 lg:px-28">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img src={logoGadgetly} alt="Health Plus" className="w-[125px]" />
        </Link>

        {/* Menu */}
        <ul className="ml-5 hidden items-center justify-between gap-10 md:flex">
          <li>
            <NavLink href="/" active={location.pathname == "/"}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/categories"
              active={location.pathname.startsWith("/categories")}
            >
              Kategori
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/about"
              active={location.pathname.startsWith("/about")}
            >
              Tentang
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="hidden items-center gap-10 md:flex">
        <InputSearch register={register} />
        {!isAuthenticated ? (
          <>
            <Link
              to="/auth/login"
              className="btn btn-outline w-16 px-14 text-base"
            >
              Masuk
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-normal w-16 px-14 text-base"
            >
              Daftar
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <HeartIcon className="w-[35px] cursor-pointer" />
            <Link to="/cart">
              <CartIcon className="w-[35px] cursor-pointer" />
            </Link>
            <div className="relative">
              <UserIcon
                className="w-[26px] cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 overflow-hidden rounded-full border border-black">
                        <img
                          src={
                            user?.photo
                              ? user?.photo
                              : `https://eu.ui-avatars.com/api/?name=${user?.name}&size=250`
                          }
                          alt={`Foto Profil ${user?.name}`}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="w-full flex-1 border-l border-gray-300 pl-3">
                        <p className="mb-1 break-words text-base font-semibold text-gray-700">
                          {user?.name}
                        </p>
                        <p className="w-full break-words pr-10 text-xs font-medium text-gray-700">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <hr className="my-4 h-1 w-full lg:my-5" />
                    <Link
                      to="/profile"
                      className="btn btn-outline w-full px-14 text-sm"
                    >
                      Profil
                    </Link>
                    <Link
                      to="/orders"
                      className="mt-2 btn btn-outline w-full px-14 text-sm"
                    >
                      Pesanan
                    </Link>
                    <Button
                      onClick={handleLogout}
                      className="mt-2 w-full bg-red-600 hover:bg-red-700 lg:text-sm"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hamburger */}
      <div
        className="block md:hidden"
        onClick={handleClick}
        onScroll={handleClick}
      >
        {!nav ? (
          <HiMenuAlt3 className="cursor-pointer text-3xl" />
        ) : (
          <MdClose className="cursor-pointer text-3xl" />
        )}
      </div>

      {/* Menu Mobile */}
      <ul
        className={`absolute left-0 flex w-full flex-col duration-300 ease-linear md:hidden
          ${
            !nav
              ? "top-[-500px] opacity-0"
              : "top-full gap-3 bg-white px-10 pb-5 text-left opacity-100 shadow-md "
          }`}
      >
        <li>
          <NavLink className="block" href="/" active={location.pathname == "/"}>
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block"
            href="/categories"
            active={location.pathname.startsWith("/categories")}
          >
            Kategori
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block"
            href="/about"
            active={location.pathname.startsWith("/about")}
          >
            Tentang
          </NavLink>
        </li>
        {!isAuthenticated ? (
          <>
            <Link to="/auth/login" className="btn btn-outline">
              Masuk
            </Link>
            <Link to="/auth/register" className="btn btn-normal">
              Daftar
            </Link>
          </>
        ) : (
          <Button outline={true} onClick={handleLogout}>
            Keluar
          </Button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
