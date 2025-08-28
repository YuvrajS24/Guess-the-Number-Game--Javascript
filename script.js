const submitGuess=document.querySelector('.b1')
const newGame=document.querySelector('.b2')
const inputBox=document.querySelector('#myInput')

var randomNumber=Math.floor(Math.random() * 100)+1;
var values = [];
var numm=10;


submitGuess.addEventListener('click',()=>{


    const val = Number(inputBox.value.trim());


        if (!inputBox.value.trim()) return;

            if (val < 1 || val > 100) {
        document.querySelector('.gp1').textContent = "⚠️ Please enter a number between 1 and 100.";
        inputBox.value = "";
        return; 
    }


if (numm > 0) {
    values.push(val);
    numm--;
    inputBox.value = "";
    document.querySelector('.p2').textContent = `You have ${numm} guesses remaining.`;
    document.querySelector('.gp2').textContent = `Your guesses: ${values.join(", ")}`;
} 
 

        if(val===randomNumber){
            document.querySelector('.gp1').textContent=`You got it in ${values.length} guesses. The number was ${randomNumber}`;
            inputBox.disabled = true;
    submitGuess.disabled = true

        }

        else if(val<randomNumber){
            document.querySelector('.gp1').textContent=`${val} is too low`;
        }

        else{
            document.querySelector('.gp1').textContent=`${val} is too high`;
        }

        if (numm === 0 && val !== randomNumber) {
    document.querySelector('.gp1').textContent =
        `😢 Game Over! The number was ${randomNumber}`;

    inputBox.disabled = true;
    submitGuess.disabled = true;
}

    });




 newGame.addEventListener('click',()=>{

  
  randomNumber = Math.floor(Math.random() * 100) + 1;
    values = [];
    numm = 10;

    document.querySelector('.gp1').textContent = "";
    document.querySelector('.gp2').textContent = "";
    document.querySelector('.p2').textContent = `You have ${numm} guesses remaining.`;

    inputBox.value = "";
    inputBox.disabled = false;
    submitGuess.disabled = false;
 

});


inputBox.addEventListener('keydown',function(e){

    if (e.key === "Enter") {
             
                submitGuess.click(); 
            }

});

