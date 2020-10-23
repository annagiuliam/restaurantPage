const loadHead = () => {
    const container = document.querySelector("#container");

    createTitle(container);
    createTabBtns();  
    createAddedDiv(container);  

};

const createTitle = (container) => { 
    
    const h1 = document.createElement("h1");
    h1.textContent = "The Pasta Society";
    container.appendChild(h1);    
}

const createTabBtns = () => {
    const tab = document.createElement("div");
    tab.setAttribute("class", "tab");
    container.appendChild(tab);

    for (let i = 0; i <3; i++) {
        const button = document.createElement("button");  
        button.setAttribute("class", "tablinks");          
        tab.appendChild(button);
    }
    addBtnsContent();
};

const createAddedDiv = (container) => {
    const addedDiv = document.createElement("div");
    addedDiv.setAttribute("id", "added-div");
    container.appendChild(addedDiv);
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