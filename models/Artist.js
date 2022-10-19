const mongdb = require('mongoose')
const Schema = mongdb.Schema

const ArtistSchema = new Schema({

}, {timestamps:true})

module.exports = mongdb.model('Artist',ArtistSchema )