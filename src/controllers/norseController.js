const { to, ReE, ReS }  = require('../services/util.service');
const constants  = require('../constants');

exports.get = (req, res, next) => {
    let codificar, decodificar;

    if (req.query.codificar) {
        codificar = codificarNorse(req.query.codificar);
        return ReS(res,  { "morse" : codificar } );
        
    }
    if (req.query.decodificar) {
        decodificar = deCodificarNorse( req.query.decodificar ) ;
        return ReS(res,  { "morse" : decodificar } );
    }
};

let codificarNorse = function (entrada){
    var codificar = "";

    for (var i=0; i<entrada.length; i++) {
        var char = entrada.charAt(i).toLowerCase();
        if (constants.CARACTERES[char]) {
            codificar += constants.CARACTERES[char];
            codificar += " ";
        }
    }
    return codificar;
}

let deCodificarNorse = function (entrada){
    var decodificar = "";
    var palavras = entrada.split("/");

    for (var i=0; i<palavras.length; i++) {
        var character = palavras[i].split(" ");
        for (var j=0; j<character.length; j++) {
            if (constants.MORSE[character[j]])
            decodificar += constants.MORSE[character[j]];
        }
        decodificar += " ";
    }
    return decodificar;
}

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};