import RecipeCard from "@/components/RecipeCard";

const recipes = [
  {
    id: "marry-me-shrimp",
    title: "마리미 쉬림프 파스타",
    time: 25,
    rating: 4.8,
    img: "/sample/shrimp.jpg",
  },
  {
    id: "baked-feta-chickpeas",
    title: "베이크드 페타 병아리콩",
    time: 20,
    rating: 4.7,
    img: "/sample/feta.jpg",
  },
  {
    id: "spam-mayo",
    title: "스팸마요 덮밥",
    time: 15,
    rating: 4.9,
    img: "/sample/spam.jpg",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-8">
      <section>
        <h1 className="text-2xl font-semibold text-foreground">
          오늘의 추천 🍳
        </h1>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((r) => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </ul>
      </section>
    </main>
  );
}
