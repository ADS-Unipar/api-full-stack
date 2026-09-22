const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express()
const db = require('./config/db.js');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use('/tasks', require('./tasks/tasksRouter.js'));

db.sync().then(() => {
    console.log('Conectado ao banco de dados');
}).catch((err) => {
    console.log('Erro ao conectar ao banco de dados: ', err);
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`Rodando aqui ${process.env.PORT || 3000}`);
});