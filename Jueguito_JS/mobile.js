perso=document.getElementById("nia");
canv=document.getElementById("canvas");
let pressD=false
let posLpersonaje=parseInt(getComputedStyle(perso).Left,10)
let posTpersonaje=parseInt(getComputedStyle(perso).top,10)
let pressI=false
let pressA=false
let pressAB=false
let canvaR=canv.offsetLeft+canv.offsetWidth;
let canvaL=canv.offsetLeft;
let canvaT=canv.offsetTop;
let canvaB=canv.offsetTop+canv.offsetHeight;

function Empzr_Juego(){
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
        requestAnimationFrame(mover);

    }

    mover()
}

Empzr_Juego();