const http = require("http");
const express = require("express");
const status = require("http-status");
const app = express();
const routes = require("./src/routes/routes.js");
const cors = require("cors");

// Importar todos os modelos
const Profissionais = require("./src/models/profissionais.js");

app.use(express.json());

app.use(cors());

app.use("/sistema", routes);

app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) => {
  res.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

const syncDatabase = async () => {
  try {
    // Sincronizar a tabela 'profissionais'
    await Profissionais.sync({ force: false });
    console.log("Tabela 'profissionais' sincronizada.");

    // Iniciar o servidor
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (error) {
    console.error("Erro ao sincronizar a tabela:", error);
  }
};

syncDatabase();
