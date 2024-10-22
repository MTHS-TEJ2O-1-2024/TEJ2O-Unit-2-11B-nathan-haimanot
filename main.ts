/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Oct 2024
 * This program compares numbers
*/

let firstNumber = randint(0,99)
let secondNumber = randint(0,99)

input.onButtonPressed(Button.A, function(){
    basic.showString("#1:")
    basic.showNumber(firstNumber)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function(){
    basic.showString("#2:")
    basic.showNumber(secondNumber)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function(){
    if (firstNumber > secondNumber){
        basic.showString(firstNumber + ">" + secondNumber)
        } else {
        basic.showString(firstNumber + "<" + secondNumber)
        basic.showIcon(IconNames.Happy)
}
})