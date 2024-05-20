import cv2
from deepface import DeepFace
import time
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)  #Consigues la camara

cada = 30  
frames = 0
    #se ponen las variables de los frames, cada 30 frames se va a hacer un analisis, se puede cambiar ese valor acorde a lo que necesitemos
while True:
    ret, frame = cap.read()
    if not ret:
        break

    frames += 1
    if frames % cada == 0: #aquí se hace lo de si el frame cae en un multiplo de 30, se hace la deteccion y se mide el tiempo de cada una
        try:
            
            framecambiado = cv2.resize(frame, (640, 480))
            
            
            ini = time.time()
            result = DeepFace.analyze(img_path=framecambiado, actions=['emotion'], enforce_detection=False)
            acaba = time.time()
            print(f"Tiempo de análisis: {acaba - ini:.2f} segundos")
            
            if isinstance(result, list):
                if len(result) > 0:
                    result = result[0]  # Si el resultado es una lista, toma el primer elemento
                else:
                    raise ValueError("No se detectaron caras.") # Si no, ps nomas dices ño
            
            emotion = result['dominant_emotion']
            print(emotion)
        except Exception as e:
            print(f"Error en la detección: {e}")
        
    cv2.imshow('Video', frame)
 
    if cv2.waitKey(1) & 0xFF == ord('p'):
        break


cap.release()
cv2.destroyAllWindows()





# Abrir el archivo de video
cap = cv2.VideoCapture(0)

while cap.isOpened():
    # Leer un cuadro del video
    ret, frame = cap.read()
    
    # Si no se pudo leer el cuadro, salir del bucle
    if not ret:
        break

    
    # Detectar caras en el cuadro
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))