const express = require('express');
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;


// connect to DB and Server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Connected to ${PORT}`));
});