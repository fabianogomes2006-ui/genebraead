import { useState } from "react";
import {
  Home,
  GraduationCap,
  BookOpen,
  ShoppingBag,
  Award,
  User,
  MessageCircle,
} from "lucide-react";

export default function App() {
  const [pagina, setPagina] = useState("inicio");

  const hotmart =
    "https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com";

  const whatsapp = "https://wa.me/5511954628419";

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
    <>
      {pagina === "inicio" && (
        <main>
          <section style={hero}>
            <div style={overlay}>
              <h1 style={titulo}>Faculdade Genebra EAD</h1>

              <p style={subtitulo}>
                Teologia que forma. Discipulado que transforma.
              </p>

              <div style={{ marginTop: 25 }}>
                <a
                  href={hotmart}
                  target="_blank"
                  rel="noreferrer"
                  style={botaoPrimario}
                >
                  Entrar na Plataforma
                </a>
              </div>

              <div style={{ marginTop: 12 }}>
                <button
                  style={botaoSecundario}
                  onClick={() => setPagina("cursos")}
                >
                  Conhecer Cursos
                </button>
              </div>
            </div>
          </section>

          <section style={conteudo}>
            <Card
              titulo="Portal do Aluno"
              texto="Acompanhe aulas, progresso e certificados."
            />

            <Card
              titulo="Biblioteca Digital"
              texto="Livros, apostilas e materiais exclusivos."
            />

            <Card
              titulo="Livraria Genebra"
              texto="Publicações e obras do ministério."
            />

            <Card
              titulo="Secretaria Acadêmica"
              texto="Atendimento rápido pelo WhatsApp."
            />
          </section>
        </main>
      )}

      {pagina === "cursos" && (
        <TelaCursos
          titulo="Cursos Disponíveis"
          itens={cursos}
          link={hotmart}
        />
      )}

      {pagina === "biblioteca" && (
        <TelaBiblioteca
          titulo="Biblioteca Digital"
          itens={biblioteca}
        />
      )}

      {pagina === "livraria" && (
        <TelaLivraria
          titulo="Livraria Genebra"
          itens={livros}
        />
      )}

      {pagina === "certificados" && (
        <TelaCertificados />
      )}

      {pagina === "conta" && (
        <main style={conteudo}>
          <h1>Minha Conta</h1>

          <div style={card}>
            <h3>Faculdade Genebra EAD</h3>

            <p>Secretaria Acadêmica</p>

            <p>(11) 95462-8419</p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              style={botaoPrimario}
            >
              WhatsApp Secretaria
            </a>

            <br />
            <br />

            <a
              href={hotmart}
              target="_blank"
              rel="noreferrer"
              style={botaoPrimario}
            >
              Entrar na Plataforma
            </a>
          </div>
        </main>
      )}

      <nav style={menu}>
        <button style={menuBtn} onClick={() => setPagina("inicio")}>
          <Home />
          <span>Início</span>
        </button>

        <button style={menuBtn} onClick={() => setPagina("cursos")}>
          <GraduationCap />
          <span>Cursos</span>
        </button>

        <button style={menuBtn} onClick={() => setPagina("biblioteca")}>
          <BookOpen />
          <span>Biblioteca</span>
        </button>

        <button style={menuBtn} onClick={() => setPagina("certificados")}>
          <Award />
          <span>Certificados</span>
        </button>

        <button style={menuBtn} onClick={() => setPagina("conta")}>
          <User />
          <span>Conta</span>
        </button>
      </nav>
    </>
  );
}

function TelaCursos({ titulo, itens, link }) {
  return (
    <main style={conteudo}>
      <h1>{titulo}</h1>

      {itens.map((item, index) => (
        <div key={index} style={card}>
          <h3>{item}</h3>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={botaoPrimario}
          >
            Acessar Curso
          </a>
        </div>
      ))}
    </main>
  );
}

function TelaBiblioteca({ titulo, itens }) {
  return (
    <main style={conteudo}>
      <h1>{titulo}</h1>

      {itens.map((item, index) => (
        <div key={index} style={card}>
          <h3>{item}</h3>
        </div>
      ))}
    </main>
  );
}

function TelaLivraria({ titulo, itens }) {
  return (
    <main style={conteudo}>
      <h1>{titulo}</h1>

      {itens.map((item, index) => (
        <div key={index} style={card}>
          <h3>{item}</h3>
        </div>
      ))}
    </main>
  );
}

function TelaCertificados() {
  return (
    <main style={conteudo}>
      <h1>Certificados</h1>

      <div style={card}>
        <h3>Teologia Fundamental</h3>
      </div>

      <div style={card}>
        <h3>Teologia com Ênfase no Discipulado</h3>
      </div>

      <div style={card}>
        <h3>Bacharel em Teologia</h3>
      </div>

      <div style={card}>
        <h3>Especialização em Aconselhamento Cristão</h3>
      </div>

      <div style={card}>
        <h3>Especialização em Teologia Sistemática</h3>
      </div>
    </main>
  );
}

function Card({ titulo, texto }) {
  return (
    <div style={card}>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}

const hero = {
  background: "#131d39",
  color: "#fff",
  padding: "80px 25px",
  textAlign: "center",
};

const overlay = {
  maxWidth: "800px",
  margin: "0 auto",
};

const titulo = {
  fontSize: "42px",
  fontWeight: "700",
};

const subtitulo = {
  marginTop: "20px",
  fontSize: "20px",
};

const conteudo = {
  padding: "25px",
  paddingBottom: "100px",
};

const card = {
  background: "#fff",
  padding: "22px",
  borderRadius: "20px",
  marginBottom: "20px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
};

const botaoPrimario = {
  background: "#d4af37",
  color: "#000",
  padding: "14px 24px",
  borderRadius: "12px",
  textDecoration: "none",
  display: "inline-block",
  fontWeight: "600",
};

const botaoSecundario = {
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "14px 24px",
  borderRadius: "12px",
};

const menu = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#fff",
  borderTop: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
};

const menuBtn = {
  background: "transparent",
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
};
