import React from "react";
import Menu from "@/components/Headers/Menu";
import About from "@/components/Headers/About";

const HeaderPages = () => {
  return (
    <div className="overflow-hidden">
      <header className="relative z-10">
        <Menu />
      </header>
      <main className="relative pb-20 md:pb-40">
        <About />
      </main>
    </div>
  );
};

export default HeaderPages;
