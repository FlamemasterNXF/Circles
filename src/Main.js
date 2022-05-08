let diff
function gainNumber(x){
    data.numbers[0] = data.numbers[0].plus(x)
    for(let i=0;i<data.numbers.length;i++){
        if(data.numbers[i].gte(100)&&data.numbers[i+1]!==undefined){
            data.numbers[i+1] = data.numbers[i+1].plus(1)
            numberReset(i+1)
        }
    }
}
function numberReset(x){
    for(let i=0;i<x;i++) data.numbers[i] = D(1)
}
function mainLoop(){
    diff = (Date.now()-data.time)
    data.time = Date.now()
    calcLoop()
    for(let i=0;i<data.numbers.length;i++) progress(i, data.numbers[i])
    createBars()
    circleTextControls()
}
function calcLoop(){
    gainNumber(D(0.1).times(effect))
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