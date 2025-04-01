export const sortByName = (a, b) => a.name.localeCompare(b.name);

export const clearHighlights = () => {
  document.querySelectorAll(".highlight").forEach((a) => a.classList.remove("highlight"));
};

export const clearDialog = () => {
  document.querySelector("dialog").innerHTML = "";
};

export const fetchRestaurants = async () => {
    const response = await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
    return response.json();
  };
  
  export const fetchMenu = async (restaurantId) => {
    const response = await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurantId}/en`);
    return response.json();
  };