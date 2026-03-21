// ... (funções anteriores como loadPriceBanner)

function loadPriceBanner() {
  console.log("Tentando carregar o banner..."); // Isso vai aparecer no F12 do navegador
  const container = document.getElementById("cta-subscription-placeholder");

  if (container) {
    container.innerHTML = `
        <section class="w-full bg-[#FFC72C] py-10 px-6 lg:px-24 border-y border-black/5">
          <div class="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex flex-col gap-2 text-center md:text-left">
              <h2 class="text-2xl lg:text-3xl font-black text-white leading-tight">
                Aproveite Pear TV grátis por 1 semana
              </h2>
              <p class="text-white/90 font-medium text-sm lg:text-base">
                Assista a centenas de séries e filmes exclusivos, com lançamentos todas as semanas.
              </p>
            </div>
            <div class="flex flex-col items-center md:items-end gap-3">
              <button class="bg-white text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                Aceite o período grátis
              </button>
              <div class="text-center md:text-right">
                <p class="text-white/80 text-[12px] font-bold">
                  7 dias grátis, depois <span class="text-white underline">R$ 29,90/mês</span>
                </p>
                <a href="#" class="text-white/60 text-[10px] hover:text-white transition-colors underline">
                  Termos se aplicam.
                </a>
              </div>
            </div>
          </div>
        </section>
        `;
    console.log("Banner carregado com sucesso!");
  } else {
    console.error("Erro: Não encontrei a div cta-subscription-placeholder");
  }
}

// Garante que o código rode mesmo que o script esteja no topo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadPriceBanner);
} else {
  loadPriceBanner();
}

function loadCascaGrossa() {
  const container = document.getElementById("casca-grossa-container");
  if (!container) return;

  const filmes = [
    {
      titulo: "O Exterminador",
      img: "./assets/terminator.jpg",
      tempo: "1h 47m",
    },
    { titulo: "Coração de Ferro", img: "./assets/fury.jpg", tempo: "2h 14m" },
    {
      titulo: "Duro de Matar",
      img: "./assets/duro de matar.png",
      tempo: "2h 12m",
    },
    {
      titulo: "rambo 2: programado para matar",
      img: "./assets/first blood.jpg",
      tempo: "1h 56m",
    },
    {
      titulo: "3000 mil milhas para inferno",
      img: "./assets/3000 mil milhas para inferno.jpg",
      tempo: "2h 24m",
    },
    { titulo: "Scarface", img: "./assets/scarface.jpg", tempo: "1h 41m" },
    {
      titulo: "Missão imposivel efeito fallout",
      img: "./assets/Missão imposivel efeito fallout.jpg",
      tempo: "1h 57m",
    },
    { titulo: "Predador", img: "./assets/prey.webp", tempo: "1h 39m" },
  ];

  container.innerHTML = `
    <section class="px-6 lg:px-12 py-10 overflow-hidden">
      <div class="flex flex-col gap-1 mb-6 border-l-4 border-primary pl-4">
        <h2 class="text-3xl font-black text-white uppercase italic tracking-tighter">Seção Casca Grossa</h2>
        <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Adrenalina Pura</p>
      </div>

      <div class="flex gap-6 overflow-x-auto no-scrollbar pb-10 px-2 scroll-smooth">
        ${filmes
          .map(
            (filme) => `
          <div class="flex-none w-48 lg:w-64 group cursor-pointer hover:z-30">
            <div class="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(218,41,28,0.3)]">
              
              <img src="${filme.img}" class="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0" alt="${filme.titulo}">
              
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <button class="bg-primary text-white w-full py-3 rounded-xl font-black text-xs uppercase shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Assistir Agora
                </button>
              </div>
            </div>
            <h3 class="mt-4 font-bold text-lg text-slate-200 group-hover:text-primary transition-colors truncate">${filme.titulo}</h3>
            <p class="text-[10px] text-slate-500 font-black uppercase tracking-widest">${filme.tempo}</p>
          </div>
        `,
          )
          .join("")}
      </div>
    </section>
    `;
}

loadCascaGrossa();
