'use strict';
let outputElement = document.getElementById("output");
function output(x){
    outputElement.innerHTML=x;
}
const task = Number(prompt("Which task?"));

switch(task){
    case 1:{
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
    }

    case 2:{
        const x1 = Number(prompt("x1"));
        const y1 = Number(prompt("y1"));
        const x2 = Number(prompt("x2"));
        const y2 = Number(prompt("y2"));

        const dx = x2-x1;
        const dy = y2-y1;

        const distance = (dx**2+dy**2)**0.5;
        console.log(distance);
        break;
    }

    case 3:{
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
    }

    case 4:{
        output(Math.max(Math.min(Math.floor((prompt("Give me student score")-40)/12)+1, 5), 0));
        break;
    }

    case 5:{
        const natty = +prompt("Give me a natural number");
        let sum = -0;

        if(natty>0 && Number.isInteger(natty)){
            for(let i = 1; i<=natty; i++){
                sum+=i;
            }
            output(sum);
        }else{
            output("idiot");
        }
        break;
    }

    case 6:{
        const userInput = +prompt();
        if(userInput>0 && Number.isInteger(userInput)){
            for(let i = 1; i <= userInput; i++){
                let row = document.createElement("tr");
                row.classList.add(i);
                document.getElementById("table").appendChild(row);
                for(let j = 1; j <= userInput; j++){
                    let product = document.createElement("td");
                    let productNode = document.createTextNode(i*j);
                    product.appendChild(productNode);
                    document.getElementsByClassName(i)[0].appendChild(product);
                }
            }
        }else{
            output("idiot");
        }
    }
}