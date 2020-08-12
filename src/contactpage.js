const renderContactPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }
    
    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    contactContainer.innerHTML = `<p>Name: Rhosy Kitchen </p><p>Phone: +2348032236791 </p><p>Email: rhosy_kitchen@gmail.com</p>`;

    content.appendChild(contactContainer);
});

export {renderContactPage};