import {
  Home,
  BookOpen,
  Library,
  Award,
  User,
} from "lucide-react";

export default function App() {
  return (
    <div className="app">

      <header className="hero">
        <div className="container">
          <h1>Portal do Aluno</h1>
          <p>Faculdade Genebra EAD</p>
        </div>
      </header>

      <main className="container">

        <section className="course-card">
          <h2>Teologia com Ênfase no Discipulado</h2>
          <p>Progresso: 35%</p>
        </section>

        <section className="course-card">
          <h2>Biblioteca Digital</h2>
          <p>Livros, apostilas e materiais exclusivos.</p>
        </section>

        <section className="course-card">
          <h2>Certificados</h2>
          <p>Acompanhe suas certificações emitidas.</p>
        </section>

      </main>

      <nav className="bottom-nav">

        <button>
          <Home size={20} />
          <span>Início</span>
        </button>

        <button>
          <BookOpen size={20} />
          <span>Cursos</span>
        </button>

        <button>
          <Library size={20} />
          <span>Biblioteca</span>
        </button>

        <button>
          <Award size={20} />
          <span>Certificados</span>
        </button>

        <button>
          <User size={20} />
          <span>Conta</span>
        </button>

      </nav>

    </div>
  );
}
