'use strict'
let arr = [1, 2, 3, 4, 5, 6, 2, 8, 9, 10]
let indexArr = []

for (let i = 0; i < 1000; i++) {
  let x = Math.floor(Math.random() * arr.length)
  indexArr[i] = x
  console.log(indexArr[i])
}
