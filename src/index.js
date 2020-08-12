import {renderHomepage} from "./homepage";
import {renderMenuPage} from "./menupage";
import {renderContactPage} from "./contactpage";


document.getElementById("homeButton").addEventListener("click", renderHomepage);
document.getElementById("menuButton").addEventListener("click", renderMenuPage);
document.getElementById("contactButton").addEventListener("click", renderContactPage);

renderHomepage();