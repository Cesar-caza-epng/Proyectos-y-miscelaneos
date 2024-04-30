from fer import FER
import cv2

# Cargar una imagen
image = cv2.imread("piton\mewhenibarra.jpg")

# Crear un detector de emociones utilizando MTCNN
detector = FER(mtcnn=True)

# Detectar emociones en la imagen
result = detector.detect_emotions(image)
for feis in result:
    x,y,h,w=feis["box"]
    max=0
    emochon=""
    emotion=feis["emotions"]

print(emochon)