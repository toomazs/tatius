import Image from "next/image";

type ProductCardProps = {
  image: string;
  name: string;
  brand: string;
  price: string;
  rating?: number;
  reviews?: number;
};

export function ProductCard({
  image,
  name,
  brand,
  price,
  rating = 4.9,
  reviews = 1245,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-tatius-cream/50 aspect-square mb-3 overflow-hidden">
        <div className="absolute top-3 left-3 flex items-center gap-1 z-10 text-xs text-tatius-graphite/70">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>{rating}</span>
          <span className="text-tatius-graphite/40">({reviews.toLocaleString()})</span>
        </div>
        <button
          className="absolute top-3 right-3 z-10 text-tatius-graphite/40 hover:text-tatius-graphite transition-colors"
          aria-label="Favoritar"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm font-medium text-tatius-graphite">{name}</h3>
      <p className="text-xs text-tatius-graphite/50 mt-0.5">by {brand}</p>
      <p className="text-sm font-semibold text-tatius-graphite mt-1">{price}</p>
    </div>
  );
}
