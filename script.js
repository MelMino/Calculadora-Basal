const BOTON = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
BOTON.addEventListener("click", () => {//funcion anonima
    const VALOR = (document.getElementById('peso').valueAsNumber)
    
    if (VALOR > 0) {
        calcularFlujo(VALOR);
        
    }
    else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

function calcularFlujo(VALOR){
    if(VALOR<=30){
        let flujo =Math.round(hollydaySegar(VALOR)/24);
        let man = flujo*1.5;
        ERROR.style.display = 'none';
        FLU.innerHTML=flujo+ "cc/Hr";
        MAN.innerHTML="m+m/2"+man+ "cc/hr";
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    }
    else{
        let fl = superficieCorporal(VALOR);
        ERROR.style.display = 'none';
        FLU.innerHTML=Math.floor(fl * 1500) + 'SC Multiplicando por 1500';
        MAN.innerHTML=Math.floor(fl * 2000) + 'SC Multiplicando por 2000';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

    }

}
function hollydaySegar(VALOR) {
    let resul;
    if (VALOR <= 10) {
        resul = (VALOR * 100);
    }
    else if ((VALOR <= 20)) {
        resul = (1000 + ((VALOR - 10) * 50));
    }
    else {
        resul = (1500 + ((VALOR - 20) * 20));

    }

    return (resul);
}
function superficieCorporal(VALOR) {
    if (VALOR >= 30) {
        let calcu1;
        let calcu2;
        calcu1=((VALOR*4)+7);
        calcu2=(VALOR+90);
        console.log(calcu1,calcu2);
        return (calcu1 / calcu2);
    }
}
/* function click(){
        console.log("Se presiono el boton");*/