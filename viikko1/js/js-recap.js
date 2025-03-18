'use strict';
let outputElement = document.getElementById("output");
function output(x){
    outputElement.innerHTML=x;
}
const task = Number(prompt("Which task?"));
//npm init -y

switch(task){
    case 1:
        const origin = prompt("Give me any tempature in any unit.");
        const celToKel = Number(origin-273.15);
        const celToFah = Number(origin*1.8+32);

        const kelToCel = Number(origin+273.15);
        const kelToFah = Number((origin+273.15)*1.8+32);


        const fahToCel = Number((origin-32)/1.8);
        const fahToKel = Number(((origin-32)/1.8)-273.15);



        console.log("celsius to kelvin ", celToKel);
        console.log("celcius to fahrenheit ", celToFah);

        console.log("kelvin to celcius ", kelToCel);
        console.log("kelvin to fahrenheit ", kelToFah);

        console.log("fahrenheit to celcius ", fahToCel);
        console.log("fahrenheit to kelvin ", fahToKel);

        break;
        case 2:
            const x1 = Number(prompt("x1"));
            const y1 = Number(prompt("y1"));
            const x2 = Number(prompt("x2"));
            const y2 = Number(prompt("y2"));

            const Δx = x2-x1;
            const Δy = y2-y1;

            const distance = (Δx**2+Δy**2)**0.5;
            console.log(distance);

        break;
        case 3:
            const a = +(prompt("side a"));
            const b = parseFloat((prompt("side b")));
            const c = Number(prompt("side c"));

            let equilateral = false;
            let isosceles = false;
            let scalene =false;

            if(a==b && a==c && b==c){
                equilateral = true;
                console.log("The triangle is equilateral.");
                output("The triangle is equilateral");
            }else if(a==b || a==c || b==c){
                isosceles = true;
                console.log("The triangle is isosceles");
                output("The triangle is isosceles");
            }else{
                scalene = true;
                console.log("The triangle is scalene");
                output("The triangle is scalene");
            }

        break;
        case 4:
            output(Math.max(Math.min(Math.floor((prompt("Give me student score")-40)/12)+1, 5), 0));

}