let myFavorites = []

const postFav = (req, res) => {
    const Fav = req.body
    myFavorites.push(Fav)
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    if (id === 'all') {
        myFavorites = []
        res.status(200).json(myFavorites)
    } else {
        myFavorites = myFavorites.filter(fav => fav.id !== +id)
        res.status(200).json(myFavorites)
    }
}

module.exports = {
    postFav,
    deleteFav
}