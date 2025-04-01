export const restaurantRow = (restaurant)=>{
    const {_id, companyId, name, address, postalCode, city, phone, location, company} = restaurant;
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${name}</td>
    <td>${address}</td>
    `;
    return row;
}


export const restaurantModal = (restaurant, menu)=>{
    let row = restaurantRow(restaurant);
    let {courses} = menu;
    
    courses.forEach((e)=>{
        let {name, price, diets} = e;
        let menuHTML = document.createElement("tr");
        menuHTML.innerHTML=`
        <td>${name}<td/>
        <td>${price}<td/>
        <td>${diets}<td/>
        `;
       row.append(menuHTML);
    });
    return row;
}