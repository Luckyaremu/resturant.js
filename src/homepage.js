const renderHomepage = (() => {
    const content = document.getElementById("content");

    while(content.lastChild){
        content.lastChild.remove();
    }

    let homebox = document.createElement('div');
    homebox.id = "homebox";
    content.appendChild(homebox);


    let header = document.createElement('h1');
    header.innerText = "Rhosy Kitchen";
    homebox.appendChild(header);

    let review = document.createElement('p');
    review.innerText = `'Rhosy kitchen is the best resturant you can find around lekki axis of lagos state, natural and sea foods are avalaible at a relatively good price, shop with us and get 20% discount on your mail ticket  @rhosy_alex'`;
    homebox.appendChild(review);

    let image = document.createElement('img');
    image.setAttribute('src', 'table.jpg');
    homebox.appendChild(image);
});
export {renderHomepage};