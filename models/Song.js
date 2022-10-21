const mongdb = require('mongoose')
const Schema = mongdb.Schema

const RatingSchema = new Schema({
    rating: {
        type: Number,
        min:1,
        max:5,
        required: true,
        validate: (rating) =>{
            return typeof rating === 'number'
        }
    },
    text: {
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

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
    },
    ratings: [RatingSchema]
}, {timestamps:true})


module.exports = mongdb.model('Song', SongSchema)

