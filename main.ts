input.onButtonPressed(Button.A, function () {
    music.setTempo(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- B F - F - B - ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
