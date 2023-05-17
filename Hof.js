function calc(num1,num2,callback){
    return callback(num1,num2)

}
function add(num1,num2){
    return num1 + num2
}

function substract(num1,num2){
    return num1-num2
}
function multiply(num1,num2){
    return num1 * num2
}
console.log(calc(2,3,add))
console.log(calc(2,3,substract))
console.log(calc(2,3,multiply))