async function fetchUser() {
    try {
        const response = await fetch("https://reqres.in/api/users/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

async function createUser() {
    const url = "https://reqres.in/api/users";
    const userData = {
        name: "John Doe",
        job: "Software Developer"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("User Created:", data);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

const tést = {
    method : "e",

}

async function testajax(){
    const x = await fetch("https://reqres.in/api/users", {method: "POST",headers: {"Content-Type": "application/json"}});
    console.log(x);
    console.log(await x.json());
    console.log(JSON.stringify(await x.json));
}

testajax();