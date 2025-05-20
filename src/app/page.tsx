import dynamic from "next/dynamic";

// Statik olarak import edilen temel bileşen
import HeaderPages from "@/pages/Headers/page";

// Dinamik import edilen bileşenler
const AboutPage = dynamic(() => import("@/pages/About/page"), {
  loading: () => (
    <div className="min-h-[300px] animate-pulse bg-gray-100"></div>
  ),
});

const OnlineConsultationPage = dynamic(
  () => import("@/pages/Features/OnlineConsultationPage"),
  {
    loading: () => (
      <div className="min-h-[300px] animate-pulse bg-gray-100"></div>
    ),
  }
);

const LiveLocationPage = dynamic(
  () => import("@/pages/Features/LiveLocationPage"),
  {
    loading: () => (
      <div className="min-h-[300px] animate-pulse bg-gray-100"></div>
    ),
  }
);

const FeedbacksPage = dynamic(() => import("@/pages/Feedbacks/page"), {
  loading: () => (
    <div className="min-h-[300px] animate-pulse bg-gray-100"></div>
  ),
});

const DownloadPage = dynamic(() => import("@/pages/Download/page"), {
  loading: () => (
    <div className="min-h-[300px] animate-pulse bg-gray-100"></div>
  ),
});

const FooterPage = dynamic(() => import("@/pages/Footer/page"), {
  loading: () => (
    <div className="min-h-[100px] animate-pulse bg-gray-100"></div>
  ),
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative">
        <HeaderPages />
      </section>
      <section className="mt-10 md:mt-0">
        <AboutPage />
      </section>
      <section>
        <OnlineConsultationPage />
      </section>
      <section>
        <LiveLocationPage />
      </section>
      <section>
        <FeedbacksPage />
      </section>
      <section>
        <DownloadPage />
      </section>
      <footer>
        <FooterPage />
      </footer>
    </main>
  );
}

// Statik sayfa üretimini etkinleştir
export const generateStaticParams = async () => {
  return [];
};

// Statik sayfa metadata
export const generateMetadata = async () => {
  return {
    title: "DentaLab - Dental Klinik Yönetim Uygulaması",
    description:
      "Dental klinik yönetimi için modern ve kullanıcı dostu bir uygulama",
  };
};
