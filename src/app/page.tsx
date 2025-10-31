import CurationList from "@/components/CurationList";
import RecipesForYou from "@/components/RecipesForYou";

const recipes = [
  {
    id: 1,
    title: "마리미 쉬림프 파스타",
    time: 25,
    rating: 4.8,
    img: "/sample/shrimp.jpg",
  },
  {
    id: 2,
    title: "베이크드 페타 병아리콩",
    time: 20,
    rating: 4.7,
    img: "/sample/feta.jpg",
  },
  {
    id: 3,
    title: "스팸마요 덮밥",
    time: 15,
    rating: 4.9,
    img: "/sample/spam.jpg",
  },
];

const curations = [
  {
    id: 1,
    title: "주말 브런치 레시피 모음",
    img: "/sample/shrimp.jpg",
  },
  {
    id: 2,
    title: "5분이면 끝! 간단 요리",
    img: "/sample/feta.jpg",
  },
  {
    id: 3,
    title: "건강한 한 끼 식단",
    img: "/sample/spam.jpg",
  },
  {
    id: 4,
    title: "홈파티 메뉴 추천",
    img: "/sample/shrimp.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <RecipesForYou recipes={recipes} />
      <CurationList curations={curations} />
    </main>
  );
}