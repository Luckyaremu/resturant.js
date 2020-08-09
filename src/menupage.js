const renderMenuPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }
    
    let menuContainer = document.createElement("ul");
    menuContainer.setAttribute("id", "menuContainer");
    
    let menuItems = [];

    menuItems.push({name: "Family box of pizza", price: "N 5,000"});
    menuItems.push({name: "Fruit perfeit", price: "N 1,500"});
    menuItems.push({name: "Vegetables and pounded yam", price: "N 3,000"});

    menuItems.forEach((item)=> {
        let listItem = document.createElement("li");

        listItem.innerHTML = `<p class="itemName">${item.name}</p><p class="itemPrice">${item.price}</p><br>`;
        menuContainer.appendChild(listItem);
    });


    content.appendChild(menuContainer);
});

export {renderMenuPage};

