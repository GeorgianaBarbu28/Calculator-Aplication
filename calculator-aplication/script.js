//asa NU
//document.querySelector(".titlu-pagina").innerText = "Titlu nou";

//asa DA
//let titluPagina = document.querySelector(".titlu-pagina");
//titluPagina.innerText="Titlu nou partea 2";


//---------------------- Calculator ------------------------------

let butonPlus = document.querySelector(".buton-plus");
let butonMinus = document.querySelector(".buton-minus");
let butonInmultire = document.querySelector(".buton-inmultire");
let butonImpartire = document.querySelector(".buton-impartire");
let butonResetare = document.querySelector('.buton-resetare');
let cifraCalculator = document.querySelector(".cifra-calculator");
let valoareCurenta = document.getElementById('valoare-curenta');
let eroareMesaj=document.querySelector(".error-simbol");

let x = 0;

let plusUnu = () => {
    x ++;
    actualizeazaCifra();
};

let minusUnu = () => {
    x --;
    actualizeazaCifra();
};

let y = 2;

let inmultitCuDoi = () => {
    x = x * y;
    actualizeazaCifra();
};

let impartitLaDoi = () => {
    x = x / 2;
    actualizeazaCifra();
};

let updateValoareCurenta = () => {
    valoareCurenta.innerText = x; 
};

let resetValoare = () => {
    x = 0; 
    updateValoareCurenta();
};

let actualizeazaCifra =() => {
    cifraCalculator.innerText=x;
    if(x <= -10 ){
        cifraCalculator.style.color = 'red';
        cifraCalculator.style.fontSize="48px";
        
    }
    if(x >= -10 && x<=10){
        cifraCalculator.style.color = 'black';
        cifraCalculator.style.fontSize="60px";
        
    }
    if(x>=10){
        cifraCalculator.style.color = 'green';
        cifraCalculator.style.fontSize="82px";
    }
    if(x <= -20) {
        x=-20;
        cifraCalculator.innerText=x;
        eroareMesaj.style.display= "block";
    }


};

butonPlus.addEventListener("click", plusUnu);
butonMinus.addEventListener('click', minusUnu);
butonInmultire.addEventListener("click", inmultitCuDoi);
butonImpartire.addEventListener("click", impartitLaDoi);
butonResetare.addEventListener('click', resetValoare);




