import cv2
import numpy as np
cap = cv2.VideoCapture(0)

while True:
    f, frame = cap.read()
    if f:
        cv2.imshow("frame", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()

