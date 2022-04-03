const form = document.querySelector('.form');
const submitBtn = document.querySelector('#btn');
const out = document.querySelector('#out');

const correctAnswers = ["90°", "right angled", "Equilateral" , "180°" , "Hypotenuse"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(form);
    for(let value of formResult.values()){
        if (value === correctAnswers[index]){
            score = score + 1;
        } 
            index = index + 1;
    }   
    out.innerText = "Your score is: " + score;
}

submitBtn.addEventListener('click', calculateScore);
