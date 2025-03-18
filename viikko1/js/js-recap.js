'use strict';
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

        case 2:
            const x1 = Number(prompt("x1"));
            const y1 = Number(prompt("y1"));
            const x2 = Number(prompt("x2"));
            const y2 = Number(prompt("y2"));

            const Δx = x2-x1;
            const Δy = y2-y1;

            const distance = (Δx**2+Δy**2)**0.5;
            console.log(distance);

        case 3:
            const a = Number(prompt("side a"));
            const b = Number(prompt("side b"));
            const c = Number(prompt("side c"));

                
}