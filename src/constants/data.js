import lutfiRachman from "../assets/testimonials/lutfirachmanfit.png";
import farreldaff from "../assets/testimonials/farreldaff.png";
import bungaamelia from "../assets/testimonials/bungaamelia.png";
import maanafis from "../assets/testimonials/maanafis.png";
import zayyanzeiyn from "../assets/testimonials/zayyanzeiyn.png";
import elsyaAbell from "../assets/testimonials/elsya_abell.png";
import iconProduct from "../assets/icon/icon-product.png";
import iconPesanan from "../assets/icon/icon-pesanan.png";
import iconProfil from "../assets/icon/icon-profil.png";
import iconPengiriman from "../assets/icon/icon-pengiriman-seller.png";
import iconUlasan from "../assets/icon/icon-ulasan.png";

import hizkia from "../assets/member/hizkia-reppi.jpg";
import grace from "../assets/member/grace-zalukhu.jpg";
import nasywa from "../assets/member/nasywa.jpg";
import citra from "../assets/member/citra.jpg";
import bintang from "../assets/member/bintang.jpg";
import izzul from "../assets/member/izzul.jpg";

export const testimonials = [
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3b",
    image: elsyaAbell,
    name: "Elsya Abella",
    username: "elsya_abell",
    content:
      "Gadgetly membantu saya membeli HP bekas dengan mudah dan aman dan harganya cukup terjangkau. Saya sangat merekomendasikannya!",
  },
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3c",
    image: zayyanzeiyn,
    name: "Zayyan Zein",
    username: "zayyanzeiyn",
    content:
      "Saya senang bisa menemukan Gadgetly karena barang yang dijual berkualitas, dan cukup terjangkau. Fitur yang diberikan juga memudahkan",
  },
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3d",
    image: maanafis,
    name: "Nafisa Maharani",
    username: "maanafis",
    content:
      "Terima kasih Gadgetly karena sudah membantu saya menjual HP bekas dengan mudah dan tidak ribet. Saya merasa terbantu",
  },
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3e",
    image: bungaamelia,
    name: "Bunga Amelia ",
    username: "bungaamelia",
    content:
      "Gadgetly memberi saya kesempatan untuk menjual HP bekas dengan tahapan yang mudah dan aman. Saya sangat tertolong",
  },
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3f",
    image: lutfiRachman,
    name: "Lutfi Rachman",
    username: "lutfirachmanfit",
    content:
      "Gadgetly memiliki fitur penawaran bundling yang saya kira cukup unik, barang yang dijual terjamin kualitasnya dan sesuai sehingga lebih aman untuk membeli disini",
  },
  {
    id: "f1b3b3b4-1b3b-4b3b-8b3b-3b3b3b3b3b3g",
    image: farreldaff,
    name: "Daffa Farrel",
    username: "farreldaff",
    content:
      "Berbelanja di Gadgetly sangat aman. Penjual juga sangat terpercaya dan barang sesuai. Saya jadi tidak ragu lagi dalam membeli HP bekas di Gadgetly",
  },
];

export const footerLinks = [
  {
    title: "Navigasi",
    links: [
      {
        title: "Halaman Utama",
        href: "/",
      },
      {
        title: "Tentang Kami",
        href: "/about-us",
      },
      {
        title: "Produk",
        href: "/products",
      },
      {
        title: "Kategori",
        href: "/products",
      },
    ],
  },
  {
    title: "Area Pelayanan",
    links: [
      {
        title: "Jakarta",
        href: "#",
      },
      {
        title: "Bogor",
        href: "#",
      },
      {
        title: "Bandung",
        href: "#",
      },
      {
        title: "Medan",
        href: "#",
      },
      {
        title: "Manado",
        href: "#",
      },
    ],
  },
  {
    title: "Lainnya",
    links: [
      {
        title: "Syarat & Ketentuan",
        href: "/legal/terms-and-conditions",
      },
      {
        title: "Kebijakan Privasi",
        href: "/legal/privacy-policy",
      },
    ],
  },
];

export const sellerMenu = [
  {
    title: "Product",
    image: iconProduct,
    link: "/sellers/products",
  },
  {
    title: "Pesanan",
    image: iconPesanan,
    link: "/sellers/orders",
  },
  {
    title: "Profil",
    image: iconProfil,
    link: "/sellers/profile",
  },
  {
    title: "Pengiriman",
    image: iconPengiriman,
    link: "/sellers/shipping",
  },
  {
    title: "Ulasan",
    image: iconUlasan,
    link: "#",
  },
];

export const members = [
  {
    name: "Hizkia Jefren Reppi",
    role: "Fullstack Developer",
    image: hizkia,
    usernameGithub: "hizkiareppi",
  },
  {
    name: "Bintang Mahaputra Ramadhan",
    role: "Frontend Web Developer",
    image: bintang,
    usernameGithub: "bintanggmr",
  },
  {
    name: "Izzul Fathul Huda",
    role: "Project Manager",
    image: izzul,
    usernameGithub: "izzulfath",
  },
  {
    name: "Citra Dewi Puspita Sari",
    role: "UI/UX Designer",
    image: citra,
    usernameGithub: "citrasyya",
  },
  {
    name: "Nasywa Zafirah Syahrani",
    role: "UI/UX Designer",
    image: nasywa,
    usernameGithub: "nasywazfh",
  },
  {
    name: "Grace Natalia Zalukhu",
    role: "Frontend Web Developer",
    image: grace,
    usernameGithub: "Gracenzl",
  },
];
