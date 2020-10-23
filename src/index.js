import { loadHead } from "./loadHead";
import { addHome } from "./home";
import { addMenu } from "./menu";
import { addContact } from "./contacts"

loadHead();
addHome();

const addListeners = (() => {
    const tabs = document.querySelectorAll("button");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            clearPage(tabs);
            
            switch (tab.id) {
                case "home-tab" : addHome();
                break;
                case "menu-tab" : addMenu();
                break;
                case "contact-tab" : addContact();
                break;
            }
        })
    })

    
})();



const clearPage = (tabs) => {    
    const addedDiv = document.querySelector("#added-div");
    
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    
    addedDiv.innerHTML = "";
    
}