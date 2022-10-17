// For ‘/’ endpoint:

// getlastName
const getArtists = (req, res, next) => {
    if(Object.keys(req.query).length){
        //query parameter
        const{
            firstName,
            lastName,
            gender
        } = req.query

        const filter = []
        
        if(firstName) filter.push(firstName);
        if(lastName) filter.push(lastName);
        if(gender) filter.push(gender);
        
        for (let i = 0; i < filter.length; i++){
            console.log(`Searching artist(s) by: ${filter[i]}`)
        }
    }
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Now playing all artists!.'
        })
}

const postArtist = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'NEW ARTIST Out Now!'
        })
}

const deleteArtists = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'MUSIC SHUT DOWN.'
        })
}

// For ‘/:artist’ endpoint: 
const getArtist = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `Artist Info: ${req.params.artistId}!`
        })
}

const updateArtist = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `ARTIST ${req.params.artistId} UPDATED!`
        })
}

const deleteArtist = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `ARTIST ${req.params.artistId} DELETED!`
        })
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
}