//number 1
function name(){
    var firstname="Faizal"
    var surname=" Suleman"
    var Fullname=firstname+surname
    return(Fullname)
}
console.log(name())

//number 2
function Volume(){
    var r=5
    var h=10
    var pi=3.142
    var VOCY= pi*(r*r)*h
    var VOC= (pi*(r*r)*h)/3
    var volume= VOCY+VOC
    return(volume)
}
console.log(Volume())

//number 3
function account(){
    var starting= 1000000
    var withdrawal=5200
    var days=30
    var amtwithdraw=withdrawal*days
    var final=starting-amtwithdraw
    return(final)
}
console.log(account())