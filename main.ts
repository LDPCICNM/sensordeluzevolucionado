let cantidad_de_luz = 0
basic.forever(function () {
    cantidad_de_luz = input.lightLevel()
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(cantidad_de_luz)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.plotBarGraph(
        cantidad_de_luz,
        255
        )
    }
})
