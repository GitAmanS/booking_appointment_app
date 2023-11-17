const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


sequelize.sync().then(() => {
  console.log('Database synced successfully');
}).catch((error) => {
  console.error(error);
});

app.use('/api', userRoutes);

app.listen(3000);
