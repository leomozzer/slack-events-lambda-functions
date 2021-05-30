const express = require('express');

const PORT = 8080;

const cors = require('cors');
const helmet = require('helmet')
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ 'extended': false }))
app.use((req, res, next) => {
    next()
})
app.use(require('../routes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})