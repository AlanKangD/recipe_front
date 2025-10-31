import RecipeCard from "./RecipeCard";

type Recipe = {
  id: number;
  title: string;
  time: number;
  rating: number;
  img: string;
};

type Props = {
  recipes: Recipe[];
};

export default function RecipesForYou({ recipes }: Props) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 제목 및 부제목 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wider text-foreground mb-4 uppercase">
            RECIPES FOR YOU
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-sans">
            맞춤추천 레시피를 둘러보세요.
          </p>
        </div>

        {/* 레시피 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} r={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
