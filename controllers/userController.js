// For ‘/’ endpoint:

// getUsers
const getUsers = (req, res, next) => {
    if(Object.keys(req.query).length){
        //query parameter

        const{
            userName,
            gender,
            age

        } = req.query

        const filter = []
        
        if(userName) filter.push(userName);
        if(gender) filter.push(gender);
        if(age) filter.push(age);
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Now playing ALL THE SONGS.'
        })

        for (let i = 0; i < filter.length; i++){
            console.log(`Searching user(s) by: ${filter[i]}`)
        }
    }
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Showing All Listeners!'
        })
}

const postUser = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'This stream welcomes another user.'
        })
}

const deleteUsers = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Users deleted.'
        })
}

// For ‘/:gender’ endpoint: 
const getUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `User Info: ${req.params.userId}!`
        })
}

const updateUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `USER ${req.params.userId} UPDATED!`
        })
}

const deleteUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `USER ${req.params.userId} DELETED!`
        })
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}