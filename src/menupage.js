const renderMenuPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }
    
    let menuContainer = document.createElement("ul");
    menuContainer.setAttribute("id", "menuContainer");
    
    let menuItems = [];
    let image = document.createElement('img');
    homebox.appendChild(image);

    image.setAttribute('src', 'close-up-photo-of-food-3655916.jpg');
    menuItems.push({name: "Salmon fish", price: "N 5,000" });

    image.setAttribute('src', 'pepperoni-pizza-with-basil-leaves-1260968.jpg');
    menuItems.push({name: "Fresh pizza", price: "N 3,000"});

    image.setAttribute('src', 'salmon-and-green-vegetable-salad-3662189.jpg');
    menuItems.push({name: "Salmon fish and vegetables", price: "N 10,000"});
    

    menuItems.forEach((item)=> {
        let listItem = document.createElement("li");

        listItem.innerHTML = `<p class="itemName">${item.name}</p><p class="itemPrice">${item.price}</p><br>`;
        menuContainer.appendChild(listItem);
    });


    content.appendChild(menuContainer);
});
document.body.style.background = "#f3f3f3 url('pexels-lisa-fotios-1279330.jpg') no-repeat right top";
export {renderMenuPage};

