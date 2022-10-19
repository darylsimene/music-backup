const mongdb = require('mongoose')
const Schema = mongdb.Schema


const SongSchema = new Schema({
    songTitle: {
        type: String,
        required: true,
        unique: true,
        maxLength: [20, 'Too much title hun, 20 only.']
    },
    artist:{
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
}, {timestamps:true})


module.exports = mongdb.model('Song', SongSchema)

