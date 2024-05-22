import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Componente de cabeçalho
const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        {/* Conteúdo do cabeçalho */}
        <Link href={`/novasmetas/`}>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Adicionar
              </button>
       </Link>
      </div>
    </header>
  );
};

// Componente de rodapé
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        {/* Conteúdo do rodapé */}
        
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}