import Link from "next/link";

type Props = {
  r: {
    id: string;
    title: string;
    time: number;
    rating: number;
    img: string;
  };
};

export default function RecipeCard({ r }: Props) {
  return (
    <li className="group overflow-hidden rounded-2xl border border-gray-200 bg-background shadow hover:shadow-lg hover:-translate-y-1 transition">
      <Link href={`/recipes/${r.id}`} className="block">
        <img
          src={r.img}
          alt={r.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform"
        />
        <div className="p-4 space-y-1">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {r.title}
          </h3>
          <p className="text-sm text-neutral-500">
            ⏱ {r.time}분&nbsp;&nbsp;★ {r.rating}
          </p>
        </div>
      </Link>
    </li>
  );
}
