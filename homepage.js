


    var data = [
    {
        imgUrl:"https://cdn-images.farfetch-contents.com/17/85/56/68/17855668_37664833_1000.jpg",
        brand:"New Season",
        name:"Jacquemus",
        itemName:"down-feather logo-print jacket",
        price:"$3,042",
      
    },
    {
        imgUrl:"https://cdn-images.farfetch-contents.com/17/85/07/40/17850740_37668489_1000.jpg",
        brand:"New Season",
        name:"Acne Studios",
        itemName:"Rive Gauche tote bag",
        price:"$2,649",
       
    },
    {
        imgUrl:"https://cdn-images.farfetch-contents.com/17/83/46/65/17834665_37738435_1000.jpg",
        brand:"New Season",
        name:"ETRO",
        itemName:"striped polo shirt",
        price:"$765",
      
    },
    {
        imgUrl:"https://cdn-images.farfetch-contents.com/17/53/80/30/17538030_37558778_1000.jpg",
        brand:"New Season",
        name:"AMIRI",
        itemName:"Terra embossed combat boots",
        price:"$2,195",
       
    }
]



data.map(function(elem) {
    
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    
    var image = document.createElement("img");
    image.setAttribute("src",elem.imgUrl);
    
    
    var brand = document.createElement("p");
    brand.textContent = elem.brand;
    
    var name = document.createElement("h4");
    name.textContent = elem.name;
    
    var itemName = document.createElement("p");
    itemName.textContent = elem.itemName;
    
    var price = document.createElement("p");
    price.textContent = elem.price;
    
    
    var div3 = document.createElement("div");
    var btn = document.createElement("button");
    btn.textContent = "Shop Now";
   
    div3.append(btn);
   
    
    
    div.append(image);
    div2.append(brand,name,itemName,price);
    
    div.append(div2,div3);
    document.querySelector("#container").append(div);
  
    
    
});

