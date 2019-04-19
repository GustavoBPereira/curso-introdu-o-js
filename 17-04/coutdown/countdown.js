
let check = false;


function xequeMate(){
    if(check == false){
        let timer1 = setInterval(function(){start()}, 1000);
        let timer2 = setTimeout(function(){clean()}, 13200);
        let count = 10;
        function start(){
            playBeep();
            document.getElementById('time').innerHTML = count;
            if(count == 0){
                clearInterval(timer1);
                document.getElementById('fire').src = 'explosion.gif';
                playThunder();
                document.getElementById('time').innerHTML = 'GAME OVER';
            }
            count --;
        }
        check = true;
    }
}

function playBeep(){
    let beep = new Audio();
    beep.src = 'Beep_Short.mp3';
    beep.play();
}

function playThunder(){
    let thunder = new Audio();
    thunder.src = 'Thunder_Crack.mp3';
    thunder.play();
}

function clean(){
    document.getElementById('fire').src = 'clean.png'
}