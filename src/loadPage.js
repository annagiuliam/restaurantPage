const loadPage = () => {

    const content = document.querySelector("#content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "The Pasta Society";
    content.appendChild(h1);

    const tab = document.createElement("div");
    tab.classList.add("tab");
    content.appendChild(tab);

    const createTabBtns = (() => {
        for (let i = 0; i <3; i++) {
            const button = document.createElement("button");  
            button.classList.add("tablinks");          
          // button.textContent = "Home";
            tab.appendChild(button);
        }
    })();
    
    const addBtnsContent = (() => {
        const buttons = document.querySelectorAll("button");
        buttons.item(0).textContent = "Home";
        buttons.item(1).textContent = "Menu";
        buttons.item(2).textContent = "Contact";
    })();
    
    
    const img = document.createElement("img");
    img.src = "./pasta-pic.jpg";    
    content.appendChild(img);

    const text = document.createElement("div");
    text.classList.add("text");
    text.textContent = "The Pasta Society makes your dreams come true. Choose the pasta, combine it with one of our delicious sauces and you're ready do immerse yourself into the Italian flavour."
    content.appendChild(text);

};

export {
    loadPage
}