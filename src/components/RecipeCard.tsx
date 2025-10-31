import Image from "next/image";
import Link from "next/link";

type Props = {
  r: {
    id: number;
    title: string;
    time: number;
    rating: number;
    img: string;
  };
  large?: boolean;
};

export default function RecipeCard({ r, large = false }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-background shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <Link href={`/recipes/${r.id}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={r.img}
            alt={r.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4 space-y-1">
          <h3 className={`${large ? 'text-xl' : 'text-lg'} font-semibold text-foreground truncate`}>
            {r.title}
          </h3>
          <p className="text-sm text-neutral-500 font-sans">
            ⏱ {r.time}분&nbsp;&nbsp;★ {r.rating}
          </p>
        </div>
      </Link>
    </div>
  );
}
