import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowRight,
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
            <a href="#" className="btn-primary">
              Conheça os Cursos
            </a>

            <a href="#" className="btn-secondary">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Por que estudar conosco?</h2>

          <div className="grid">
            <div className="card">
              <GraduationCap size={40} />
              <h3>Formação Teológica</h3>
              <p>
                Conteúdo sólido para quem deseja crescer no conhecimento
                bíblico.
              </p>
            </div>

            <div className="card">
              <BookOpen size={40} />
              <h3>Ensino Online</h3>
              <p>
                Estude de qualquer lugar e no seu próprio ritmo.
              </p>
            </div>

            <div className="card">
              <Users size={40} />
              <h3>Comunidade</h3>
              <p>
                Aprenda junto com alunos comprometidos com o Reino de Deus.
              </p>
            </div>

            <div className="card">
              <Award size={40} />
              <h3>Certificação</h3>
              <p>
                Formação reconhecida e direcionada ao ministério cristão.
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
              Uma formação completa para quem deseja unir conhecimento
              teológico, prática ministerial e discipulado transformador.
            </p>

            <button className="btn-primary">
              Quero Conhecer
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Comece sua jornada hoje</h2>

          <p>
            Prepare-se para servir com excelência e formar discípulos que fazem
            discípulos.
          </p>

          <a href="#" className="btn-primary">
            Fazer Inscrição
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Faculdade Genebra EAD</p>
      </footer>
    </div>
  );
}
