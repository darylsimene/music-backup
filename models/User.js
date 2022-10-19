const mongdb = require('mongoose')
const Schema = mongdb.Schema

const UserSchema = new Schema({

},{timestamps:true})

module.exports = mongdb.model('User', UserSchema)