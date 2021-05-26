

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
   
}
const url = "https://striveschool-api.herokuapp.com/api/product/";

      window.onload = async function () {
        const url = "https://striveschool-api.herokuapp.com/api/agenda/";
        const currentEvents = document.getElementById("currentEvents");

        try {
          const response = await fetch(url,{
              'method': 'GET',
              'headers': {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDE5ZWNlYWY0ODAwMTVjOTE4NzIiLCJpYXQiOjE2MjIwMzI3OTgsImV4cCI6MTYyMzI0MjM5OH0.DgYZBl7qEA5Bp4LmgBUEcFVUWLySQfd-KQksu872Z2o",
            }
          })
          
          const products = await response.json(); 
        console.log(products)
        products.forEach((product,i)=>{
            shopItems +=` <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
             <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        })
          

         
      } catch (err) {
          console.log(err);
        }
    }