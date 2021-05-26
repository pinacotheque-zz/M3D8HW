let products = []
let shopItems = document.getElementById("row")

window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDE5ZWNlYWY0ODAwMTVjOTE4NzIiLCJpYXQiOjE2MjIwMzI3OTgsImV4cCI6MTYyMzI0MjM5OH0.DgYZBl7qEA5Bp4LmgBUEcFVUWLySQfd-KQksu872Z2o",
        }
        })    
        .then((response) => response.json())
    .then((product) => {
        products = product
        console.log(products)


    })
    .catch((err)=> console.log(err))
   
}
const globalData = [];

      window.onload = async function () {
        const url = "https://striveschool-api.herokuapp.com/api/agenda/";
        const currentEvents = document.getElementById("currentEvents");

        // fetch(url, { method: "GET" })
        //   .then((res) => res.json())
        //   .then((events) => {
        //       DOM MANIPULATION GOES HERE
        //       forEach
        //   })
        //   .catch((err) => console.log(err));

        try {
          const response = await fetch(url); // this is getting the response from the API for a fetch request
          const events = await response.json(); // this is transforming the response in a json, asyncronous operation!

          //only after "response" and "events" variables receive the data, they get created, and the execution of the following code resumes
          //you can be sure that "events" variable will always have a value inside, and will never be undefined
          if (events.length > 0) {
            events.forEach((event) => {
              const listItem = document.createElement("li");
              listItem.classList.add(
                "list-group-item",
                "d-flex",
                "justify-content-between"
              );

              listItem.innerHTML = `<span>${event.name}</span><span class="badge badge-dark">${event.price}€</span>`;

              currentEvents.appendChild(listItem);
            });
          } else {
            currentEvents.innerHTML = `<div class="alert alert-info" role="alert">
                                        No events planned yet!
                                        </div>`;
          }

        } catch (err) {
          console.log(err);
        }
        console.log("this is happening after everything");
      };