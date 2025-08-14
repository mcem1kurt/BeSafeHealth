import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TransferPage() {
  return (
    <div>
      <Navbar />
      <header className="relative h-64 w-full">
        <Image src="/images/services/vip-transfer.jpg" alt="Transfer Hizmeti" fill className="object-cover blur-sm" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Transfer Hizmeti</h1>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-black dark:text-white">
        <p>
          Deneyimli ve güler yüzlü şoförlerimiz, sizi havaalanından veya istediğiniz bir noktadan alarak konaklama
          biriminize güvenli bir şekilde ulaştırır. Sağlık turizminde güvenilir bir transfer hizmeti arıyorsanız, biz
          buradayız.
        </p>
        <p>
          Uçuş bilgilerinize göre dinamik takip yapar, olası gecikmelere karşı esnek planlar uygular ve VIP araç
          seçenekleri sunarız. Tedavi günlerinizde de klinik-otel transferlerinizi zamanında gerçekleştiririz.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}
