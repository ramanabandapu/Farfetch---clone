let url =  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getDishes(){

try{

let res = await fetch(url);
let data = await res.json();
console.log(data);
let itemsdata = data.meals;
renderDishes(itemsdata);

}
catch(error){
  console.log(error)
}

}
getDishes();
// first time adding localstorage.

 let cart = localStorage.getItem("cart");

if(!cart){

  cart=[];
  localStorage.setItem("cart", JSON.stringify(cart));
  addCartCount(cart);
}
else{
  cart = JSON.parse(cart);
  addCartCount(cart);
}


function  addCartCount(cart){

  let cartCount = document.getElementById("count");
  cartCount.textContent = "cart count :" + cart.length;
}






function fetchDishes(url){
return fetch(url)
.then (function (res){
  return res.json();
})
.then (function(res){
  return res;
})

.catch (function(err){
  console.log(err);
})

}

function renderDishes(itemsdata){
let menu = document.getElementById("menu");
 menu.innerHTML = "";

itemsdata.forEach(function(elem){

let elemCard = document.createElement("div");

let image = document.createElement("img");
image.src = elem.strMealThumb;

let name = document.createElement("p");
name.textContent = elem.strMeal;

let price = document.createElement("p");
price.textContent ="Price:"+ Math.round(Math.random()*500);

let addtocart = document.createElement("button");
addtocart.textContent = "Add to Cart";
addtocart.onclick = function(event){
  addToCart(elem);
};

elemCard.append(image, name, price, addtocart)

menu.append(elemCard);


});


function addToCart(elem){
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.push(elem);

  localStorage.setItem("cart",JSON.stringify(cart));
  addCartCount(cart);
}
}
