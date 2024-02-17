let diff
function gainNumber(lowestGain){
    // Circle 1 Gain
    data.numbers[0] = data.numbers[0].plus(lowestGain)

    for(let i=0;i<data.numbers.length;i++){
        if(data.numbers[i].gte(100) && data.numbers[i+1] !== undefined){

            //Circle 2 Behavior if Circle 1 is 'forever' at 100%
            if(i === 0 && lowestGain.gte(100)){
                // console.log(`Ran! Current Circle 2: ${data.numbers[1]}, it should increase by ${lowestGain.div(100)}`)
                data.numbers[1] = data.numbers[1].plus(lowestGain.div(100))
                numberReset(1)
                // console.log(`It is now ${data.numbers[1]}`)
                continue
            }


            data.numbers[i+1] = data.numbers[i+1].plus(1)
            numberReset(i+1)

        }
    }
}
function numberReset(x){
    for(let i=0;i<x;i++) data.numbers[i] = D(1)
}
function mainLoop(){
    diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    calcLoop()
    for(let i=0;i<data.numbers.length;i++) progress(i, data.numbers[i])
    createBars()
    circleTextControls()
}
function calcLoop(){
    let gain = D(1).times(effect)
    gainNumber(gain.times(diff))
    calcCircleEffects()
}
function fixNumbers(){
    for(let i=0; i<data.numbers.length;i++){
        data.numbers[i] = D(data.numbers[i])
    }
}
function switchTab(i){
    data.currentTab = i
}
window.setInterval(function(){
    mainLoop()
}, 50);