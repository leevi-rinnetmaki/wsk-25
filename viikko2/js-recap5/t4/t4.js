async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const data = fetchData("https://reqres.in/api/users", {method: "POST"})
console.log(data);

async function pleaseJustPrintIt(print){
    console.log(await print);
}
pleaseJustPrintIt(data);