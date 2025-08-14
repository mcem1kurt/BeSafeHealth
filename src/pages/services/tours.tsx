import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ToursPage() {
  return (
    <div>
      <Navbar />
      <header className="relative h-64 w-full">
        <Image src="/images/services/istanbul.jpg" alt="Turistik Geziler" fill className="object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Turistik Geziler</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-black dark:text-white">
        <p>
          Size tıbbi ihtiyaçlarınızı karşılamanın yanı sıra, seyahatinizi daha keyifli ve tatmin edici hale getirmek için
          tasarlanmış özel turistik programlar sunuyoruz. İstanbul’un tarihi yarımadası, boğaz turları ve kültürel deneyim
          paketleri ile unutulmaz anılar biriktirmenizi sağlarız.
        </p>
        <p>
          Rehberli turlardan kişisel planlara kadar geniş seçenekler sunar, programınızı tedavi süreçlerinize uygun şekilde
          esnek olarak planlarız.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}
