/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 * Gemaakt door Danique646
 **************************************************/
var spelers = "player1";
var start_spel= 0;
var imagelist = ["", "", "", "", "", "", "", "", ""];
var playerimage;
var playernumber;
var player1score;
var player2score;
var gamerounds;

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

    player1score = document.querySelector('.rounds-info tr td:last-child ');
    player2score = document.querySelectorAll('.rounds-info tr td')[3];

    gamerounds = document.querySelector('.rounds-info tr:last-child td:last-child');
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
        gamerounds.innerHTML = 0;
        player1score.innerHTML = 0;
        player2score.innerHTML = 0;
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
    array = imagelist[getal].src.split("/");
    img = array[array.length-1];
    if (img == 'empty.jpg') {
        if (spelers == "player1") {
            imagelist[getal].src = 'img/cross.jpg';
            spelers="player2";
            changeplayer();
        } else {
            imagelist[getal].src = 'img/circle.jpg';
            spelers="player1";
            changeplayer();
        }
        check_winner();
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

function check_winner(){
    if (
        imagelist[0].src.match('img/cross.jpg') && imagelist[1].src.match('img/cross.jpg') && imagelist[2].src.match('img/cross.jpg') ||
        imagelist[3].src.match('img/cross.jpg') && imagelist[4].src.match('img/cross.jpg') && imagelist[5].src.match('img/cross.jpg') ||
        imagelist[6].src.match('img/cross.jpg') && imagelist[7].src.match('img/cross.jpg') && imagelist[8].src.match('img/cross.jpg') ||
        imagelist[0].src.match('img/cross.jpg') && imagelist[3].src.match('img/cross.jpg') && imagelist[6].src.match('img/cross.jpg') ||
        imagelist[1].src.match('img/cross.jpg') && imagelist[4].src.match('img/cross.jpg') && imagelist[7].src.match('img/cross.jpg') ||
        imagelist[2].src.match('img/cross.jpg') && imagelist[5].src.match('img/cross.jpg') && imagelist[8].src.match('img/cross.jpg') ||
        imagelist[0].src.match('img/cross.jpg') && imagelist[4].src.match('img/cross.jpg') && imagelist[8].src.match('img/cross.jpg') ||
        imagelist[2].src.match('img/cross.jpg') && imagelist[4].src.match('img/cross.jpg') && imagelist[6].src.match('img/cross.jpg')
    ) {
        alert("Cross won!");
        player1score.innerHTML = parseInt(player1score.innerHTML) + 1;
        emptyspeelveld();
        gamerounds.innerHTML = parseInt(gamerounds.innerHTML) + 1;
    } else if (
        imagelist[0].src.match('img/circle.jpg') && imagelist[1].src.match('img/circle.jpg') && imagelist[2].src.match('img/circle.jpg') ||
        imagelist[3].src.match('img/circle.jpg') && imagelist[4].src.match('img/circle.jpg') && imagelist[5].src.match('img/circle.jpg') ||
        imagelist[6].src.match('img/circle.jpg') && imagelist[7].src.match('img/circle.jpg') && imagelist[8].src.match('img/circle.jpg') ||
        imagelist[0].src.match('img/circle.jpg') && imagelist[3].src.match('img/circle.jpg') && imagelist[6].src.match('img/circle.jpg') ||
        imagelist[1].src.match('img/circle.jpg') && imagelist[4].src.match('img/circle.jpg') && imagelist[7].src.match('img/circle.jpg') ||
        imagelist[2].src.match('img/circle.jpg') && imagelist[5].src.match('img/circle.jpg') && imagelist[8].src.match('img/circle.jpg') ||
        imagelist[0].src.match('img/circle.jpg') && imagelist[4].src.match('img/circle.jpg') && imagelist[8].src.match('img/circle.jpg') ||
        imagelist[2].src.match('img/circle.jpg') && imagelist[4].src.match('img/circle.jpg') && imagelist[6].src.match('img/circle.jpg')
    ) {
        alert("Circle won!");
        player2score.innerHTML = parseInt(player2score.innerHTML) + 1;
        emptyspeelveld();
        gamerounds.innerHTML = parseInt(gamerounds.innerHTML) + 1;

    } else if (
        !imagelist[0].src.match('img/empty.jpg') && !imagelist[1].src.match('img/empty.jpg') && !imagelist[2].src.match('img/empty.jpg') &&
        !imagelist[3].src.match('img/empty.jpg') && !imagelist[4].src.match('img/empty.jpg') && !imagelist[5].src.match('img/empty.jpg') &&
        !imagelist[6].src.match('img/empty.jpg') && !imagelist[7].src.match('img/empty.jpg') && !imagelist[8].src.match('img/empty.jpg')
    ){
        alert("It is a tie");
        emptyspeelveld();
        gamerounds.innerHTML = parseInt(gamerounds.innerHTML) + 1;
    }
}


/***************************************************
 * bke.js
 * Gemaakt door Danique646
 **************************************************/