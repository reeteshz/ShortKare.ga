require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
const mainRoutes = require('./routes/mainRoutes');
const shortURLRoutes = require('./routes/shortURLRoutes');

const app = express()

mongoose.connect(`mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        //start the server
        app.listen(process.env.PUBLIC_PORT, process.env.PUBLIC_HOST, () => {
            console.log(`Servre started at PORT ${process.env.PUBLIC_PORT}`)
        })
    })
    .catch(err => console.log(err.message));


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/', mainRoutes);

app.use('/shorten', shortURLRoutes);