let effect = D(1)
let higherEffects = []
function higherEffectsSetup(){
    let i=0
    while (i<100){
        higherEffects.push(D(1))
        i++
    }
}
function calcCircleEffects(){
    if(data.numbers[1]!==undefined){
        effect = (data.numbers[1].sqrt()).times(higherEffects[0])
    }

    let i=0
    while(data.numbers[i+2]!==undefined){
        higherEffects[i] = ((data.numbers[i+2].plus(1)).sqrt()).times(higherEffects[i+1])
        i++
    }
}