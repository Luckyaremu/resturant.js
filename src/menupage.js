const renderMenuPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }
    
    let menuContainer = document.createElement("ul");
    menuContainer.setAttribute("id", "menuContainer");
    
    let menuItems = [];

    menuItems.push({name: "Eggs", price: "5"});
    menuItems.push({name: "Bagel", price: "6"});
    menuItems.push({name: "Oats", price: "5"});
    menuItems.push({name: "Donut", price: "7"});
    menuItems.push({name: "Fruit Cup", price: "5"});
    menuItems.push({name: "Omelette", price: "9"});
    menuItems.push({name: "Pancake", price: "11"});
    menuItems.push({name: "Waffle", price: "12"});
    menuItems.push({name: "Pork Chop", price: "26"});

    menuItems.forEach((item)=> {
        let listItem = document.createElement("li");

        listItem.innerHTML = `<p class="itemName">${item.name}</p><p class="itemPrice">${item.price}</p><br>`;
        menuContainer.appendChild(listItem);
    });


    content.appendChild(menuContainer);
});

export {renderMenuPage};

