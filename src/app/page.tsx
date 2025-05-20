import Image from "next/image";
import AboutPage from "@/pages/About/page";
import HeaderPages from "@/pages/Headers/page";
import OnlineConsultationPage from "@/pages/Features/OnlineConsultationPage";

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
    </main>
  );
}
