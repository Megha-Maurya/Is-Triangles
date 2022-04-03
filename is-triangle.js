const inputs = document.querySelectorAll(".input");
const btn = document.querySelector("#btn");
const out = document.querySelector("#out");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function clickListerner(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value),);
    if(sumOfAngles === 180){
        out.innerText = "You form a Triangle";
    } else {
        out.innerText = "Oh Oh! You are failed to make a Triangle";
    }
}

btn.addEventListener('click', clickListerner);