import Image from "next/image";
import AboutPage from "@/pages/About/page";
import HeaderPages from "@/pages/Headers/page";
import OnlineConsultationPage from "@/pages/Features/OnlineConsultationPage";
import LiveLocationPage from "@/pages/Features/LiveLocationPage";
import FeedbacksPage from "@/pages/Feedbacks/page";
import DownloadPage from "@/pages/Download/page";
import FooterPage from "@/pages/Footer/page";

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
