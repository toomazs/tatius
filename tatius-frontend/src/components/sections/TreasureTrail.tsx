import Image from "next/image";

const articles = [
  {
    image: "/foto1.jpg",
    tag: "editorial",
    title: "a liberdade de sobrepor",
    description:
      "misturar, fluir em cores e estilos. sejam suas próprias tendências.",
  },
  {
    image: "/foto3.png",
    tag: "coleção",
    title: "céu aberto",
    description:
      "pulseiras que carregam a leveza das nuvens e a imensidão do azul.",
  },
  {
    image: "/foto6.png",
    tag: "lifestyle",
    title: "terra & cor",
    description:
      "fortalecidos por seus detalhes. a TATIUS quer ser detalhe para quem transforma.",
  },
];

export function TreasureTrail() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#efe8d8" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-tatius-graphite">
            Diário <em className="italic" style={{ color: "#7f3717" }}>Tatius</em>
          </h2>
          <a
            href="#"
            className="text-sm tracking-[0.1em] uppercase text-tatius-graphite hover:opacity-70 transition-opacity"
          >
            Ver tudo
          </a>
        </div>

        {/* Editorial cards — horizontal with large image + text side */}
        <div className="flex flex-col gap-16">
          {articles.map((article, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[16/10] overflow-hidden ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className={isReversed ? "md:order-1 md:text-right" : ""}>
                  <p
                    className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
                    style={{ color: "#ee8f4b" }}
                  >
                    {article.tag}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-tatius-graphite leading-snug mb-4">
                    {article.title}
                  </h3>
                  <p className="text-sm md:text-base text-tatius-graphite/60 leading-relaxed max-w-md italic">
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-6 text-xs font-semibold tracking-[0.15em] uppercase text-tatius-graphite border-b border-tatius-graphite/30 pb-1 hover:border-tatius-graphite transition-colors"
                  >
                    Ler mais
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
