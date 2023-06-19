
const axios = require('axios');

const URL_BASE = 'https://rickandmortyapi.com/api/character';

const fullfiled = (response, res) => {
    // console.log(response);
    const { id, name, status,species, gender, origin, image } = response.data;
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({ id, name, status,species, gender, origin, image }))
}

const rejected = (err,res) => {
    res.writeHead(500,{"Content-Type": "text/plain"})
    res.end(err.message)
}

const getCharById = (res,id) =>{
    axios.get(`${URL_BASE}/${id}`)
    .then(response => fullfiled(response, res ))
    .catch(function(err){rejected(err, res)})
}


module.exports = getCharById;

