import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  MonitorPlay,
  School,
  Library,
} from "lucide-react";

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <h1>Faculdade Genebra EAD</h1>

          <p>
            Teologia que forma. Discipulado que transforma.
          </p>

          <div className="hero-buttons">
            <a
              href="https://genebraead.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Entrar na Plataforma
            </a>

            <a
              href="#cursos"
              className="btn-secondary"
            >
              Ver Cursos
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Por que estudar na Genebra EAD?</h2>

          <div className="grid">
            <div className="card">
              <GraduationCap size={40} />
              <h3>Formação Teológica</h3>
              <p>
                Conteúdo sólido, bíblico e aplicável ao ministério cristão.
              </p>
            </div>

            <div className="card">
              <MonitorPlay size={40} />
              <h3>100% Online</h3>
              <p>
                Estude onde estiver, no seu ritmo e horário.
              </p>
            </div>

            <div className="card">
              <Users size={40} />
              <h3>Comunidade</h3>
              <p>
                Aprenda junto com líderes e discípulos de todo o Brasil.
              </p>
            </div>

            <div className="card">
              <Award size={40} />
              <h3>Certificação</h3>
              <p>
                Formação estruturada para crescimento ministerial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="course">
        <div className="container">
          <h2>Cursos Disponíveis</h2>

          <div className="grid">
            <div className="card">
              <BookOpen size={40} />
              <h3>Teologia com Ênfase no Discipulado</h3>
              <p>
                Formação completa em teologia e discipulado transformador.
              </p>
            </div>

            <div className="card">
              <School size={40} />
              <h3>Trilha Cultura do Discipulado</h3>
              <p>
                Capacitação para igrejas discipuladoras.
              </p>
            </div>

            <div className="card">
              <Library size={40} />
              <h3>Biblioteca Digital</h3>
              <p>
                Acesso a materiais, apostilas e conteúdos exclusivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="course">
        <div className="container">
          <h2>Curso em Destaque</h2>

          <div className="course-card">
            <h3>Teologia com Ênfase no Discipulado</h3>

            <p>
              Uma formação que integra conhecimento bíblico,
              vida cristã, liderança e discipulado.
            </p>

            <a
              href="https://genebraead.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero Conhecer
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Mais de 500 alunos impactados</h2>

          <p>
            Faça parte de uma comunidade comprometida com a formação
            teológica e o discipulado transformador.
          </p>

          <a
            href="https://genebraead.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fazer Inscrição
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Faculdade Genebra EAD</p>
        <p>Teologia que forma. Discipulado que transforma.</p>
      </footer>
    </div>
  );
}
