const addHome = () => {
    const homeTab = document.querySelector("#home-tab");
    homeTab.classList.add("active");
    
    const addedDiv = document.querySelector("#added-div");
    
    addImg(addedDiv);
    addDescription(addedDiv);   

    
}

const addImg = (addedDiv) => {
    const img = document.createElement("img");
    img.src = "./pasta-pic.jpg";    
    addedDiv.appendChild(img);

}

const addDescription = (addedDiv) => {
    const text = document.createElement("div");
    text.setAttribute("id", "home-text");
    text.textContent = "The Pasta Society makes your dreams come true. Choose the pasta, combine it with one of our delicious sauces and you're ready do immerse yourself into the Italian flavour."
    addedDiv.appendChild(text);
}

export { addHome }