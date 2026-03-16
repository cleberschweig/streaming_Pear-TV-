<section className="px-6 lg:px-12 mb-12">
  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
    <span className="w-1 h-6 bg-secondary rounded-full"></span>
    Top Filmes
  </h2>

  {/* Container com Scroll Visível e Customizado */}
  <div
    className="flex gap-4 overflow-x-auto pb-6 scroll-smooth
               scrollbar-thin scrollbar-thumb-secondary scrollbar-track-zinc-900"
  >
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <div key={i} className="flex-none w-48 lg:w-64 cursor-pointer">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-300">
          <img
            className="w-full h-full object-cover"
            src={`./assets/poster${i}.jpg`}
            alt="Filme"
          />
        </div>
      </div>
    ))}
  </div>
</section>;
