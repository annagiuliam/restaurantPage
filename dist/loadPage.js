const loadPage = () => {

    const content = document.querySelector("#content");
    const h1 = content.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = "The Pasta Society";

    content.appendChild(h1);
};

export {
    loadPage
}