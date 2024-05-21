perso=document.getElementById("nia");
canv=document.getElementById("canvas");
bot=document.getElementById("botonjuego");
ene=document.getElementById("ene");
let cooldown=false
let juegoini=false;
bot.addEventListener("click", function(){
    if(juegoini===false){
        Empzr_Juego();
    }
});
let pressD=false
let posLpersonaje=parseInt(getComputedStyle(perso).Left,10)
let posTpersonaje=parseInt(getComputedStyle(perso).top,10)
let pressI=false
let pressA=false
let pressAB=false


function Empzr_Juego(){
    let canvaR=canv.offsetLeft+canv.offsetWidth;
    let canvaL=canv.offsetLeft;
    let canvaT=canv.offsetTop;
    let canvaB=canv.offsetTop+canv.offsetHeight;
    juegoini=true;
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
        if((parseInt(getComputedStyle(ene).left,10)>parseInt(getComputedStyle(perso).left,10) && parseInt(getComputedStyle(ene).left,10)<parseInt(getComputedStyle(perso).left,10)+200) && (parseInt(getComputedStyle(ene).top,10)+130>=parseInt(getComputedStyle(perso).top,10) && parseInt(getComputedStyle(ene).top,10)-130<parseInt(getComputedStyle(perso).top,10))){
            console.log("TOCOOOOOO");
        }

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
