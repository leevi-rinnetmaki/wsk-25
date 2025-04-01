import { restaurantRow, restaurantModal } from "./components.js";
import { table, dialog } from "./variables.js";
import { sortByName, clearHighlights, clearDialog, fetchRestaurants, fetchMenu } from "./utils.js";

const getRestaurants = async () => {
  const restaurants = await fetchRestaurants();
  restaurants.sort(sortByName);

  restaurants.forEach((restaurant) => {
    const row = restaurantRow(restaurant);
    row.setAttribute("id", restaurant._id);
    table.append(row);

    row.addEventListener("click", async () => {
      clearHighlights();
      clearDialog();
      row.classList.add("highlight");

      const menu = await fetchMenu(restaurant._id);
      dialog.append(restaurantModal(restaurant, menu));
      dialog.showModal();
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
        clearHighlights();
      }
    });
  });
};

getRestaurants();