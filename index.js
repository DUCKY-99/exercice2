const express = require('express')
const app = express()
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Pokedex
const pokedex = [
  { id: 1, name: "Bulbizarre", type: "plante", level: 5 },
  { id: 4, name: "Salamèche", type: "feu", level: 5 },
  { id: 7, name: "Carapuce", type: "eau", level: 5 },
  { id: 25, name: "Pikachu", type: "electrik", level: 12 },
  { id: 39, name: "Rondoudou", type: "fee", level: 8 },
  { id: 52, name: "Miaouss", type: "normal", level: 9 },
  { id: 133, name: "Evoli", type: "normal", level: 10 }
];

//Requetes

//Lister Pokemons + Limites
//Si ma limite existe

app.get('/api/pokemon',(req,res)=>{
var limit = req.query.limit
if (limit){
    //Je teste si ma limite est valide
    if (limit > 0) {
        // Ma limite est valide
        res.send(pokemon.slice(0, limit));
    }else {
        res.send('ERREUR')
    }
}else {
    //Pas de limite
    res.send(pokemon)
}
})