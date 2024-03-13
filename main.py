def Creator_Signiture(Name: str):
    global ValStrNum
    ValStrNum = 0
    for index in range(len(Name)):
        basic.show_string(Name.char_at(ValStrNum))
        basic.pause(Speed)
        basic.clear_screen()
        ValStrNum += 1
    return 0
ValStrNum = 0
Speed = 0
Speed = 100
Creator_Signiture("Hello   This is a demo of my program, used for displaying a string of characters. O N E  A T  A  T I M E")
basic.pause(1000)
basic.show_icon(IconNames.HAPPY)

def on_forever():
    pass
basic.forever(on_forever)
