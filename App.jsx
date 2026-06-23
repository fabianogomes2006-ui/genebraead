import { useState } from "react";
import {
Home,
GraduationCap,
BookOpen,
Award,
User,
Phone,
} from "lucide-react";

export default function App() {
const [pagina, setPagina] = useState("inicio");

const hotmart =
"https://hotmart.com/pt-br/club/genebraead";

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
padding: "60px 25px",
textAlign: "center",
}}
>
<h1
style={{
fontSize: "42px",
marginBottom: "15px",
}}
>
Faculdade Genebra EAD
</h1>

        <p
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontSize: "18px",
          }}
        >
          Teologia que forma.
          <br />
          Discipulado que transforma.
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
            Ver Cursos
          </button>
        </div>
      </section>

      <section style={secao}>
        <Card
          titulo="Portal do Aluno"
          texto="Acompanhe aulas, progresso e certificados."
        />

        <Card
          titulo="Biblioteca Digital"
          texto="Livros, apostilas e materiais exclusivos."
        />

        <Card
          titulo="Secretaria Acadêmica"
          texto="Suporte ao aluno e atendimento."
        />
      </section>
    </main>
  )}

  {pagina === "cursos" && (
    <TelaCursos hotmart={hotmart} />
  )}

  {pagina === "biblioteca" && (
    <TelaBiblioteca />
  )}

  {pagina === "certificados" && (
    <TelaCertificados />
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
          Falar no WhatsApp
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

function TelaCursos({ hotmart }) {
const cursos = [
"Teologia Fundamental",
"Teologia com Ênfase no Discipulado",
"Bacharel em Teologia com Ênfase no Discipulado",
"Especialização em Aconselhamento Cristão",
"Especialização em Teologia Sistemática",
];

return (
<main style={{ padding: "25px" }}>
<h1>Cursos Disponíveis</h1>

  {cursos.map((curso) => (
    <div style={card} key={curso}>
      <h3>{curso}</h3>

      <a
        href={hotmart}
        target="_blank"
        style={botaoPrimario}
      >
        Acessar Curso
      </a>
    </div>
  ))}
</main>

);
}

function TelaBiblioteca() {
const livros = [
"Bibliologia",
"Ainda Há Pastores",
"Parábolas de Jesus",
"Métodos de Estudos Bíblicos",
"Discipulado Transformador",
"O Temor do Senhor",
"Volta ao Altar",
];

return (
<main style={{ padding: "25px" }}>
<h1>Biblioteca Digital</h1>

  {livros.map((livro) => (
    <div style={card} key={livro}>
      <h3>{livro}</h3>
    </div>
  ))}
</main>

);
}

function TelaCertificados() {
const certificados = [
"Teologia Fundamental",
"Teologia com Ênfase no Discipulado",
"Bacharel em Teologia",
"Especialização em Aconselhamento Cristão",
"Especialização em Teologia Sistemática",
];

return (
<main style={{ padding: "25px" }}>
<h1>Certificados</h1>

  {certificados.map((item) => (
    <div style={card} key={item}>
      <h3>{item}</h3>
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
padding: "25px",
borderRadius: "20px",
marginBottom: "20px",
boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
};

const botaoPrimario = {
background: "#d4af37",
color: "#000",
padding: "14px 22px",
borderRadius: "12px",
textDecoration: "none",
display: "inline-block",
fontWeight: "bold",
};

const botaoSecundario = {
padding: "14px 22px",
borderRadius: "12px",
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
