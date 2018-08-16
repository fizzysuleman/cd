//number1
function name(Firstname,Lastname){
    var surname=Firstname+" "+Lastname
    return (surname)
}
var nam1=name("Faizal","Suleman")
console.log(nam1)

//number2
function Volume(radius,height){
    var pi=3.142
    var VOCY= pi*(radius*radius)*height
    var VOC= (pi*(radius*radius)*height)/3
    var volume=VOCY+VOC
    return(volume)
}
var vol1=Volume(5,10)
console.log(vol1)

//number 3
function account(starting,withdraw,period){
var final=starting-(withdraw*period)
return(final)
}
var acc1=account(1000000,5200,30)
console.log(acc1)