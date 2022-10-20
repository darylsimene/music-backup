const mongdb = require('mongoose')
const Schema = mongdb.Schema

const ArtistSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        maxLength: 10
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 10
    },
    genre:{
        type: String
    }
}, {timestamps:true})

module.exports = mongdb.model('Artist',ArtistSchema )