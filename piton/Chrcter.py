import pygame as py
import sys


class p1(py.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image=py.image.load("piton/Imagenes/vlu.png")
        self.rect=self.image.get_rect()
        self.rect.x=0
        self.gravedad=5
        self.toca=False
        self.xsalt=0
    
    def update(self, keys, rect):
        if keys[py.K_w] and self.toca==True:
            self.xsalt=self.rect.x
            self.gravedad-=5
        if keys[py.K_a]:
            self.rect.x=self.rect.x-3
        if keys[py.K_d]:
            self.rect.x=self.rect.x+3
        self.rect.y+=self.gravedad
        if self.gravedad<5:
            self.gravedad+=1
        if self.rect.bottom<rect.top and self.xsalt+100<self.rect.x:
                self.toca=False
        
        if self.rect.colliderect(rect):
            if self.rect.bottom>rect.top:
                self.toca=True
                self.rect.bottom=rect.top
    
        