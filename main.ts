enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
