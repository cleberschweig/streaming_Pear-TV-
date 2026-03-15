import React from "react";
import { useRef } from "react";
import { ChevronRight } from "lucide-react"; // Certifique-se de ter instalado: npm install lucide-react

export function MovieRow() {
  // Criamos o "controle" para a div que vai deslizar.
  // O <HTMLDivElement> avisa ao TypeScript que essa ref é de uma DIV.
  const carrosselRef = useRef<HTMLDivElement>(null);

  const scrollDireita = () => {
    // Só executa se a div realmente existir na tela
    if (carrosselRef.current) {
      // scrollBy move a lista a partir de onde ela já está
      carrosselRef.current.scrollBy({
        left: 500, // Move 500 pixels para o lado
        behavior: "smooth", // Faz o movimento ser suave (animação)
      });
    }
  };

  return (
    /* A div pai precisa ser 'relative' para o botão "grudar" nela */
    <div className="relative group px-10 py-5">
      <h2 className="text-white text-2xl font-bold mb-4">Top Filmes</h2>

      {/* Esta é a div que contém os filmes e que recebe a 'ref' */}
      <div
        ref={carrosselRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {/* Aqui você vai colocar seus cards de filmes depois */}
        {/* Usei div temporárias apenas para você ver o scroll funcionando */}
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
        <div className="min-w-[250px] h-[350px] bg-zinc-800 rounded-xl flex-none" />
      </div>

      {/* Botão de Navegação */}
      <button
        onClick={scrollDireita}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 
                   bg-black/60 hover:bg-black/90 text-white p-3 rounded-full
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   backdrop-blur-md border border-white/10 mr-4"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
