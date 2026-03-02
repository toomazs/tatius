import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/ui/ProductCard";

const products = [
  {
    image: "/colar-vibrante-mix.png",
    name: "Colar Vibrante Mix",
    brand: "Tatius",
    price: "R$ 330,00",
  },
  {
    image: "/terra-e-cor.png",
    name: "Pulseira Terra & Cor",
    brand: "Tatius",
    price: "R$ 325,00",
  },
  {
    image: "/pedras-naturais.png",
    name: "Pulseira Pedras Naturais",
    brand: "Tatius",
    price: "R$ 300,00",
  },
  {
    image: "/colar-lima-lilas.png",
    name: "Colar Lima & Lilás",
    brand: "Tatius",
    price: "R$ 360,00",
  },
  {
    image: "/azul-intenso.png",
    name: "Pulseira Azul Intenso",
    brand: "Tatius",
    price: "R$ 390,00",
  },
  {
    image: "/pulseiras-ceu.png",
    name: "Mix Pulseiras Céu",
    brand: "Tatius",
    price: "R$ 450,00",
  },
];

export function BestSelling() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <SectionHeader
          title="Mais Vendidos"
          action="Ver tudo"
          actionHref="/shop"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
