import "./globals.css";
import {Inter} from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Rosario Conde - Developer",
  description:
    "Experta en crear experiencias web excepcionales. Contacta para proyectos creativos y funcionales.",
};

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
