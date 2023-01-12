import express from 'express';
import mainRouters from './router/main_routers.js'
import db from './db/db_configs.js';

// Connecting to DB
db();

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use('/api', mainRouters);

app.listen(PORT, _ => console.log(`Server run on http://localhost:${PORT}`))