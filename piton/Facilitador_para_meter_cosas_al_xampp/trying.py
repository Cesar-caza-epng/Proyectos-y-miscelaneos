import pyautogui
import time
import keyboard
from unidecode import unidecode

arch=open("C:/Users/Papitasaurio/Documents/GitHub/Proyectos-y-miscelaneos/piton/Facilitador_para_meter_cosas_al_xampp/artist.txt", "r")

test=arch.read()
testobien=test.replace("\n","")
list=testobien.split(".")
arch.close()

breik=False
def press(e):    
    global breik
    breik=True

pyautogui.hotkey("alt", "tab")


for i in range(98):
    if breik==True:
        break
    pyautogui.moveTo(901, 967)
    pyautogui.scroll(-300)
    pyautogui.moveTo(601, 967)
    time.sleep(0.7)
    pyautogui.scroll(-300)
    pyautogui.click()
    keyboard.on_press(press)

pyautogui.moveTo(700,181)
pyautogui.scroll(40000)
time.sleep(0.5)
pyautogui.click()
pyautogui.moveTo(700,181)
pyautogui.scroll(40000)
time.sleep(0.5)
pyautogui.click()

for i in range(0,155,2):
    pyautogui.press("tab")
    pyautogui.press("tab")
    pyautogui.write(list[i])
    pyautogui.press("tab")
    pyautogui.write(list[i+1])
    
