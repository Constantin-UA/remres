import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400"], subsets: ["latin"] });
type OpenGraph = {
  card: string;
  site: string;
  images: string;
};

export const metadata: Metadata = {
  title: "РЕМРЕСУРС",
  description:
    "РЕМРЕСУРС - мы являемся ведущими посредниками в области ремонта кранового оборудования, металлообработки, литья, а также предоставляем комплексные услуги по ремонту оборудования для промышленных предприятий и атомной энергетики. Наша команда гордится многолетним опытом в этих ключевых сферах, обеспечивая надежность и качество в каждом проекте. Мы также специализируемся в ремонте машин, установок, и поставке необходимых комплектующих для железнодорожного транспорта в Украине.",
  openGraph: {
    card: "summary_large_image",
    site: "https://remresurs.com",
    images: "https://remresurs.com/meta_img.webp",
  } as OpenGraph | null,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
