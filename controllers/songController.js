// For ‘/’ endpoint:
const getSongs = (req, res, next) => {
    if(Object.keys(req.query).length){
        //query parameter
        const{
            songTitle,
            artist,
            genre

        } = req.query

        const filter = []
        
        if(songTitle) filter.push(songTitle);
        if(artist) filter.push(artist);
        if(genre) filter.push(genre);

        for (let i = 0; i < filter.length; i++){
            console.log(`Searching song(s) by: ${filter[i]}`)
        }

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Now playing ALL THE SONGS.'
        })
    }
    
}

const postSong = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'Song OUT NOW.'
        })
}

const deleteSongs = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: 'MUSIC SHUT DOWN.'
        })
}

// For ‘/:songId’ endpoint: 
const getSong = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `SONG ID INFO: ${req.params.songId}!`
        })
}

const updateSong = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `SONG ${req.params.songId} UPDATED!`
        })
}

const deleteSong = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `SONG ${req.params.songId} DELETED!`
        })
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
}