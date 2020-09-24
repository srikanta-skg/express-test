const express = require('express')
// const uuid = require('uuid')
const router = express.Router()
var Movie_json = require('../../data.json')

router.get('/', (req, res) => { // get all movies
    res.json(Movie_json)
})

router.get('/director', (req, res) => { // get directors
    const director = Movie_json.map(ele => ele['Director'])
    res.json(director)
})

router.get('/:id', (req, res) => { //get movies by id
    const found = Movie_json.some(element => element['Rank'] == parseInt(req.params.id))
    if (found) {
        res.json(Movie_json.filter(element => element['Rank'] == req.params.id))
    } else {
        res.status(400).json({
            msg: "Movie Rank Not Found"
        })
    }
})

// Create Movie
// router.post('/', (req, res) => {
//     res.send(req.body)
// })

router.post('/', (req, res) => {
    const newMember = {
        // id: uuid.v4(),
        'Title': req.body['Title'],
        "Rank": req.body['Title'],
        status: 'active'
    }

    if (!newMember['Title'] || !newMember['Rank']) {
        return res.status(400).json({
            msg: 'pls Enter name and rank'
        })
    }

    Movie_json.push(newMember)
    res.json(Movie_json)

})

module.exports = router