const input = document.querySelectorAll('.input');
const btn = document.querySelector('#btn');
const out = document.querySelector('#out');

function calculateAreaOfTriangle(base, height){
    const areaOfTriangle = (base*height)/2;
     return areaOfTriangle;
}

function calculateArea(){
    const areaOfTriangle = calculateAreaOfTriangle(input[0].value, input[1].value);
    out.innerText = "Area of Triangle : " + areaOfTriangle;
}

btn.addEventListener('click', calculateArea);