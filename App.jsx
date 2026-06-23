{pagina === "boasvindas" && (
  <main>
    <section
      style={{
        background: "#131d39",
        color: "#fff",
        padding: "40px 25px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <img
        src="https://i.imgur.com/Z6m5Q6W.png"
        alt="Genebra"
        style={{
          width: "120px",
          marginBottom: "20px",
        }}
      />

      <h1>Faculdade Genebra EAD</h1>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        A teologia cumpre seu propósito quando deixa de ser apenas conhecimento
        e se torna uma vida moldada por Cristo para a glória de Deus.
      </p>

      <button
        style={{
          background: "#d4af37",
          border: "none",
          padding: "14px 24px",
          borderRadius: "12px",
          marginTop: "30px",
          fontWeight: "bold",
        }}
        onClick={() => setPagina("inicio")}
      >
        Entrar no Portal
      </button>

      <div style={{ marginTop: "20px" }}>
        <a
          href="https://wa.me/5511954628419"
          target="_blank"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Secretaria Acadêmica
        </a>
      </div>
    </section>
  </main>
)}
