// task: write loop that outputs 1,3,5,7,9

for(let i = 1; i <10; i++ && i++) {
console.log(i)
}

// can also do i+2 // i + 2)

for(let i = 2; i <11; i++ && i++) {
    console.log(i)
}

// ========= Remainder Operator ========
//Remainder operator (aka modulo) returns the remainder left over 
// when one operand is divided by a second operand. 
// It always takes the sign of the dividend

console.log("Remainders")
console.log( 4 % 3)
console.log(20 % 2)
console.log(20%9)

//use cases
// find out whether something is divisible by 2 means it is even
// An even number will always have remainder of 0
// an odd number will always have a remainder of 1

//24 => true
console.log(24 % 2 === 0)
console.log(35 % 2 === 0)
