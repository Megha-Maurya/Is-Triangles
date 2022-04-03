const sides = document.querySelectorAll('.side');
const btn = document.querySelector('#btn');
const out = document.querySelector('#out');

function calculateSumofSquare(a, b){
    const hypo = a*a + b*b;
    return hypo;
}

function calculateHypo(){
    const hypo = calculateSumofSquare(sides[0].value, sides[1].value);
    const hypoLength = Math.sqrt(hypo);
    out.innerText = "Hypotenuse is " + hypoLength;
}

btn.addEventListener('click', calculateHypo);
