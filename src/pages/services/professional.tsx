import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProfessionalServicePage() {
  return (
    <div>
      <Navbar />
      <header className="relative h-64 w-full">
        <Image src="/images/services/medical-tourism.jpg" alt="Profesyonel Hizmet" fill className="object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Profesyonel Hizmet</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-black dark:text-white">
        <p>
          Sağlık turizminde, sizin sağlığınız ve memnuniyetiniz bizim önceliğimizdir. Deneyimli ve uzman bir ekip olarak,
          size en üst düzeyde profesyonel sağlık hizmetleri sunmaktan gurur duyuyoruz. Akredite kurumlarla iş birliği
          yapar, multidisipliner yaklaşım ile tanı ve tedavi süreçlerini şeffaf biçimde yönetiriz.
        </p>
        <p>
          Her adımınızda yanınızda olan koordinasyon ekibimiz, doktor görüşmeleri, ameliyat planlaması, takip ve
          kontrollerinizde rehberlik eder; konforlu ve güvenli bir deneyim yaşamanızı sağlar.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}
