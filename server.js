const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');
const artist = require('./routes/artist')
const song = require('./routes/song')
const user = require('./routes/user')

dotenv.config({ path: './config/config.env' })

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json())

app.use(logger)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

app.use('/api/v1/artist', artist);
app.use('/api/v1/song', song);
app.use('/api/v1/user', user);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1))
})


