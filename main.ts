function Creator_Signiture(Name: string): number {
    
    ValStrNum = 0
    for (let index = 0; index < Name.length; index++) {
        basic.showString(Name.charAt(ValStrNum))
        basic.pause(Speed)
        basic.clearScreen()
        ValStrNum += 1
    }
    return 0
}

let ValStrNum = 0
let Speed = 0
Speed = 100
Creator_Signiture("Hello   This is a demo of my program, used for displaying a string of characters. O N E  A T  A  T I M E")
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.forever(function on_forever() {
    
})
