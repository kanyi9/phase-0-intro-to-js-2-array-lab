// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push("Ralph")
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
function destructivelyAppendCat(Broom){
    return("Milo","Otis","Garfield","Broom")
}
function destructivelyPrependCat(Arnold){
    return("Arnold","Milo","Otis","Garfield")
}
function removeFirstCat(){
    return cats.slice(1)
}
function removeLastCat(){
    return cats.slice(0,-1)
}



