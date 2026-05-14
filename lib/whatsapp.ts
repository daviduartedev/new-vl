function mensagemPadrao(nome: string): string {
  const primeiroNome = nome.trim().split(/\s+/)[0] ?? nome;
  return `Olá ${primeiroNome}, vim pela placa da Vip Lar e gostaria de agendar minha visita.`;
}

export function hrefWhatsApp(numero: string, nome: string): string {
  const texto = encodeURIComponent(mensagemPadrao(nome));
  return `https://wa.me/${numero}?text=${texto}`;
}
