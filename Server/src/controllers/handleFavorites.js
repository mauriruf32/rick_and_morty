let myFavorites = [];

function postFav(req, res){
    myFavorites.push(req.body)

    return res.status(200).json(myFavorites)
}

function deleteFav(req,res){
    const { id } = req.params
    // console.log(id);

    myFavorites = myFavorites.filter(char => char.id != id)
    // console.log(myFavorites);

    return res.status(200).json(myFavorites)
}

function getFav(req, res){
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
    getFav
}