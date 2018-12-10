var player1 = document.querySelector('#playerOne');
var player2 = document.querySelector('#playerTwo');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var reset = document.querySelector('#reset');
var max = document.querySelector('#maxScore');
var playScore = document.querySelector('#playingScore');





    btn1.addEventListener('click', function () {
        if (player1.textContent !== playScore.textContent && player2.textContent !== playScore.textContent) {
            player1.textContent++;
        }
        if(player1.textContent == playScore.textContent){
            player1.style.color = 'green';
            
        }    
    })



    btn2.addEventListener('click', function () {
        if (player1.textContent !== playScore.textContent && player2.textContent !== playScore.textContent) {
            player2.textContent++;
        }
        if(player2.textContent == playScore.textContent){
            player2.style.color = 'green';
            
        }  
    })



    reset.addEventListener('click', resetScore)

    max.addEventListener('input', function () {
        playScore.textContent = max.value;
        resetScore();

    })

function resetScore(){
        player1.textContent = 0;
        player1.style.color = 'black';
        
        player2.textContent = 0;
        player2.style.color = 'black';
}