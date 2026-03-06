export default function HeroAlliance() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C4DFF]/20 via-transparent to-[#22D3EE]/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-cyan-400 mb-6 font-medium">
            Red internacional de divulgación científica
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Alianza de Proyectos
            <br />
            de Astrociencias
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-xl">
            Una red de proyectos, comunidades y divulgadores que impulsan la
            cultura espacial, la astronomía y la ciencia ciudadana en México y
            el mundo.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C4DFF] to-[#22D3EE] text-white font-semibold">
              Conocer la alianza
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20 text-white">
              Explorar proyectos
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl"></div>

          <div className="relative bg-[#0A1020] border border-white/10 rounded-3xl p-10">
            <h3 className="text-white text-xl font-semibold mb-6">
              Impacto de la comunidad
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl text-cyan-400 font-bold">12+</p>
                <p className="text-gray-400">Proyectos aliados</p>
              </div>

              <div>
                <p className="text-4xl text-purple-400 font-bold">8</p>
                <p className="text-gray-400">Países</p>
              </div>

              <div>
                <p className="text-4xl text-white font-bold">15k+</p>
                <p className="text-gray-400">Personas alcanzadas</p>
              </div>

              <div>
                <p className="text-4xl text-white font-bold">30+</p>
                <p className="text-gray-400">Eventos científicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
