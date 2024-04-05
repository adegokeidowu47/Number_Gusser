const input = document.querySelector('.number'),
      checkBtn = document.querySelector('.check'),
      restartBtn = document.querySelector('.restart'),
      validInputText = document.querySelector('.valid-input'),
      congratsMsg = document.querySelector('.congratulation-msg');
      msg = document.querySelector('.guess-wrong');


const COLOR_GREEN = 'lightgreen';
const COLOR_ORANGE = '#ffff00c9';
  
  
const guessNumber = [0,1,2,3,4,5,6,7,8,9];

let count = 5;

function myCount(){
  count--;
  const randomIndex = Math.floor(Math.random()*guessNumber.length);
  const randomNumber = guessNumber[randomIndex];


  function congratulationMsgs(){
    if(input.value == randomNumber){
      count = 5;
      congratsMsg.innerHTML = ` <div class="congratulation-msg">Congratulation!!!</div> `;
      congratsMsg.style.color = COLOR_GREEN;
      input.value = randomNumber;
      msg.innerHTML = `<p>You guessed right. Answer: ${randomNumber}</p>`;
      msg.style.color = COLOR_GREEN;
      return;
    }
  }
  
  function tryItAgain(){
    if (input.value > randomNumber) {
      msg.innerHTML = `<p class="answer">You guess too high. Answer: ${randomNumber}</p>`;
    }
    
    if (input.value < randomNumber) {
      msg.innerHTML = `<p class="answer">You guess too low. Answer: ${randomNumber}</p>`;
    }
    congratsMsg.innerHTML = ` <div class="congratulation-msg">Will you try again?</div>`;
    congratsMsg.style.color = COLOR_ORANGE;
    input.value = '';
    return;
  }

  function gameOver(){
    input.disabled = true;
    congratsMsg.innerHTML = `<div class="congratulation-msg">Game Over. 
       
    </div>`;
    msg.innerHTML = ` <span class = "restart_msg" >Restart a new game</span> `;
    congratsMsg.style.color = 'rgb(248, 247, 161)';
  }




  if (count > 0) {

    if (input.value == randomNumber) {
      congratulationMsgs();
    }
    else{
      tryItAgain();
    }
  
  } 
  if (count == 0){
    if (input.value == randomNumber) {
      congratulationMsgs();
    }
    else{
      gameOver()
    }
    }
    
  return;
}
  
  
  
checkBtn.addEventListener("click", ()=>{
  if(input.value === ''){
    validInputText.innerHTML = `<p>Enter a valid input</p>`;
    return;
    }
  else if(input.value > 9 || input.value < 0 ){
    validInputText.innerHTML = `<p>Enter a valid input</p>`;
    return;
  }
  else{
    validInputText.innerHTML = ``;
  }
  myCount();
});

restartBtn.addEventListener('click', () =>{
  window.location.reload();
});




