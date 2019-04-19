
function jogar(){
    let pedra_marcada = document.getElementById("pedra").checked;
    let papel_marcado = document.getElementById("papel").checked;
    let tesoura_marcada = document.getElementById("tesoura").checked;

    if(pedra_marcada == false && papel_marcado == false && tesoura_marcada == false){
        alert("Selecione uma opção!");
    }else{
        //logica principal
        var sorteio = Math.floor(Math.random() * 3);
        console.log(sorteio);
        switch(sorteio){
            case 0:
                document.getElementById("pc").src = "pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "pctesoura.png";
                break;
        }
        //Empate
        if((pedra_marcada == true && sorteio == 0) || (papel_marcado == true && sorteio == 1) || (tesoura_marcada == true && sorteio == 2) ){
            document.getElementById("placar").innerHTML = "EMPATE";

        } else if ((pedra_marcada == true && sorteio == 2) || (papel_marcado == true && sorteio == 0) || (tesoura_marcada == true && sorteio == 1) ){
            document.getElementById("placar").innerHTML = "Jogador Ganhou";

        } else if ((pedra_marcada == true && sorteio == 1) || (papel_marcado == true && sorteio == 2) || (tesoura_marcada == true && sorteio == 0) ){
            document.getElementById("placar").innerHTML = "Computador Ganhou";
        }
    }
}

function resetar(){
    document.getElementById("PC").src="pc.png";
    document.getElementById("placar").innerHTML=""; 
}