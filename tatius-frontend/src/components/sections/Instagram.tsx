import Image from "next/image";

const instagramPosts = [
  { image: "/foto1.jpg", aspectClass: "aspect-[3/4]" },
  { image: "/foto4.png", aspectClass: "aspect-square", offset: true },
  { image: "/foto3.png", aspectClass: "aspect-[3/4]" },
  { image: "/foto6.png", aspectClass: "aspect-square", offset: true },
  { image: "/foto7.png", aspectClass: "aspect-[3/4]" },
  { image: "/foto5.png", aspectClass: "aspect-square", offset: true },
];

export function Instagram() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm tracking-[0.15em] uppercase text-tatius-graphite/40 mb-2">
            Siga-nos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic text-tatius-graphite">
            Instagram
          </h2>
        </div>
        <p className="text-center text-sm text-tatius-graphite/50 mb-12 max-w-md mx-auto">
          Diga oi para{" "}
          <span className="text-tatius-graphite font-medium">@tatiusjoias</span>{" "}
          e acompanhe nossas coleções
        </p>

        {/* Staggered image row */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <div
              key={i}
              className={`group cursor-pointer ${post.offset ? "md:mt-8" : ""}`}
            >
              <div className={`relative ${post.aspectClass} overflow-hidden`}>
                <Image
                  src={post.image}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-tatius-graphite/0 group-hover:bg-tatius-graphite/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
