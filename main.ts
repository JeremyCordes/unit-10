input.onButtonPressed(Button.A, function () {
    radio.sendString("Marco")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Polo")
})
radio.setGroup(1)
