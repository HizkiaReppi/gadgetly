import Button from "../components/atoms/Button";

const PrivacyPolicy = () => {
  const redirectBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-semibold">Kebijakan Privasi</h1>
      <div className="text-justify text-lg leading-relaxed">
        <h2 className="my-3 text-2xl font-semibold uppercase">
          1. INFORMASI PRIBADI YANG KAMI AMBIL DARI PENGGUNA
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Informasi yang Anda berikan.</strong> Kami mengumpulkan
            informasi pribadi yang Anda berikan secara sukarela saat mendaftar,
            memesan produk tertentu Informasi ini mencakup, namun tidak terbatas
            pada nama lengkap, nomor telepon, alamat email.
          </li>
          <li>
            <strong>Informasi yang Gadgetly kumpulkan.</strong> Kami juga
            mengumpulkan informasi secara otomatis saat Anda menggunakan fitur
            di dalam situs web kami, termasuk jejak pencarian Anda dalam situs
            web. Informasi ini digunakan untuk memberikan statistik umum tentang
            penggunaan situs web atau aplikasi.
          </li>
          <li>
            <strong>Informasi yang Gadgetly terima dari sumber lain.</strong>{" "}
            Dalam beberapa situasi, kami dapat menerima informasi saat Anda
            menggunakan layanan atau situs web lain yang kami operasikan. Kami
            juga dapat menerima informasi dari mitra bisnis, jaringan
            periklanan, penyedia pencarian informasi, mitra pembayaran, atau
            dompet digital. Kami akan melakukan verifikasi terhadap informasi
            yang kami terima dari sumber lain sesuai dengan peraturan yang
            berlaku.
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          2. INFORMASI YANG DAPAT TERIDENTIFIKASI SECARA PERSONAL
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Mendaftar pada Gadgetly.</strong> Situs web kami dapat
            diakses secara umum dengan melakukan proses pendaftaran gratis yang
            diperlukan untuk mengakses informasi dan layanan yang kami tawarkan
            secara penuh. Pendaftaran pada situs web dilakukan dengan memberikan
            nama, alamat email, dan password. Dengan mendaftar dan menggunakan
            situs web kami, Anda dianggap setuju pada Syarat dan Ketentuan
            Keanggotaan kami.
          </li>
          <li>
            <strong>Survei Pengguna dan Riset Pasar.</strong> Gadgetly dapat
            mengumpulkan informasi dari pengguna terkait dengan survei pengguna
            dan riset pasar yang kami selenggarakan. Informasi kami kumpulkan
            melalui situs web, aplikasi, telepon, atau melalui surat. Informasi
            yang Anda berikan melalui survei pengguna dan riset pasar dapat
            dibagikan dengan pengiklan dan mitra, kecuali sebelumnya ada
            pemberitahuan yang menyatakan sebaliknya pada saat pengumpulan
            informasi.
          </li>
          <li>
            <strong>Promosi dan Diskon</strong> Kami dapat mengirimkan informasi
            mengenai berbagai promosi dan diskon yang disediakan oleh mitra
            kami. Kami akan menawarkan promosi dan diskon tersebut kepada
            pengguna, serta memberitahu mengenai informasi yang dibutuhkan dan
            harus diberikan kepada mitra kami.
          </li>
        </ol>
        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          3. INFORMASI YANG DIKUMPULKAN MENGGUNAKAN TEKNOLOGI
        </h2>

        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <h3>Cookies dan Teknologi Lainnya</h3>
            <p>
              Saat Anda menggunakan platform kami, kami dapat menempatkan
              sejumlah cookies pada browser Anda. Cookies adalah sebagian data
              yang disimpan di browser atau komputer Anda yang berisi informasi
              tentang Anda. Kami menggunakan cookie untuk mengelola sesi di
              platform kami. Untuk menggunakan platform kami, pengguna harus
              mengaktifkan cookie. Cookie yang kami gunakan adalah cookie ID
              sesi, yang berarti ketika Anda menutup browser, cookie tersebut
              dihapus. Kami menggunakan cookie dengan tujuan pengoperasian
              platform, mengenali dan menghitung jumlah pengunjung, serta untuk
              memperbaiki dan meningkatkan kualitas layanan platform. Cookie
              juga digunakan untuk mengenali Anda saat kembali ke platform,
              memungkinkan Anda mengingat kata sandi akun Anda agar secara
              otomatis terisi ketika Anda melakukan login. Kami tidak akan
              menggunakan cookie untuk mengumpulkan informasi pribadi dari
              pengguna yang tidak dimaksudkan untuk disampaikan kepada kami.
            </p>
          </li>
          <li>
            <h3>Alamat IP</h3>
            <p>
              Kami menyimpan alamat IP (Internet Protocol) atau lokasi komputer
              Anda di Internet untuk mengelola platform dan administrasi sistem
              kami, termasuk pencarian sumber masalah (troubleshooting),
              analisis data, pengujian, serta tujuan statistik lainnya. Kami
              menggunakan alamat IP secara agregat untuk mengetahui lokasi
              pengguna yang mengakses platform.
            </p>
          </li>
          <li>
            <h3>Log Files</h3>
            <p>
              Kami menyimpan file log yang berisi informasi aktivitas di
              platform kami. File log ini disimpan dalam bentuk agregat dan
              digunakan untuk menganalisis penggunaan platform.
            </p>
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          4. PERLINDUNGAN DAN KEAMANAN INFORMASI
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            Kami berkomitmen untuk memberikan perlindungan yang sebanding dengan
            komitmen kami terhadap privasi Pengguna berdasarkan Ketentuan
            Privasi ini terhadap seluruh informasi Pengguna yang kami kumpulkan.
          </li>
          <li>
            Informasi Pengguna yang diberikan akan disimpan oleh kami selama
            Pengguna masih aktif menggunakan layanan situs web kami atau hingga
            Pengguna memberikan konfirmasi untuk menghapus informasi mereka.
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          5. HAK ANDA
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            Anda memiliki hak untuk meminta penghapusan informasi Anda dari
            situs web atau menarik persetujuan Anda terhadap pengumpulan,
            penggunaan, atau pengungkapan informasi Anda dengan memberikan
            konfirmasi tertulis kepada kontak yang kami sediakan dalam Ketentuan
            Privasi ini.
          </li>
          <li>
            Anda berhak untuk meminta akses dan/atau verifikasi terhadap
            informasi Anda yang disimpan oleh Gadgetly dengan menghubungi kami
            melalui kontak yang tersedia dalam Ketentuan Privasi ini.
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          6. PERUBAHAN KETENTUAN PRIVASI
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            Gadgetly berhak untuk mengubah atau menambah kebiajkan privasi
            Gadgetly kapan saja, agar sesuai dengan perkembangan layanan dan
            kebutuhan kami serta perubahan hukum yang relevan.
          </li>
          <li>
            Setiap perubahan yang kami buat akan diumumkan di halaman ini dan,
            jika diperlukan, akan disampaikan kepada Anda melalui e-mail.
            Silakan kunjungi halaman ini secara berkala untuk memeriksa adanya
            perubahan atau tambahan pada kebijakan privasi Gadgetly.
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          7. KONTAK KAMI
        </h2>
        <p>
          Jika Anda memiliki pertanyaan atau kekhawatiran mengenai syarat dan
          ketentuan ini, jangan ragu untuk menghubungi kami lewat Email di {" "}
          <a href="mailto:support@gadgetly.com">support@gadgetly.com</a>
        </p>

        <p className="mt-5 text-base font-medium italic">
          Terakhir diperbaharui: 20 Mei 2024
        </p>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Button onClick={redirectBack}>Kembali</Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
