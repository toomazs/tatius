import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Essencia } from "@/components/sections/Essencia";
import { BestSelling } from "@/components/sections/BestSelling";
import { TreasureTrail } from "@/components/sections/TreasureTrail";
import { Instagram } from "@/components/sections/Instagram";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essencia />
        <BestSelling />
        <TreasureTrail />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
