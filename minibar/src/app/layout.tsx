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
    <header className="">
      <div className=" p-5 text-xl font-serif space-x-4 flex flex-row justify-between italic">
      <h1 className="text-2xl text-sky-950">Minibar</h1>
      <div className="space-x-4 order-last">
        <nav className="flex space-x-4 text-slate-600">
          <p>Login</p>
          <p>Registrar</p>
        </nav>
      </div>
      </div>
      
    </header>
  );
};

// Componente de rodapé
const Footer = () => {
  return (
    <footer className="">
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
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}