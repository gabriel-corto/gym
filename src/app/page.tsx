import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main
        className="relative h-screen min-h-screen w-full bg-black"
        style={{
          backgroundImage: "url('/gallery-4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-20 py-10 max-sm:px-10 md:px-28">
          <header className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo.jpg"
                alt="Logo Ginásio"
                className="h-16 w-16 rounded-full border-2 border-red-500/30 shadow-lg transition-all duration-300 hover:border-red-500/60 md:h-20 md:w-20"
              />
            </div>

            <nav className="hidden items-center space-x-8 md:flex">
              <Link
                href="#"
                className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
              >
                Início
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#about"
                className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
              >
                Sobre Nós
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
              >
                Modalidades
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
              >
                Horários
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#"
                className="group relative font-medium text-white transition-colors duration-200 hover:text-red-400"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <nav className="md:hidden">
              <button className="p-2 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>

            <div className="hidden md:block">
              <button className="transform rounded-full border border-red-500/20 bg-red-600/90 px-6 py-2 font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl">
                Inscreve-te Já
              </button>
            </div>
          </header>

          <div className="mt-32 text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Transforma o Teu Corpo
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              O melhor ginásio de Luanda para alcançares os teus objetivos de
              fitness. Equipamentos modernos, treinos personalizados e
              resultados garantidos.
            </p>
            <div className="mt-12">
              <button className="hover:shadow-3xl transform rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700">
                Começar Treino
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Seção Sobre Nós */}
      <section
        id="about"
        className="relative bg-black py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              O Nosso Ginásio
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                A Nossa Missão
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Somos o ginásio líder em Luanda, dedicado a transformar vidas
                através do fitness e bem-estar. Com mais de 5 anos de
                experiência, oferecemos um ambiente motivador e profissional
                onde cada membro pode alcançar os seus objetivos de forma segura
                e eficaz.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Contamos com uma equipa de personal trainers certificados,
                equipamentos de última geração e uma variedade de modalidades
                que se adaptam a todos os níveis de condição física. O teu
                sucesso é a nossa prioridade.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="transform rounded-lg border border-red-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  Equipamentos Premium
                </h4>
                <p className="text-gray-400">
                  Máquinas e equipamentos de última geração para treinos
                  completos.
                </p>
              </div>

              <div className="transform rounded-lg border border-red-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  Trainers Qualificados
                </h4>
                <p className="text-gray-400">
                  Personal trainers certificados para te guiar nos teus
                  objetivos.
                </p>
              </div>

              <div className="transform rounded-lg border border-red-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  Horários Flexíveis
                </h4>
                <p className="text-gray-400">
                  Aberto 24/7 para se adequar à tua rotina e estilo de vida.
                </p>
              </div>

              <div className="transform rounded-lg border border-red-500/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-white">
                  Resultados Garantidos
                </h4>
                <p className="text-gray-400">
                  Planos personalizados com acompanhamento para resultados
                  reais.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 rounded-full border border-red-500/20 bg-white/5 px-8 py-4 backdrop-blur-sm">
              <span className="text-2xl font-bold text-red-500">1000+</span>
              <span className="text-gray-300">Membros Ativos</span>
              <span className="h-6 w-px bg-gray-600"></span>
              <span className="text-2xl font-bold text-red-500">15+</span>
              <span className="text-gray-300">Modalidades</span>
              <span className="h-6 w-px bg-gray-600"></span>
              <span className="text-2xl font-bold text-red-500">5</span>
              <span className="text-gray-300">Anos de Experiência</span>
            </div>
          </div>

          {/* Modalidades Destacadas */}
          <div className="mt-20">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Modalidades Populares
              </h3>
              <p className="text-gray-400">
                Descobre as nossas modalidades mais procuradas pelos membros
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-lg border border-red-500/20 bg-gradient-to-br from-red-600/20 to-red-800/20 p-6 backdrop-blur-sm transition-all duration-300 hover:from-red-600/30 hover:to-red-800/30">
                <div className="mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 transition-colors duration-300 group-hover:bg-red-600/30">
                    <svg
                      className="h-8 w-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Musculação
                </h4>
                <p className="text-gray-400">
                  Treino de força com equipamentos profissionais e orientação
                  especializada.
                </p>
              </div>

              <div className="group rounded-lg border border-red-500/20 bg-gradient-to-br from-red-600/20 to-red-800/20 p-6 backdrop-blur-sm transition-all duration-300 hover:from-red-600/30 hover:to-red-800/30">
                <div className="mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 transition-colors duration-300 group-hover:bg-red-600/30">
                    <svg
                      className="h-8 w-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Cardio
                </h4>
                <p className="text-gray-400">
                  Melhora a tua resistência cardiovascular com as nossas
                  máquinas de cardio.
                </p>
              </div>

              <div className="group rounded-lg border border-red-500/20 bg-gradient-to-br from-red-600/20 to-red-800/20 p-6 backdrop-blur-sm transition-all duration-300 hover:from-red-600/30 hover:to-red-800/30">
                <div className="mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 transition-colors duration-300 group-hover:bg-red-600/30">
                    <svg
                      className="h-8 w-8 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">
                  Aulas de Grupo
                </h4>
                <p className="text-gray-400">
                  Zumba, Yoga, CrossFit e muito mais em aulas dinâmicas e
                  motivadoras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-l from-red-900/10 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Nossa Galeria
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
            <p className="mt-6 text-lg text-gray-400">
              Vê o nosso espaço moderno e as nossas instalações de topo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 - Área de Musculação */}
            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-2.jpg"
                  alt="Área de Musculação"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Área de Musculação
                </h3>
                <p className="text-gray-300">
                  Equipamentos de última geração para treinos de força e
                  hipertrofia
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>

            {/* Card 2 - Zona Cardio */}
            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-3.jpg"
                  alt="Zona Cardio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Zona Cardio
                </h3>
                <p className="text-gray-300">
                  Esteiras, bicicletas e elípticas para melhorar a resistência
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>

            {/* Card 3 - Estúdio de Aulas */}
            <div className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-black/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallery-4.jpg"
                  alt="Estúdio de Aulas"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Estúdio de Aulas
                </h3>
                <p className="text-gray-300">
                  Espaço amplo para aulas de grupo, yoga e treinos funcionais
                </p>
              </div>

              <div className="absolute inset-0 bg-red-600/0 transition-all duration-300 group-hover:bg-red-600/10"></div>
            </div>
          </div>

          {/* Botão Ver Mais */}
          <div className="mt-12 text-center">
            <button className="transform rounded-full border border-red-500/30 bg-red-600/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:bg-red-600/40">
              Ver Mais Fotos
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
