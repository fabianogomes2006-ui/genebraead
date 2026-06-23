import { useState } from "react";
import {
  Home,
  BookOpen,
  Library,
  Award,
  User,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const HOTMART =
  "https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Db432cdd3-eb60-46bd-892b-5b450a65153e%26scope%3Dopenid%2Bprofile%2Bauthorities%2Bemail%2Bresources%2Buser%26redirect_uri%3Dhttps%253A%252F%252Fhotmart.com%252Fpt-br%252Fclub%252Fgenebraead%252Fauth%252Flogin%253Frealm%253Dclub%26response_type%3Dcode%26response_mode%3Dquery%26state%3D7fb41f8a4e6d4e35b6b3ac7793d31f4b%26client_name%3DCasOAuthClient";

const WHATSAPP = "https://wa.me/5511954628419";

export default function App() {
  const [screen, setScreen] = useState("home");

  const cursos = [
    "Teologia Fundamental",
    "Teologia com Ênfase no Discipulado",
    "Bacharel em Teologia com Ênfase no Discipulado",
    "Especialização em Aconselhamento Cristão",
    "Especialização em Teologia Sistemática",
  ];

  const biblioteca = [
    "Bibliologia",
    "Ainda Há Pastores",
    "Parábolas de Jesus",
    "Métodos de Estudos Bíblicos",
  ];

  const livros = [
    "Discipulado Transformador",
    "O Temor do Senhor",
    "Volta ao Altar",
  ];

  return (
    <div className="app">
      <header className="hero">
        <h1>Faculdade Genebra EAD</h1>
        <p>Teologia que forma. Discipulado que transforma.</p>
      </header>

      <main className="container">
        {screen === "home" && (
          <>
            <div className="card">
              <h2>Bem-vindo ao Portal do Aluno</h2>

              <p>
                Acesse seus cursos, materiais, certificados e conteúdos da
                Faculdade Genebra EAD.
              </p>

              <button
                className="btn-primary"
                onClick={() => window.open(HOTMART, "_blank")}
              >
                Entrar na Plataforma
                <ExternalLink size={18} />
              </button>
            </div>

            <div className="card">
              <h3>Curso em Destaque</h3>

              <p>Teologia com Ênfase no Discipulado</p>

              <div className="progress">
                <div className="progress-bar"></div>
              </div>

              <small>35% concluído</small>
            </div>
          </>
        )}

        {screen === "courses" && (
          <>
            <h2>Cursos</h2>

            {cursos.map((curso) => (
              <div key={curso} className="card">
                <h3>{curso}</h3>

                <button
                  className="btn-primary"
                  onClick={() => window.open(HOTMART, "_blank")}
                >
                  Acessar Curso
                </button>
              </div>
            ))}
          </>
        )}

        {screen === "library" && (
          <>
            <h2>Biblioteca</h2>

            {biblioteca.map((item) => (
              <div key={item} className="card">
                <h3>{item}</h3>
                <p>Material disponível para consulta.</p>
              </div>
            ))}

            <h2 style={{ marginTop: 30 }}>Livraria</h2>

            {livros.map((livro) => (
              <div key={livro} className="card">
                <h3>{livro}</h3>

                <button
                  className="btn-primary"
                  onClick={() => window.open(HOTMART, "_blank")}
                >
                  Ver Livro
                </button>
              </div>
            ))}
          </>
        )}

        {screen === "certificates" && (
          <>
            <h2>Certificados</h2>

            {cursos.map((curso) => (
              <div key={curso} className="card">
                <h3>{curso}</h3>
                <p>Certificado disponível após conclusão.</p>
              </div>
            ))}
          </>
        )}

        {screen === "profile" && (
          <>
            <div className="card">
              <h2>Perfil</h2>

              <p>Portal do Aluno Genebra EAD</p>

              <button
                className="btn-primary"
                onClick={() => window.open(WHATSAPP, "_blank")}
              >
                Secretaria Acadêmica
                <MessageCircle size={18} />
              </button>
            </div>
          </>
        )}
      </main>

      <nav className="bottom-nav">
        <button onClick={() => setScreen("home")}>
          <Home size={20} />
          <span>Início</span>
        </button>

        <button onClick={() => setScreen("courses")}>
          <BookOpen size={20} />
          <span>Cursos</span>
        </button>

        <button onClick={() => setScreen("library")}>
          <Library size={20} />
          <span>Biblioteca</span>
        </button>

        <button onClick={() => setScreen("certificates")}>
          <Award size={20} />
          <span>Certificados</span>
        </button>

        <button onClick={() => setScreen("profile")}>
          <User size={20} />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
}
