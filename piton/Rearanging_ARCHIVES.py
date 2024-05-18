import os
import shutil
import tkinter as tk

list_termina_ima=[".jpg",".png",".jpeg",".webp"]
list_termina_vid=[".mp3",".mp4"]
list_termina_comp=[".rar",".zip"]
list_termina_docs=[".pdf", ".docx",]
list_termina_eje=[".exe"]

imaname="Imagenes"
vidname="Videos"
compname="Comprimidos"
docname="Documentos"

Ventana=tk.Tk()
Ventana.geometry("800x400")
Ventana.title("ORGANIZADOR")
Ventana.resizable(False, False)
def crear_encontrarcarp():
    global labelerror
    Dir_des=entry_dire.get()
    if os.path.exists(Dir_des):
        labelerror.config(text="Organizando...")
        mvrarch(Dir_des)
    else:
        labelerror.config(text="RUTA NO VALIDA")

def mvrarch(Dir_des):
    global labelerror
    contima=0
    contcomp=0
    contvid=0
    contdox=0
    conteje=0
    print(Dir_des)
    for arch in os.listdir(Dir_des):
        termina=os.path.splitext(arch)[1].lower()
        
        if termina in list_termina_ima:
            if contima<1:
                if os.path.exists(Dir_des+"/Imagenes"):
                    print("Ya existe")
                else:
                    ima=os.path.join(Dir_des, imaname)
                    os.makedirs(ima)
                    print("Se creo con exito")
            rutarch=Dir_des + "/" + arch
            contima=1
            shutil.move(rutarch, Dir_des+"/Imagenes")
            print("Se movieron las imagenes con sexito")

        if termina in list_termina_vid:
            if contvid<1:
                if os.path.exists(Dir_des+"/Videos"):
                    print("Ya existe")
                else:
                    vid=os.path.join(Dir_des, vidname)
                    os.makedirs(vid)
                    print("Se creo con exito")
            rutarch=Dir_des +"/" + arch
            contvid=1
            shutil.move(rutarch, Dir_des+"/Videos")
            print("Se movieron los Videos con sexito")

        if termina in list_termina_comp:
            if contcomp<1:
                if os.path.exists(Dir_des+"/Comprimidos"):
                    print("Ya existe")
                else:
                    comp=os.path.join(Dir_des, compname)
                    os.makedirs(comp)
                    print("Se creo con exito")
            rutarch=Dir_des +"/" + arch
            contcomp=1
            shutil.move(rutarch, Dir_des+"/Comprimidos")
            print("Se movieron los Comprimidos con sexito")
        
        if termina in list_termina_docs:
            if contdox<1:
                if os.path.exists(Dir_des+"/Documentos"):
                    print("Ya existe")
                else:
                    comp=os.path.join(Dir_des, docname)
                    os.makedirs(comp)
                    print("Se creo con exito")
            rutarch=Dir_des +"/" + arch
            contdox=1
            shutil.move(rutarch, Dir_des+"/Documentos")
            print("Se movieron los Comprimidos con sexito")
    labelerror.config(text="Archivos Organizados Con exito")
            
            
Label_Reorga=tk.Label(Ventana, text="REORGANIZADOR DE ARCHIVOS", font=("Helvetica", 16))
Label_Reorga.pack()

Label_inst=tk.Label(Ventana, text="Ingresa direccion a organizar:", font=("Helvetica", 16))
Label_inst.place(x=10, y=100)

labelerror=tk.Label(Ventana, font=("Helvetica", 16))
labelerror.place(x=10, y=200)

entry_dire=tk.Entry(Ventana, font=("Helvetica", 16))
entry_dire.place(x=500, y=100)

boton_ini=tk.Button(Ventana, text="ORGANIZAR ARCHIVOS!!!", command=crear_encontrarcarp)
boton_ini.place(x=300, y=300)

Ventana.mainloop()