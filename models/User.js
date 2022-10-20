const mongdb = require('mongoose')
const Schema = mongdb.Schema
const validator = require('validator')

const UserSchema = new Schema({
    userName:{
        type: String,
        unique: true,
        required: [true, 'Please add a username'],
        maxLength: 10
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    age:{
        type: String,
        required: [true, 'Please add an age'],
        validate: (age) => {
            return validator.isNumeric(age)
        }
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        validate: (email) => {
            return validator.isEmail(email)
        }
    },
    password:{
        type:String,
        required: [true,'Please add a password'],
        validate: (password) =>{
            return validator.isStrongPassword(password)
        }
    },
    firstName:{
        type: String,
        required: true,
        maxLength:10
    },
    lastName:{
        type: String,
        required: true,
        maxLength: 10
    }
},{timestamps:true})

UserSchema.pre('save', function(next) {
    this.userName = this.userName.trim()
    this.firstName = this.firstName.trim()
    this.lastName = this.lastName.trim()
    next();
})

// UserSchema.post('save', function(next) {
//     this.gender =this.gender.toUpperCase();
//     next();
// })
module.exports = mongdb.model('User', UserSchema)