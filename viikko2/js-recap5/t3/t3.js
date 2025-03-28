async function errorFunction(){
    try{
        const getError = await fetch("https://reqres.in/api/unknown/23");
        const postError = await fetch("https://reqres.in/api/unknown/23", {method: "POST"});
        const putError = await fetch("https://reqres.in/api/unknown/23", {method: "PUT"});
        const deleteError = await fetch("https://reqres.in/api/unknown/23", {method: "DELETE"});

        if(!getError.ok){
            throw new Error(`Error ${getError.status}: ${getError.statusText}`);
        }
        if(!postError.ok){
            throw new Error(`Error ${postError.status}: ${postError.statusText}`);
        }
        if(!putError.ok){
            throw new Error(`Error ${putError.status}: ${putError.statusText}`);
        }
        if(!deleteError.ok){
            throw new Error(`Error ${deleteError.status}: ${deleteError.statusText}`);
        }
        
    }catch(error){
        console.log(error);
    }
}
errorFunction();