async function errorFunction(){
    try{
        const thisWorks = await fetch("https://reqres.in/api/users/1", {method: "GET"});
        console.log(thisWorks);

        const getError = await fetch("https://reqres.in/api/unknown/23");
        const postError = await fetch("https://reqres.in/api/unknown/23", {method: "POST"});
        const putError = await fetch("https://reqres.in/api/unknown/23", {method: "PUT"});
        const deleteError = await fetch("https://reqres.in/api/unknown/23", {method: "DELETE"});


    }catch(error){
        console.log(error);
    }
}

errorFunction();