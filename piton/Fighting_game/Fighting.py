import pygame as py
import sys
from piton.Fighting_game.Chrcter import p1
from floor import suelito

def iniciarpant():
    py.init()
    personaj=p1()
    screen=py.display.set_mode((1000,700))
    piso=suelito()
    sprites=py.sprite.Group()
    sprites.add(piso)
    sprites.add(personaj)
    while True:
        for event in py.event.get():
            if event.type==py.QUIT:
                py.quit()
                sys.exit()
        screen.fill((255,255,255))
        keys=py.key.get_pressed()
        sprites.draw(screen)
        sprites.update(keys,piso.rect)
        py.display.flip()


iniciarpant()