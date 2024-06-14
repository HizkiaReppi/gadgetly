import Profile from "../components/molecules/Profile";
import { members } from "../constants/data";

const AboutUs = () => {
  return (
    <>
      <section className="mx-10 mt-10 md:mx-20 lg:mx-28">
        <h1 className="mb-3 text-lg font-semibold text-primary-500 md:text-2xl lg:text-3xl">
          Tentang Gadgetly
        </h1>
        <p className="text-justify text-base leading-8">
          Selamat datang di Gadgetly, destinasi e-commerce terpercaya yang
          didedikasikan untuk memenuhi kebutuhan Anda akan gadget bekas
          berkualitas. Kami memahami bahwa teknologi berkembang pesat dan
          kebutuhan akan perangkat terbaru terus meningkat, namun tidak selalu
          perlu mengorbankan anggaran besar. Di Gadgetly, kami menyediakan
          berbagai macam gadget bekas yang telah diperiksa dengan cermat untuk
          memastikan kualitas dan fungsionalitas terbaik. Misi kami adalah
          memberikan akses kepada masyarakat untuk memiliki gadget impian mereka
          dengan harga yang lebih terjangkau tanpa harus mengorbankan kualitas.
        </p>
        <p className="mt-5 text-justify text-base leading-8">
          Di Gadgetly, kami berkomitmen untuk menghadirkan pengalaman belanja
          online yang aman, nyaman, dan menyenangkan. Setiap produk yang
          tersedia di platform kami dilengkapi dengan deskripsi yang jelas dan
          detail, serta foto-foto yang menunjukkan kondisi aktual dari setiap
          gadget. Kami juga menawarkan jaminan kepuasan pelanggan melalui
          kebijakan pengembalian yang mudah dan dukungan pelanggan yang
          responsif. Dengan demikian, Gadgetly tidak hanya berperan sebagai
          tempat jual beli gadget bekas, tetapi juga sebagai mitra terpercaya
          dalam membantu Anda menemukan gadget terbaik sesuai kebutuhan dan
          anggaran Anda. Bergabunglah dengan ribuan pelanggan kami yang telah
          merasakan manfaat dari berbelanja di Gadgetly dan temukan gadget
          idaman Anda hari ini!
        </p>
      </section>
      <section className="mx-10 mt-10 md:mx-20 lg:mx-28">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-primary-500 md:text-2xl lg:text-3xl">
            Tentang 7Teen
          </h2>
          <p className="text-justify text-base leading-8">
            Perkenalkan kami, 7Teen, sebuah tim inovatif yang terdiri dari
            individu-individu berbakat yang berasal dari Grup{" "}
            <em>
              Massive Challenge Project Magang dan Studi Independen Program
              Celerates Acceleration Program UI/UX Design & Web Development
            </em>
            . Dengan misi untuk menghadirkan solusi digital yang cemerlang dan
            mendukung perkembangan teknologi yang lebih maju. Dengan semangat
            dan dedikasi, kami berkomitmen untuk menciptakan pengalaman pengguna
            yang mengesankan dan produk digital yang intuitif serta fungsional.
          </p>
        </div>
        <div>
          <h3 className="mb-3 mt-10 text-lg font-semibold text-primary-500 md:text-2xl lg:text-3xl">
            Tujuan 7Teen
          </h3>
          <p className="text-justify text-base leading-8">
            Tujuan kami adalah untuk memberikan kontribusi nyata dalam dunia
            teknologi dengan menciptakan desain antarmuka pengguna (UI) yang
            menarik dan pengalaman pengguna (UX) yang efisien. Kami berupaya
            untuk menggabungkan estetika dan fungsionalitas dalam setiap proyek
            yang kami kerjakan, memastikan bahwa setiap produk yang kami
            hasilkan tidak hanya tampak menarik tetapi juga mudah digunakan dan
            mampu memenuhi kebutuhan pengguna dengan sempurna.
          </p>
        </div>
      </section>
      <section className="mx-10 mt-10 md:mx-20 lg:mx-28">
        <h2 className="text-center text-lg font-semibold text-primary-500 md:text-2xl lg:text-3xl">
          Perkenalkan Tim Kami
        </h2>
        <div className="my-10 grid grid-cols-2 justify-items-center gap-5 lg:grid-cols-3">
          {members.map((member, index) => (
            <Profile
              key={index}
              image={member.image}
              name={member.name}
              position={member.role}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
