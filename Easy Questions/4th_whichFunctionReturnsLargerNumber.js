// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function whichIsLarger(f, g){
    if(f>g){
        return "f"
    }
    else if(f<g){
        return "g"
    }
    else{
        return "neither"
    }
}

console.log(whichIsLarger(() => 150, () => 100))
console.log(whichIsLarger(() => 25, () => 250))
console.log(whichIsLarger(() => 505, () => 5050))
console.log(whichIsLarger(() => 5050, () => 5050))