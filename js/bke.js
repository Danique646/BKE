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

window.onload = function () {

    for(loop = 0; loop < 9; loop++){
        imagelist[loop] = document.getElementsByTagName('img')[loop];

        (function(index){
            imagelist[loop].onclick = function(){
                imagechange(index);
            }
        })(loop);
    }

    buttonstartstop = document.querySelector('button');
    buttonstartstop.addEventListener('click', btnstartreset);

    playerimage = document.querySelector('#game-info img');
    playernumber = document.querySelector('#game-info table tr td:last-child');
};

function btnstartreset(event) {
    // alert("triggerd button");
    if (this.innerHTML == 'Start spel') {
        //speelveld_add_click();
        start_spel = 1;
        this.innerHTML = 'Reset spel';
    } else {
        //speelveld_remove_click();
        start_spel = 0;
        this.innerHTML = 'Start spel';
        emptyspeelveld();
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
