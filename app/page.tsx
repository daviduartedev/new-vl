import Image from "next/image";
import { TeamGrid } from "@/components/TeamGrid";

const year = new Date().getFullYear();

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <p className="header__eyebrow">CONHEÇA NOSSA EQUIPE</p>
        <div className="header__logo">
          <Image
            src="/logo.png"
            alt="Vip Lar Imobiliária"
            width={320}
            height={120}
            priority
          />
        </div>
        <p className="header__subtitle">
          Escolha um especialista e inicie uma conversa
        </p>
      </header>

      <TeamGrid />

      <footer className="footer">
        <p>
          © {year} Vip Lar Imobiliária. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
