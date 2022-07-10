// Minutes into seconds

// function convert(minutes){
//     return minutes*60
// }

// const ans = convert(3)
// document.write(ans)

// const ans1 = convert(5)
// document.write(ans1)

// const ans2 = convert(2)
// document.write(ans2)


function convert(seconds){
        return (seconds/60)/60
}
const ans = convert(7200)
document.write(ans+ "\n")
document.write("\n")


function convert1(hour){
    return (hour*60)*60
}
const ans2 = convert1(1)
document.write(ans2)