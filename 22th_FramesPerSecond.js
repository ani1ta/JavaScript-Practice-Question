function FramePerSecond(minutes, fps){
    return minutes*(fps*60)
}

console.log(FramePerSecond(1, 1))
console.log(FramePerSecond(10, 1))
console.log(FramePerSecond(10, 25))