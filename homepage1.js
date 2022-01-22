
    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/45/71/52/17457152_36637834_1000.jpg",
            brand:"Exclusive",
            name:"JW Anderson",
            itemName:"rugby-motif sweatshirt",
            price:"$260",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/62/03/36/17620336_36746291_1000.jpg",
            brand:"New Season",
            name:"GUCCI",
            itemName:"GG Supreme baseball cap",
            price:"$264",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/57/42/72/17574272_37020496_1000.jpg",
            brand:"New Season",
            name:"Palm Angels",
            itemName:"Sprayed logo-print T-shirt",
            price:"$765",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/17/59/22/19/17592219_36598213_1000.jpg",
            brand:"Exclusive",
            name:"AMIRI",
            itemName:"Terra embossed combat boots",
            price:"$595",
           
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
        document.querySelector("#container3").append(div);
      
        
        
    });
    
    