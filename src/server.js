const express = require("express");
const connectMongo = require("./config/mongo");
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(userRoutes);

connectMongo();

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});
