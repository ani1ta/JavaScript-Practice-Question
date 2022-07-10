function profitableGame(prob, prize, pay){
    return prob*prize>pay
}

console.log(profitableGame(0.2, 50, 9))
console.log(profitableGame(0.1, 2, 9))