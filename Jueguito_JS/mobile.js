perso=document.getElementById("nia");
canv=document.getElementById("canvas");
bot=document.getElementById("botonjuego");
ene=document.getElementById("ene");
let enemi=[];
let cooldown=false
let juegoini=false;
bot.addEventListener("click", function(){
    if(juegoini===false){
        if(enemi.length>0){
            enemi.forEach(ene =>{
                canv.removeChild(ene);
            });
            enemi=[];
        }

        juegoini=true;
        active=true;
        Empzr_Juego();
        console.log(enemi)
    }
});
let pressD=false;
let posLpersonaje=parseInt(getComputedStyle(perso).Left,10);
let posTpersonaje=parseInt(getComputedStyle(perso).top,10);
let pressI=false;
let pressA=false;
let pressAB=false;
let active=true;
let movene=false;

function Empzr_Juego(){
    if(active){
        let canvaR=canv.offsetLeft+canv.offsetWidth;
            let canvaL=canv.offsetLeft;
            let canvaT=canv.offsetTop;
            let canvaB=canv.offsetTop+canv.offsetHeight;
            perso.style.left=posLpersonaje;
            perso.style.top=posTpersonaje;
            document.addEventListener("keydown" ,function(event){
                if(event.key==="d" || event.key==="D"){
                    pressD=true;
                }

                if(event.key==="a" || event.key==="A"){
                    pressI=true;
                }

                if(event.key==="w" || event.key==="W"){
                    pressA=true;
                }

                if(event.key==="s" || event.key==="S"){
                    pressAB=true;
                }

                if((event.key==="u" || event.key==="U") && cooldown===false){
                    atacac();
                }
            });

            document.addEventListener("keyup" ,function(event){
                if(event.key==="d" || event.key==="D"){
                    pressD=false;
                }

                if(event.key==="a" || event.key==="A"){
                    pressI=false;
                }

                if(event.key==="w" || event.key==="W"){
                    pressA=false;
                }

                if(event.key==="s" || event.key==="S"){
                    pressAB=false;
                }
            });

            function atacac(){
                cooldown=true;
                enemi.forEach(ene => {
                    if((parseInt(getComputedStyle(ene).left,10)>parseInt(getComputedStyle(perso).left,10) && parseInt(getComputedStyle(ene).left,10)<parseInt(getComputedStyle(perso).left,10)+200) && (parseInt(getComputedStyle(ene).top,10)+130>=parseInt(getComputedStyle(perso).top,10) && parseInt(getComputedStyle(ene).top,10)-130<parseInt(getComputedStyle(perso).top,10))){
                    console.log("TOCOOOOOO");
                    }
                });

                ataque=document.createElement("img");
                ataque.style.position="fixed";
                ataque.src="Imagenes/eplochion.webp"
                ataque.style.width=140 + "px";
                ataque.style.height=140 + "px";
                ataque.style.left=parseInt(getComputedStyle(perso).left,10)+100-40 +"px";
                ataque.style.top=parseInt(getComputedStyle(perso).top,10)+130-40 +"px";
                canv.appendChild(ataque);
                console.log(ataque);
                setTimeout(acabarcac, 500);
            }

            
            function acabarcac(){
                if(canv.contains(ataque)){
                    canv.removeChild(ataque);       
                }
                cooldown=false
            }

            let posleft
            let postop

            function mover(){
                posleft = parseInt(getComputedStyle(perso).left,10);
                postop = parseInt(getComputedStyle(perso).top,10);
                if(pressD && posleft<canvaR-100){
                    let posact = parseInt(getComputedStyle(perso).left,10);
                    perso.style.left=(posact+10) + "px";
                }

                if(pressI && posleft>canvaL){
                    let posact = parseInt(getComputedStyle(perso).left,10);
                    perso.style.left=(posact-10) + "px";
                }

                if(pressA && postop>canvaT){
                    let posact = parseInt(getComputedStyle(perso).top,10);
                    perso.style.top=(posact-10) + "px";
                }

                if(pressAB && postop+100<canvaB){
                    let posact = parseInt(getComputedStyle(perso).top,10);
                    perso.style.top=(posact+10) + "px";
                }
                if(active){
                    requestAnimationFrame(mover);
                }
                

            }

            let velocidad=5

            function mvrenemi(){ /*tambien checar si está colisionando*/
                enemi.forEach(ene =>{
                    pos=parseInt(getComputedStyle(ene).left,10);
                    top=parseInt(getComputedStyle(ene).top,10);
                    ene.style.left=pos-velocidad + "px";

                    if(pos<canvaL){
                        ene.style.left=canvaR-100 + "px";
                        ene.style.top=getRandomNumberInRange(canvaT, canvaB-100) + "px";
                    }
                    
                    if((posleft+50>pos && posleft<pos+100) || (postop+50>top && postop<top+100)){
                        active=false;
                        juegoini=false;
                    }
                });
                if(active){
                    requestAnimationFrame(mvrenemi);
                }
                
            }

            function getRandomNumberInRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function crearEnemi(){
                for (let i = 0; i < 5; i++) {
                    nuienemi=document.createElement("img");
                    nuienemi.src="Imagenes/java-logo-1.png"
                    nuienemi.style.height=100 + "px";
                    nuienemi.style.width=100 + "px";
                    nuienemi.style.position="absolute";
                    nuienemi.style.left=canvaR-100 + "px";
                    nuienemi.style.top=getRandomNumberInRange(canvaT, canvaB-100) + "px";
                    enemi.push(nuienemi);
                }
            }
            

            function PintarEnemis(){
                enemi.forEach(ene =>{
                    canv.appendChild(ene);
                })
            }

            crearEnemi();
            PintarEnemis()
            
            mvrenemi();
            mover();
        }
    }
