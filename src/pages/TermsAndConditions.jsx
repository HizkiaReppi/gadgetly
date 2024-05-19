import Button from "../components/atoms/Button";

const TermsAndConditions = () => {
  const redirectBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-semibold">Syarat dan Ketentuan</h1>
      <div className="text-justify text-lg leading-relaxed">
        <h2 className="my-3 text-2xl font-semibold uppercase">1. UMUM</h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Ketentuan Layanan Gadgetly.</strong> Ketentuan layanan ini
            merupakan perjanjian antara pengguna Gadgetly (&quot;Anda&quot;) dan
            PT Gadgetly Indonesia (&quot;Gadgetly&quot; atau &quot;Kami&quot;)
            sehubungan dengan penggunaan layanan kami pada situs web Gadgetly,
            serta setiap dan seluruh layanan, fitur, dan konten yang tersedia di
            dalamnya. Mohon membaca Ketentuan Layanan Kami dengan seksama
            sehingga Anda dapat memahami seluruhnya. Dengan mengunjungi,
            mendaftar, atau menggunakan Website, Anda telah membaca, memahami,
            dan menyetujui untuk tunduk pada Ketentuan Layanan ini dan seluruh
            ketentuan terkait lainnya yang menjadi bagian yang tidak terpisahkan
            dari Ketentuan Layanan ini, termasuk namun tidak terbatas pada
            Ketentuan Privasi dan Kebijakan Refund; beserta setiap dan seluruh
            perubahan, penambahan, dan/atau pembaruan dari waktu ke waktu.
          </li>
          <li>
            <strong>Perubahan Ketentuan Layanan.</strong> Gadgetly dapat setiap
            saat mengganti, menambah, atau mengurangi Ketentuan Layanan ini
            dengan tetap mengikat Anda untuk setiap penggantian, perubahan, atau
            pengurangan Ketentuan Layanan. Anda harus melihat halaman Ketentuan
            Layanan ini secara berkala untuk tetap mengikuti Ketentuan Layanan
            yang berlaku dan mengikat Anda.
          </li>
          <li>
            <strong>Pengunjung yang Terdaftar.</strong> Layanan pada situs web
            tersedia untuk dilihat setiap pengunjung, namun untuk dapat
            mengakses dan menggunakan setiap layanan yang kami tawarkan,
            pengunjung haruslah menjadi pengunjung yang telah terdaftar dan
            melaksanakan pemesanan layanan. Anda sebagai Pengunjung harus
            menggunakan email yang Anda pilih untuk melakukan pendaftaran.
            Sebagai pengunjung yang terdaftar, Anda diwajibkan untuk mengikuti
            Ketentuan Layanan ini.
          </li>
        </ol>

        <p className="ml-4">
          Kami peduli dengan privasi Anda, maka dari itu setelah Anda selesai
          melakukan pendaftaran, seluruh informasi pribadi yang Anda berikan
          pada Kami akan Kami tangani dan jaga sesuai dengan Kebijakan Pribadi
          di Indonesia yang merupakan bagian tidak terpisahkan dari Ketentuan
          Layanan ini.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          2. KEWAJIBAN PENGGUNA
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Dalam menggunakan situs web, Anda dilarang untuk:</strong>
            <ul>
              <li>
                menggunakan Gadgetly dalam kondisi atau cara apapun yang dapat
                merusak, melumpuhkan, membebani, atau mengganggu server atau
                jaringan Gadgetly. Anda juga tidak diperbolehkan untuk mengakses
                layanan, akun pengguna, sistem komputer atau jaringan secara
                tidak sah, dengan cara hacking, password mining, atau cara tidak
                sah lainnya.
              </li>
              <li>
                mengunduh, menyimpan, membuat salinan, membagikan, mengunggah
                ulang, atau menyebarluaskan dengan cara apapun juga dan media
                apapun juga isi dari situs web tanpa izin tertulis dari
                Gadgetly.
              </li>
              <li>
                melanggar hak kekayaan intelektual milik kami atau pihak ketiga
                manapun yang terdapat dalam situs web.
              </li>
              <li>
                membuat tiruan dari situs web maupun sebagian atau seluruh
                konten, produk, atau layanan dari situs web.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Anda hanya boleh menggunakan fitur dan layanan Gadgetly untuk hal
              dan tujuan yang tidak bertentangan dengan hukum dan
              perundang-undangan yang berlaku.
            </strong>{" "}
            Gadgetly akan bekerja sama secara penuh dengan setiap pejabat dan
            penegak hukum atau pengadilan yang meminta atau mengarahkan
            pengelola Gadgetly untuk mengungkapkan identitas dari siapapun yang
            memuat materi atau informasi yang melanggar hukum.
          </li>
        </ol>
        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          3. PELANGGARAN PENGGUNAAN YANG DILARANG
        </h2>
        <p>
          Bila nantinya kami menemukan bahwa Anda melakukan pelanggaran atas
          Penggunaan Layanan ini, Gadgetly berhak berdasarkan kebijakan Kami
          untuk mencabut Hak Akses yang Anda miliki, baik sementara ataupun
          permanen. Selain itu, pencabutan Hak Akses atas langganan atau
          membership Anda akibat dari pelanggaran atas Penggunaan Layanan ini
          tidak memberikan hak bagi Anda untuk meminta pengembalian biaya
          pendaftaran maupun tuntutan apapun juga akibat dicabutnya Hak Akses
          tersebut. Pencabutan Hak Akses tidak membatasi atau mengurangi hak
          Kami untuk mengambil setiap langkah dan seluruh tindakan hukum yang
          diperlukan untuk menegakkan hak-hak Kami.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          4. KETENTUAN LAYANAN
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Melakukan Pemesanan</strong>
            <p>
              Ketika Anda memulai berlangganan salah satu atau lebih layanan
              Kami, Anda dianggap memiliki keinginan untuk berlangganan layanan
              tersebut dengan sesuai pada syarat dan ketentuan berikut. Semua
              bergantung pada jenis layanan dan konfirmasi harga layanan.
            </p>
          </li>
          <li>
            <strong>Pembayaran.</strong>
            <p>
              Ketika Anda memesan, Anda akan menerima e-mail konfirmasi
              penerimaan pesanan Anda dan bahwa order Anda sedang menunggu
              pembayaran. Perhatikan bahwa email konfirmasi ini hanya akan
              menjadi konfirmasi dan bukan merupakan finalisasi pesanan Anda
              atau pembentukan kontrak penjualan.
            </p>
          </li>
          <li>
            <strong>Harga dan Pengembalian Dana.</strong>
            <p>
              Kami akan selalu melakukan yang terbaik untuk memastikan bahwa
              semua rincian, deskripsi, ketersediaan, dan harga layanan yang
              terdapat di situs web adalah akurat. Namun, kesalahan mungkin
              dapat terjadi berkala. Jika kami menemukan kesalahan teknis yang
              berada di bawah kendali penuh Kami yang mengakibatkan kegagalan
              dalam memberikan layanan, maka Gadgetly mungkin bisa membantu
              memfasilitasi permohonan pengembalian dana.
            </p>
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          5. HAK DAN LISENSI
        </h2>
        <ol type="a" className="ml-4 list-[alpha]">
          <li>
            <strong>Hak Milik.</strong>
            <p>
              Seluruh rancangan desain, gambar, karya seni, teks, audio, video
              serta kode pemrograman (selanjutnya disebut &quot;Konten&quot;)
              dalam situs ini adalah hak cipta milik Gadgetly. Anda tidak
              diperkenankan untuk memodifikasi, menyalin, mengubah, atau
              menambah rancangan desain, gambar, karya seni, teks, audio, video
              serta kode pemrograman di fasilitas ini dalam keadaan atau kondisi
              apapun.
            </p>
          </li>
          <li>
            <strong>Hak Kekayaan Intelektual.</strong>
            <p>
              Anda dengan ini mengakui dan menyetujui bahwa situs web berikut
              seluruh isi yang ada di dalamnya, termasuk tetapi tidak terbatas
              pada aspek- aspek seperti nama, logo, kode program, desain, merek
              dagang, teknologi, basis data, proses, dan model bisnis, semuanya
              dilindungi oleh hak cipta, merek dagang, paten, hak moral, hak
              ekonomi, dan hak kekayaan intelektual lainnya yang Kami pegang dan
              miliki.
            </p>
          </li>
        </ol>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          6. BATASAN TANGGUNG JAWAB
        </h2>
        <p>
          Kami selalu berusaha untuk menyediakan layanan dan konten edukasi yang
          bermanfaat melalui situs web Gadgetly. Namun Kami paham bahwa Kami
          tidak dapat sepenuhnya menjamin ketepatan waktu, akurasi, kesesuaian,
          kualitas, keamanan dan kenyamanan dari situs web Kami akan selalu
          sesuai dengan keinginan dan ekspektasi Anda. Kami akan mengusahakan
          sebisa mungkin keamanan dan kenyamanan Anda dalam menggunakan situs
          web Kami, akan tetapi kami tidak dapat menjamin bahwa situs web Kami
          akan selalu aman maupun terbebas dari bug dan virus.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          7. HUKUM YANG BERLAKU
        </h2>
        <p>
          Ketentuan Penggunaan akan diatur oleh dan ditafsirkan sesuai dengan
          hukum yang berlaku di Indonesia, tanpa mempengaruhi prinsip-prinsip
          konflik hukum. Anda setuju bahwa setiap dan seluruh tuntutan yang
          mungkin timbul sehubungan dengan Ketentuan Layanan ini
          (&quot;Sengketa&quot; atau &quot;Konflik&quot;) akan diupayakan untuk
          diselesaikan secara damai dalam waktu 60 (enam puluh) hari sejak Anda
          memberikan pemberitahuan kepada Kami.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold uppercase">
          8. KONTAK KAMI
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

export default TermsAndConditions;
