const loadHead = () => {
    const content = document.querySelector("#content");

    createTitle(content);
    createTabBtns();  
    createAddedDiv(content);  

};

const createTitle = (content) => {
    
    
    const h1 = document.createElement("h1");
    h1.textContent = "The Pasta Society";
    content.appendChild(h1);    
}

const createTabBtns = function() {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    content.appendChild(tab);

    for (let i = 0; i <3; i++) {
        const button = document.createElement("button");  
        button.classList.add("tablinks");          
        tab.appendChild(button);
    }
    addBtnsContent();
};

const createAddedDiv = (content) => {
    const addedDiv = document.createElement("div");
    addedDiv.setAttribute("id", "added-div");
    content.appendChild(addedDiv);
}

const addBtnsContent = () => {
    const buttons = document.querySelectorAll("button");
    const homeTab = buttons.item(0);
    const menuTab = buttons.item(1);
    const contactTab = buttons.item(2);

    homeTab.textContent = "Home";
    homeTab.id = "home-tab";
    
    menuTab.textContent = "Menu";
    menuTab.id = "menu-tab";

    contactTab.textContent = "Contact";
    contactTab.id = "contact-tab";
};

export {
    loadHead
}