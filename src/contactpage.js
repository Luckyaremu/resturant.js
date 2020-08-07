const renderContactPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    contactContainer.innerHTML = `<p>Name: Rhosy kitchen</p><p>Phone: +2348032236791 </p><p>Email: rhosy_kitchen@gmail.com</p>`;

    content.appendChild(contactContainer);
});
document.body.style.background = "#f3f3f3 url('pexels-negative-space-33999.jpg') no-repeat right top";
export {renderContactPage};