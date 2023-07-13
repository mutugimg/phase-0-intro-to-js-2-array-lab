// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name){
    cats.push(name) 
}
function destructivelyPrependCat (name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat (){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const moreCats = [...cats,"Broom"]
    return moreCats
}
function prependCat(name){
    const moreCats2 = ["Arnold",...cats]
    return moreCats2
}
function removeLastCat(){
    const copyOfCats = cats.slice(0,2)
    return copyOfCats
}
function removeFirstCat(){
    const copyOfCats2 = cats.slice(1,3);
    return copyOfCats2
}