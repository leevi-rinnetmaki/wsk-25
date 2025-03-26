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

fetchUser();