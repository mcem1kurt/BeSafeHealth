import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AccommodationPage() {
  return (
    <div>
      <Navbar />
      <header className="relative h-64 w-full">
        <Image src="/images/services/hotel-room.jpg" alt="Konaklama Hizmetleri" fill className="object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Konaklama Hizmetleri</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-black dark:text-white">
        <p>
          Sağlık turizmi yolculuğunuz boyunca, konforunuz ve rahatınız bizim önceliğimizdir. Konaklama hizmetlerimiz,
          sizin için en iyi deneyimi sunmak için özenle tasarlanmıştır. Hastaneye yakın, güvenli ve konforlu seçenekler
          arasından ihtiyacınıza uygun otel ve konaklama birimini planlıyor; giriş-çıkış, kahvaltı, oda talepleri ve
          özel isteklerinizi sizin adınıza organize ediyoruz.
        </p>
        <p>
          VIP ulaşım, tercüman desteği ve klinik randevuları ile eşgüdümlü bir programla, tedaviye odaklanırken tüm
          detayları bizim ekibimiz yönetir. Talep edilmesi halinde refakatçi için de uygun konaklama koşulları sağlanır.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}
