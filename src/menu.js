const addMenu = () => {
    const menuTab = document.querySelector("#menu-tab");
    menuTab.classList.add("active");
    
    const addedDiv = document.querySelector("#added-div");
    
    addMenuTable(addedDiv);
    addEventListeners();
    addCalcBtn(addedDiv);
    addSelectionDiv(addedDiv);    
}

const menuItem = (type, name, price) => {
    
    return { type, name, price }
}

const pastaList = [];
const sauceList = [];
const selectedItems = [];

const createItem = (type, name, price) => {
  const item = menuItem(type, name, price);
 

  if (item.type === "pasta") {
    pastaList.push({name, price});
  } else {
    sauceList.push({name, price});
  }
  
}

const createMenuItems = (() => {   

    createItem("pasta", "spaghetti", 3.5);
    createItem("pasta", "bucatini", 3);
    createItem("pasta", "farfalle", 4);
    createItem("pasta", "linguine", 4);
    
    createItem("sauce", "pesto", 2);
    createItem("sauce", "ham & cream", 5);
    createItem("sauce", "marinara", 3);
    createItem("sauce", "mushroom", 4);
    
})();


const addMenuTable = (addedDiv) => {  
    
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu-div");
    addedDiv.textContent = "Click on the pasta and the sauce you prefer and check the total price."
    addedDiv.appendChild(menuDiv); 

    
    createGridDivs("pasta-title", "Pasta", "pasta-grid");
    const pastaGrid = document.querySelector("#pasta-grid");   
    makeGrid(pastaList, pastaGrid, "pasta-cell");   
    
    createGridDivs("sauce-title", "Sauces", "sauce-grid");
    const sauceGrid = document.querySelector("#sauce-grid");
    makeGrid(sauceList, sauceGrid, "sauce-cell");
        
}

function createGridDivs(titleId, titleText, gridId) {
  const menuDiv = document.querySelector("#menu-div");
    const grid = document.createElement("div");
    const title = document.createElement("div");
    title.setAttribute("id", titleId);
    title.textContent = titleText;
    grid.appendChild(title);
    grid.setAttribute("id", gridId);
    menuDiv.appendChild(grid);
}

function addCalcBtn(addedDiv) {
  const calcBtn = document.createElement("button");
  calcBtn.setAttribute("id", "calc-btn");
  calcBtn.textContent = "Calculate price";
  addedDiv.appendChild(calcBtn);

  calcBtn.addEventListener("click", () => {
    showSelection();
  })
}

function makeGrid(list, grid, newClass) {  

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let itemProps = Object.values(item);
    let itemKeys = Object.keys(item);
    
    for (let j = 0; j < itemProps.length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", newClass);
      cell.setAttribute("id", i);
    
        if (isNaN(itemProps[j])) {
          let capProp = itemProps[j].charAt(0).toUpperCase() + itemProps[j].slice(1);
          cell.textContent = capProp;
          cell.classList.add(itemKeys[j]);
        } else {
          cell.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(itemProps[j]);
          cell.classList.add(itemKeys[j]);
        }
    
      grid.appendChild(cell);  
    }

  }
  
}

const addEventListeners = () => {
 const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      
      if (cell.classList.contains("pasta-cell")) {
        setPastaSelection(cell);
        
      } else if (cell.classList.contains("sauce-cell")) {
        setSauceSelection(cell);
        //calculatePrice();
      }
    })
  })
};

function setPastaSelection(cell) {
  const item = pastaList[cell.id];
  selectedItems[0] = item; 
  
}

function setSauceSelection(cell) {
  const item = sauceList[cell.id];
  selectedItems[1] = item;
}

function showSelection() {  
  const selectionDiv = document.querySelector("#selection-div");
  const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculatePrice())
  selectionDiv.textContent = `You chose ${selectedItems[0].name} with ${selectedItems[1].name}. Price: ${price}`;
  
}

function addSelectionDiv(addedDiv) {
  const selectionDiv = document.createElement("div");
  selectionDiv.setAttribute("id", "selection-div");
  addedDiv.appendChild(selectionDiv);
}



function calculatePrice() {
 return selectedItems[0].price + selectedItems[1].price;
}

export { addMenu }