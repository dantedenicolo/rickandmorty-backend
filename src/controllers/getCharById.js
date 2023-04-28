const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(URL + id)
        const character = response.data
        res.status(200).json(character)
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).json({error: "Character not found"})
        } else {
            res.status(error.response.status).json({code: error.message})
        }
    }
}
// const getCharById = (req, res) => {
//     const { id } = req.params
//     axios.get(URL + id)
//     .then(response => {
//         const character = response.data
//         res.status(200).json(character)
//     })
//     .catch(error => {
//         if (error.response.status === 404) {
//             res.status(404).json({error: "Character not found"})
//         } else {
//             res.status(500).send({error: error.message})
//         }
//     })
// }

module.exports = getCharById