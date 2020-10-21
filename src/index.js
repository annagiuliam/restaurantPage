import { loadHead } from "./loadHead";
import { addHome } from "./home";
import { addMenu } from "./menu";

loadHead();
addHome();

const addListeners = (() => {
    const tabs = document.querySelectorAll("button");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            clearPage();
            
            switch (tab.id) {
                case "home-tab" : addHome();
                break;
                case "menu-tab" : addMenu();
                break;
            }
        })
    })

    return { tabs }
})();



const clearPage = () => {
    const tabs = addListeners.tabs;
    const addedDiv = document.querySelector("#added-div");
    
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    
    addedDiv.innerHTML = "";
    
}