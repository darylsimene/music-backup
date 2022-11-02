const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');
const artist = require('./routes/artist')
const song = require('./routes/song')
const user = require('./routes/user')
const connectDB = require('./config/db') //to connect to the db
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')    
const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const hpp = require('hpp')
const xss = require('xss-clean')

dotenv.config({ path: './config/config.env' })

connectDB(); //initiate the db

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json()) //related to body(s) in json

app.use(cookieParser());

app.use(fileUpload());

app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(helmet())
app.use(cors())

const limiter = rateLimit({
    windowsMs: 10 * 60 * 1000
})

app.use(limiter)

app.use(logger)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

app.use('/api/v1/artist', artist);
app.use('/api/v1/song', song);
app.use('/api/v1/user', user);

//handles error 
app.use(errorHandler);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1))
})


