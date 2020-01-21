const axios = require('axios');
const Dev = require('../models/Dev');
const parseString = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// O controller deve ter no maximo 5 funcoes:
// index = mostrar lista de valores,
// show = mostrar um unico valor,
// store = guardar um valor novo,
// update = modificar um valor ja existente,
// destroy = deletar um valor existente.

module.exports =  {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },
    
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });
    
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseString(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });

            // Filtrar as conexões que atendam as condições de distância e techs
            const sendSocketMessageTo = findConnections({ latitude, longitude }, techsArray);
            sendMessage(sendSocketMessageTo, 'newDev', dev);
        };

        return response.json(dev)
    },

    async update(request, response) {

    },

    async destroy(request, response) {

    },
};