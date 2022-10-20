'use strict'
let score=20
//** */
const displayMessage=function(message){
    document.querySelector('.message').textContent=message
}
let secretNumber=Math.trunc(Math.random()*20)+1
//console.log(secretNumber);
document.querySelector('.check').addEventListener('click',
function(){
    let guess=Number(document.querySelector('.guess').value)
   let highscore=Number(document.querySelector('.highscore').textContent)
    if(!guess){
displayMessage('⛔ 没有数字');
       // document.querySelector('.message').textContent='⛔ 没有数字'
    }else if(guess===secretNumber){
displayMessage('🎉 猜对了')
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').textContent = secretNumber;


if(score>highscore){
    highscore=score
    document.querySelector('.highscore').textContent=highscore;
}

    }else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber?'📈 猜大了':'📉 猜小了')
                score--
                document.querySelector('.score').textContent=score
               // console.log(document.querySelector('.score').value);
        }else{displayMessage('💥 你输了')
document.querySelector('.score').textContent=0
            }
        }
    }
)
document.querySelector('.again').addEventListener('click',function(){
displayMessage('开始猜测...');
score=20
 document.querySelector('.score').textContent = score;

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.guess').value = '';
document.querySelector('.number').textContent = '?';
secretNumber = Math.trunc(Math.random() * 20) + 1;

})