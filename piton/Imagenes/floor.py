import pygame as py
import sys


class suelito(py.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image=py.image.load("piton/Imagenes/waaw.png")
        self.rect=self.image.get_rect() 
        self.rect.bottom=700
        self.rect.width=1000 
        self.rect.height=10