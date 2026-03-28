const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const users = [
  {
    email: "dev@pear.com",
    password: "123",
    name: "Desenvolvedor Casca Grossa",
  },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({
      message: "Login realizado com sucesso!",
      user: { name: user.name, email: user.email },
    });
  } else {
    res.status(401).json({ message: "E-mail ou senha incorretos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
