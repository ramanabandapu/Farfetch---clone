let cart = localStorage.getItem("cart");
if(!cart){
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
}
else{
    cart = JSON.parse(cart);
}

let total = cart.reduce(function(acc,curr){
    return acc + curr.price;
},0);


function totalDisplay(totalprice){

    let total = document.getElementById("total");
    total.textContent = "Total:" + totalprice;

}

totalDisplay(totalprice);

