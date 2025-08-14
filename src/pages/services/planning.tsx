import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TravelPlanningPage() {
  return (
    <div>
      <Navbar />
      <header className="relative h-64 w-full">
        <Image src="/images/services/map-plane.jpg" alt="Seyahat Planlaması" fill className="object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Seyahat Planlaması</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-black dark:text-white">
        <p>
          Sağlık turizminde size en iyi hizmeti sunmak için buradayız. Seyahat planlaması uzman ekibimiz; uçuşlar,
          konaklama, transferler ve klinik randevularını tek bir programda birleştirerek sizin için unutulmaz ve sorunsuz
          bir deneyim oluşturur.
        </p>
        <p>
          Tercihlerinize göre esnek seçenekler sunar, zaman yönetimini optimize eder ve tüm süreçleri önceden
          koordine ederiz. Böylece siz sadece sağlıklı ve keyifli bir yolculuğa odaklanırsınız.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}
