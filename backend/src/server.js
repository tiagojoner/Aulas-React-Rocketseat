const express = require('express');
const mongoose = require('mongoose'); // importa o mongodb
const routes = require('./routes'); // importa o routes
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://tiagojoner:antiqueda@cluster0-7lgmq.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// metodos GET, POST, PUT, DELETE
// req.query = acessar parametros da query/url (para filters)
// req.params = acessar route params (para edit, delete)
// req.body = acessar corpo da requisição (para insert, edit)

//app.use(cors({origin: 'http://localhost:3000'})); // cors.
app.use(cors()); // cors.
app.use(express.json()); // deve vir antes do routes.
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333); // porta para o localhost