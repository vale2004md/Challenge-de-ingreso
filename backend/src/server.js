require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks.routes');


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});
// prefijo /api/tasks 
app.use('/api/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
