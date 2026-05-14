import Image from "next/image";
import { corretoras, ctaTexto } from "@/lib/corretoras";
import { hrefWhatsApp } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function TeamGrid() {
  return (
    <section className="team" aria-label="Equipe de corretoras">
      {corretoras.map(({ nome, cargo, foto, whatsapp }) => {
        const href = hrefWhatsApp(whatsapp, nome);
        return (
          <article key={whatsapp} className="card">
            <a
              className="card__link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar com ${nome} no WhatsApp`}
            >
              <div className="card__photo">
                <Image
                  src={foto}
                  alt={`Foto de ${nome}`}
                  fill
                  sizes="(max-width: 360px) 46vw, (max-width: 768px) 50vw, (max-width: 1199px) 33vw, 16vw"
                  loading="lazy"
                />
              </div>
              <div className="card__body">
                <p className="card__role">{cargo}</p>
                <h2 className="card__name">{nome}</h2>
                <span className="card__cta">
                  <WhatsAppIcon />
                  <span>{ctaTexto}</span>
                </span>
              </div>
            </a>
          </article>
        );
      })}
    </section>
  );
}
