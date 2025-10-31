import { Noto_Sans_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "레시피",
  description: "오늘 뭐 먹지? 전문가가 엄선한 레시피",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSans.variable}`}>
      <body className="min-h-dvh bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
