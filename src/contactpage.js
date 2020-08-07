const renderContactPage = (() => {
    const content = document.getElementById("content");
    while(content.lastChild){
        content.lastChild.remove();
    }

    let contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contactContainer");
    contactContainer.innerHTML = `<p>Name: Regular Business Owner</p><p>Phone: 123-456-7890</p><p>Email: fakebusinessaccount@email.provider</p>`;

    content.appendChild(contactContainer);
});

export {renderContactPage};