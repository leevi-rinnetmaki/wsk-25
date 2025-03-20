'use strict';

switch(+prompt("Which tasketh?")){
    case 1:{
        const fruits = ["æppel", "banan", "oranġe", "grap", "kiwe"];
        //console.log(fruits);
        //fruits.forEach((element) => console.log(element));
        console.log("Lengthe of fruytes scroll: ", fruits.length);
        console.log("Element at yere twain", fruits[2]);
        console.log("T'last element", fruits[fruits.length-1]);

        const vegetables = [];
        vegetables.push(prompt("Grant me a root"));
        vegetables.push(prompt("Grant me a second root of the earth"));
        vegetables.push(prompt("Grant me mine last root."));

        console.log(vegetables);
        console.log("Længthe of scrolls of vegitables: ", vegetables.length);
        break;
    }

    case 2:{
        const numbers = [];
        for(let i = 1; i<=5; i++){
            numbers.push(+prompt("Gif me a numbre"));
        }
        console.log(numbers);
        console.log(numbers.includes(+prompt("Verify if a numeral doth exist within the scroll of numbres")));
        numbers.pop();
        console.log(numbers);
        numbers.sort((a, b) => a - b);
        console.log(numbers);
        break;
    }

    case 3:{
        const numbers = [];
        const evenNumbers = [];
        let input;
        do{
            input = +prompt("Giveth me a number to addeth unto the scroll. Giveth me aught else to stay the repetition.");
            if(!isNaN(input)){
                numbers.push(input);
            }
        }while(!isNaN(input));

        for(let i of numbers){
            console.log(i%2);
            if(i%2 == 0){
                evenNumbers.push(i);
                let para = document.createElement("li");
                let paraNode = document.createTextNode(i);
                para.appendChild(paraNode);
                document.getElementById("list").appendChild(para);
            }
        }
        console.log(numbers);
        console.log(evenNumbers);
        break;
    }

    case 4:{
        const sortArray = numberArray => numberArray.sort((a, b) => a-b);
        console.log(sortArray([4,76,2,-5]))
        break;
    }

    case 5:{
        const sortArray = (numberArray, order) => {
            if(order == "asc") return numberArray.sort((a, b) => a-b);
            else if(order == "desc") return numberArray.sort((a, b) => b-a);
        }
        console.log(sortArray([4,76,2,-5], "asc"))
        console.log(sortArray([4,76,2,-5], "desc"))
        break;
    }

    case 6:{
        const filmArray = [];
        for(let i = +prompt("How many motion pictures dost thou wish to add unto the scroll?"); i>0; i--){
            let Title = prompt("What be the title of the motion picture?");
            let rating = +prompt("Grant me the measure of the motion picture from 1 to 5.");
            while(isNaN(rating) || rating<1 || rating>5){
                rating = +prompt("That was not a just rating.");
            }

            let film = {
                title: Title,
                rating: rating
            }
            filmArray.push(film);

        }

        /*
        for(let i of filmArray){
            i.rating
        }*/
        filmArray.sort((a, b) => b.rating - a.rating);
        for(let i of filmArray){
            let row = document.createElement("tr");

            let rowTitle = document.createElement("td");
            let rowTitleNode = document.createTextNode(i.title);
            rowTitle.appendChild(rowTitleNode);
            row.appendChild(rowTitle);

            let rowRating = document.createElement("td");
            let rowRatingNode = document.createTextNode(i.rating);
            rowRating.appendChild(rowRatingNode);
            row.appendChild(rowRating);

            document.getElementById("table").appendChild(row);
        }
    }

}