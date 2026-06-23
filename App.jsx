import {
  Home,
  BookOpen,
  Award,
  User,
  Library,
} from "lucide-react";

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <h1>Portal do Aluno</h1>
          <p>Faculdade Genebra EAD</p>
        </div>
      </section>

      <main>
        <section className="card">
          <h2>Teologia com Ênfase no Discipulado</h2>
          <p>Progresso: 35%</p>

          <div
            style={{
              background: "#eee",
              height: "12px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                background: "#d4af37",
                width: "35%",
                height: "12px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section className="card">
          <h2>Biblioteca Digital</h2>
          <p>Livros, apostilas e materiais exclusivos.</p>
        </section>

        <section className="card">
          <h2>Certificados</h2>
          <p>Acompanhe suas certificações emitidas.</p>
        </section>

        <section className="card">
          <h2>Agenda</h2>
          <p>Próxima aula ao vivo: Quinta-feira 20h.</p>
        </section>
      </main>

      <nav className="bottom-nav">
        <button>
          <Home size={22} />
          <span>Início</span>
        </button>

        <button>
          <BookOpen size={22} />
          <span>Cursos</span>
        </button>

        <button>
          <Library size={22} />
          <span>Biblioteca</span>
        </button>

        <button>
          <Award size={22} />
          <span>Certificados</span>
        </button>

        <button>
          <User size={22} />
          <span>Conta</span>
        </button>
      </nav>
    </div>
  );
}
