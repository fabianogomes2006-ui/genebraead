import { useState } from "react";
import {
  Home,
  GraduationCap,
  BookOpen,
  Award,
  User,
} from "lucide-react";

export default function App() {
  const [pagina, setPagina] = useState("inicio");

  const hotmart =
    "https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com";

  const whatsapp =
    "https://wa.me/5511954628419";

  return (
    <>
      {pagina === "inicio" && (
        <main>
          <section
            style={{
              background: "#131d39",
              color: "#fff",
              padding: "50px 25px",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.imgur.com/Z6m5Q6W.png"
              alt="Logo"
              style={{
                width: "120px",
                marginBottom: "20px",
              }}
            />

            <h1>Faculdade Genebra EAD</h1>

            <p style={{ marginTop: "20px" }}>
              A teologia cumpre seu propósito quando deixa de ser apenas
              conhecimento e se torna uma vida moldada por Cristo para a glória
              de Deus.
            </p>

            <div style={{ marginTop: "30px" }}>
              <a
                href={hotmart}
                target="_blank"
                style={botaoPrimario}
              >
                Entrar na Plataforma
              </a>
            </div>

            <div style={{ marginTop: "15px" }}>
              <button
                style={botaoSecundario}
                onClick={() => setPagina("cursos")}
              >
                Conhecer Cursos
              </button>
            </div>
          </section>

          <section style={secao}>
            <Card
              titulo="Portal do Aluno"
              texto="Acompanhe seu progresso acadêmico."
            />
            <Card
              titulo="Biblioteca"
              texto="Livros, apostilas e materiais exclusivos."
            />
            <Card
              titulo="Secretaria"
              texto="Atendimento acadêmico."
            />
          </section>
        </main>
      )}

      {pagina === "cursos" && (
        <Tela
          titulo="Cursos"
          itens={[
            "Teologia Fundamental",
            "Teologia com Ênfase no Discipulado",
            "Bacharel em Teologia com Ênfase no Discipulado",
            "Especialização em Aconselhamento Cristão",
            "Especialização em Teologia Sistemática",
          ]}
          link={hotmart}
        />
      )}

      {pagina === "biblioteca" && (
        <Tela
          titulo="Biblioteca Digital"
          itens={[
            "Bibliologia",
            "Ainda Há Pastores",
            "Parábolas de Jesus",
            "Métodos de Estudos Bíblicos",
          ]}
        />
      )}

      {pagina === "certificados" && (
        <Tela
          titulo="Certificados"
          itens={[
            "Teologia Fundamental",
            "Teologia com Ênfase no Discipulado",
            "Bacharelado em Teologia",
            "Especialização em Aconselhamento Cristão",
            "Especialização em Teologia Sistemática",
          ]}
        />
      )}

      {pagina === "conta" && (
        <main style={{ padding: "25px" }}>
          <h1>Minha Conta</h1>

          <div style={card}>
            <h3>Faculdade Genebra EAD</h3>

            <p>Secretaria Acadêmica</p>

            <p>(11) 95462-8419</p>

            <a
              href={whatsapp}
              target="_blank"
              style={botaoPrimario}
            >
              WhatsApp Secretaria
            </a>

            <br />
            <br />

            <a
              href={hotmart}
              target="_blank"
              style={botaoPrimario}
            >
              Entrar na Plataforma
            </a>
          </div>
        </main>
      )}

      <nav style={menu}>
        <button onClick={() => setPagina("inicio")}>
          <Home />
        </button>

        <button onClick={() => setPagina("cursos")}>
          <GraduationCap />
        </button>

        <button onClick={() => setPagina("biblioteca")}>
          <BookOpen />
        </button>

        <button onClick={() => setPagina("certificados")}>
          <Award />
        </button>

        <button onClick={() => setPagina("conta")}>
          <User />
        </button>
      </nav>
    </>
  );
}

function Tela({ titulo, itens, link }) {
  return (
    <main style={{ padding: "25px" }}>
      <h1>{titulo}</h1>

      {itens.map((item, i) => (
        <div key={i} style={card}>
          <h3>{item}</h3>

          {link && (
            <a
              href={link}
              target="_blank"
              style={botaoPrimario}
            >
              Acessar
            </a>
          )}
        </div>
      ))}
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

const secao = {
  padding: "25px",
};

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "18px",
  marginBottom: "20px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

const botaoPrimario = {
  background: "#d4af37",
  color: "#000",
  padding: "12px 20px",
  borderRadius: "10px",
  textDecoration: "none",
  display: "inline-block",
};

const botaoSecundario = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid #fff",
  background: "transparent",
  color: "#fff",
};

const menu = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "#fff",
  display: "flex",
  justifyContent: "space-around",
  padding: "12px",
  borderTop: "1px solid #ddd",
};
