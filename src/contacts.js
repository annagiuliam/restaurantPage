const addContact = () => {
    const addedDiv = document.querySelector("#added-div");
    addInfo(addedDiv);
    addMap(addedDiv);

}

function addInfo(addedDiv) {
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contact-div");
    contactDiv.setAttribute('style', 'white-space: pre;');
    contactDiv.textContent = "Address: somewhere in Italy \r\n";
    contactDiv.textContent += "Phone: +39 000 00000 \r\n";
    contactDiv.textContent += "Location:"; 
    addedDiv.appendChild(contactDiv);
}

function addMap(addedDiv) {
    const imgDiv = document.createElement("img-div");
    const img = document.createElement("img");
    addedDiv.appendChild(imgDiv);
    
    img.src = "./italy-pic.jpg";    
    imgDiv.appendChild(img);
    
}

export { addContact }