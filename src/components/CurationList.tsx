"use client";

import Link from "next/link";
import CurationCard from "./CurationCard";

type Curation = {
  id: number;
  title: string;
  img: string;
};

type Props = {
  curations: Curation[];
};

export default function CurationList({ curations }: Props) {

  const scrollLeft = () => {
    const container = document.getElementById("curation-slider");
    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("curation-slider");
    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 헤더 */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wider text-foreground mb-4 uppercase">
                CURATION LIST
              </h2>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-sans max-w-2xl">
                우리의식탁만의 큐레이션으로 고민 없이 맛있는 식탁을 차려보세요.
              </p>
            </div>
            <Link
              href="/curations"
              className="flex items-center gap-2 text-neutral-700 hover:text-foreground transition-colors font-sans text-sm md:text-base whitespace-nowrap self-center sm:self-start"
            >
              <span>더 많은 레시피 보러가기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* 큐레이션 카드 슬라이더 */}
        <div className="relative">
          {/* 데스크톱: 그리드 레이아웃 */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {curations.map((curation) => (
              <CurationCard key={curation.id} {...curation} />
            ))}
          </div>

          {/* 모바일/태블릿: 슬라이더 */}
          <div className="lg:hidden relative">
            <div
              id="curation-slider"
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {curations.map((curation) => (
                <div key={curation.id} className="snap-start flex-shrink-0">
                  <CurationCard {...curation} />
                </div>
              ))}
            </div>
            
            {/* 네비게이션 버튼 (선택적) */}
            {curations.length > 2 && (
              <>
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 hidden sm:block"
                  aria-label="이전 큐레이션 보기"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 hidden sm:block"
                  aria-label="다음 큐레이션 보기"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
