import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-20 bg-white">
      <div className="px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-10 xl:gap-14 h-[80vh] md:h-[88vh] py-10">
          {/* 1. Left photo — col 1-2, bottom-aligned */}
          <div className="hidden lg:flex col-span-2 items-end">
            <div className="relative w-full h-[70%]">
              <Image
                src="/foto2.png"
                alt="Colar lima e lilás"
                fill
                className="object-cover"
                sizes="15vw"
              />
            </div>
          </div>

          {/* 2. Text + button — col 3-6 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[1.08] text-tatius-graphite mb-8">
              nasce da
              <br />
              <span className="text-tatius-brown italic">gente.</span>
              <br />
              transforma
              <br />
              em <span className="text-tatius-brown italic">você.</span>
            </h1>
            <div>
              <Button href="/shop" size="md">
                COMPRAR AGORA
              </Button>
            </div>
          </div>

          {/* 3. Large main photo — col 7-10 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 relative">
            <Image
              src="/foto6.png"
              alt="Pulseiras de pedras coloridas"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* 4. Right photo — col 11-12, top-aligned */}
          <div className="hidden lg:flex col-span-2 items-start">
            <div className="relative w-full h-[80%]">
              <Image
                src="/foto5.png"
                alt="Colar azul intenso"
                fill
                className="object-cover"
                sizes="15vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
