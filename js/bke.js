/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/
var spelers = "player1";
var start_spel= 0;
var imagelist = ["", "", "", "", "", "", "", "", ""];
var playerimage;
var playernumber;

for(loop = 0; loop < 9; loop++){
    imagelist[loop] = document.getElementsByTagName('img')[loop];
}

imagelist[0].addEventListener("click", function(){ imagechange(0); });
imagelist[1].addEventListener("click", function(){ imagechange(1); });
imagelist[2].addEventListener("click", function(){ imagechange(2); });
imagelist[3].addEventListener("click", function(){ imagechange(3); });
imagelist[4].addEventListener("click", function(){ imagechange(4); });
imagelist[5].addEventListener("click", function(){ imagechange(5); });
imagelist[6].addEventListener("click", function(){ imagechange(6); });
imagelist[7].addEventListener("click", function(){ imagechange(7); });
imagelist[8].addEventListener("click", function(){ imagechange(8); });

window.onload = function () {
    buttonstartstop = document.querySelector('button');
    buttonstartstop.addEventListener('click', btnstartreset);

    playerimage = document.querySelector('#game-info img');
    playernumber = document.querySelector('#game-info table tr td:last-child')
};

function btnstartreset(event) {
    // alert("triggerd button");
    if (this.innerHTML == 'Start spel') {
        //speelveld_add_click();
        start_spel = 1;
        this.innerHTML = 'Reset spel';
    } else {
        this.innerHTML = 'Start spel';
        emptyspeelveld();
        start_spel = 0;
        //speelveld_remove_click();
    }
}

function imagechange(getal){
    //alert("image change function triggered" + getal);
    //document.getElementsByTagName('img')[getal].src = 'img/cross.jpg';
    //alert(imagelist[getal].src);
    if (start_spel == 0){
        alert('start het spel om te kunnen spelen');
        return;
    }
    if (imagelist[getal].src == 'http://localhost/javascript/nieuwe-bke/img/empty.jpg') {
        if (spelers == "player1") {
            imagelist[getal].src = 'img/cross.jpg';
            spelers="player2";
            changeplayer();
        } else {
            imagelist[getal].src = 'img/circle.jpg';
            spelers="player1";
            changeplayer();
        }
    } else {
        alert("kies een ander vakje");
    }
}

function changeplayer (){
    if (playerimage.src.match('img/cross.jpg')){
        playerimage.src ='img/circle.jpg';
    } else{
        playerimage.src = 'img/cross.jpg';
    }
    if (playernumber.innerHTML == '1'){
        playernumber.innerHTML = '2'
    } else {
        playernumber.innerHTML = '1'
    }
}

function emptyspeelveld (){
    for(loop = 0; loop < 9; loop++){
        imagelist[loop].src = 'img/empty.jpg';
    }
}
