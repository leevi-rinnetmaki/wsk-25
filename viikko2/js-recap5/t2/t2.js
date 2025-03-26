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

createUser();
