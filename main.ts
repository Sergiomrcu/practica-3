let Distancia = 0
let Velocidad = 150
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
    basic.showArrow(ArrowNames.North)
    Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showIcon(IconNames.No)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Velocidad)
    basic.pause(500)
})
