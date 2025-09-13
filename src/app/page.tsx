import { Header } from '@/components/ui/header'
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
          <Header />

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

          <div className="mt-12 text-center">
            <button className="transform rounded-full border border-red-500/30 bg-red-600/20 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/60 hover:bg-red-600/40">
              Ver Mais Fotos
            </button>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-red-500/20 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="Logo Ginásio"
                  className="h-12 w-12 rounded-full border-2 border-red-500/30"
                />
                <h3 className="text-xl font-bold text-white">
                  Ginásio AJ Luanda
                </h3>
              </div>
              <p className="leading-relaxed text-gray-400">
                O melhor ginásio de Luanda para transformar o teu corpo e
                alcançar os teus objetivos de fitness com equipamentos modernos
                e treinos personalizados.
              </p>

              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.146-1.378l.451-1.711c.165-.631.667-2.538.667-2.538s.17.331.17.82c0 .781-.496 1.607-1.116 1.607-.835 0-1.447-.87-1.447-2.027 0-1.35.967-2.294 2.133-2.294.781 0 1.18.45 1.18 1.08 0 .788-.504 1.418-1.184 1.418-.304 0-.596-.155-.693-.416 0 0-.151.594-.188.74-.09.35-.335 1.31-.457 1.688-.182.56-.272 1.01-.332 1.314C10.11 21.815 5.013 18.262 5.013 11.987 5.013 8.27 8.27 5.013 12.017 5.013s7.005 3.256 7.005 6.974c0 6.624-5.259 11.987-11.005 11.987z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40"
                >
                  <svg
                    className="h-5 w-5 text-red-400 group-hover:text-red-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">
                Links Rápidos
              </h4>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Modalidades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Planos e Preços
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Personal Trainers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Modalidades</h4>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Musculação
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Cardio Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      CrossFit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Yoga & Pilates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Zumba
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                    >
                      Treino Funcional
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Contactos</h4>
              <address className="space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400">
                      Rua da Independência, 123
                      <br />
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    href="tel:+244923456789"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    []
                  </Link>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-400"
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
                  <div>
                    <p className="text-gray-400">
                      <strong>Seg-Sex:</strong> 05:00 - 23:00
                      <br />
                      <strong>Fins de Semana:</strong> 07:00 - 21:00
                    </p>
                  </div>
                </div>
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-red-500/20 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-center text-gray-400 md:text-left">
                © 2024 Ginásio AJ Luanda. Todos os direitos reservados.
              </p>
              <nav>
                <div className="flex space-x-6">
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    Termos de Uso
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors duration-200 hover:text-red-400"
                  >
                    Cookies
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
