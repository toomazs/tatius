import Image from "next/image";

export function Essencia() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#efe8d8" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <div className="relative aspect-[4/5] max-h-[600px]">
            <Image
              src="/foto1.jpg"
              alt="TATIUS - nossa essência"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: text */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "#7f3717" }}
            >
              Nossa Essência
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] text-tatius-graphite mb-8">
              não sou minimalista,
              <br />
              <span className="italic" style={{ color: "#7f3717" }}>
                mas sou chic.
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-tatius-graphite/80 mb-6 max-w-lg">
              a TATIUS quer trazer a liberdade em sobrepor, em criar, em
              universalizar. misturar, fluir em cores e estilos.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-tatius-graphite/80 mb-6 max-w-lg">
              que mulheres e homens livres protagonizem suas ideias, sejam suas
              próprias tendências, sejam originais, fortalecidos por seus
              detalhes.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-tatius-graphite/80 max-w-lg">
              a TATIUS quer ser detalhe para quem transforma ideias de dentro
              para fora.{" "}
              <span className="italic font-medium" style={{ color: "#7f3717" }}>
                quer encorajar a autenticidade.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
