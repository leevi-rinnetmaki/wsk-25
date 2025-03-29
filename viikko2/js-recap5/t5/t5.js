// your code here
const getRestaurants = async()=>{
  let data = await fetch("https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants");
  let restaurants = await data.json();

  restaurants.sort((a, b)=>{return a.name.localeCompare(b.name)});
  restaurants.forEach((restaurant)=>{
    let row = document.createElement("tr");
    let name = document.createElement("th");
    let address = document.createElement("th");

    row.setAttribute("id", restaurant._id);

    name.textContent=restaurant.name;
    address.textContent=restaurant.address;

    row.addEventListener("click", async()=>{
      document.querySelectorAll(".highlight").forEach((a)=>{a.classList.remove("highlight")});
      document.querySelector("dialog").innerHTML="";
      row.classList.add("highlight");
      let modalName = document.createElement("p");
      let modalAddress = document.createElement("p");
      let modalPostalCode = document.createElement("p");
      let modalCity = document.createElement("p");
      let modalPhone = document.createElement("p");
      let modalCompany = document.createElement("p");

      modalName.textContent="Name: " + restaurant.name;
      modalAddress.textContent="Address: " + restaurant.address;
      modalPostalCode.textContent="Postal code: " + restaurant.postalCode;
      modalCity.textContent="City: " + restaurant.city;
      modalPhone.textContent="Phonenumber: " + restaurant.phone;
      modalCompany.textContent="Company: " + restaurant.company;

      document.querySelector("dialog").append(modalName, modalAddress, modalPostalCode, modalCity, modalPhone, modalCompany);

      let menu = await fetch(`https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${restaurant._id}/en`);
      menu = await menu.json();
      try{
        menu.days[0].courses.forEach((course)=>{
          let courseList = document.createElement("ol");
          let courseName = document.createElement("li");
          let coursePrice = document.createElement("li");
          let courseDiets = document.createElement("li");


          courseName.textContent=course.name;
          coursePrice.textContent=course.price;
          courseDiets.textContent=course.diets;

          courseList.append(courseName, coursePrice, courseDiets);
          document.querySelector("dialog").append(courseList);
        })
      }catch(error){
        console.log(error);
      }

      document.querySelector("dialog").showModal();
    });

    document.querySelector("dialog").addEventListener("click", (event) => {
      if (event.target === document.querySelector("dialog")) {
        document.querySelector("dialog").close();
        document.querySelectorAll(".highlight").forEach((a)=>{a.classList.remove("highlight")});
      }
    });

    row.append(name, address);
    document.querySelector("table").append(row);
  });
}

getRestaurants();