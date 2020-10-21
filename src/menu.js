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
    
    createItem("sauce", "pesto", 2);
    createItem("sauce", "ham & cream", 5);

    
})();




const addMenuTable = (addedDiv) => {  
    
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu-div");
    addedDiv.appendChild(menuDiv);

    const pastaGrid = document.createElement("div");
    pastaGrid.setAttribute("id", "pasta-grid");    
    makeGrid(pastaList, pastaGrid, "pasta-cell");


    const sauceGrid = document.createElement("div");
    sauceGrid.setAttribute("id", "sauce-grid");    
    makeGrid(sauceList, sauceGrid, "sauce-cell");
    
    
    menuDiv.appendChild(pastaGrid);
    menuDiv.appendChild(sauceGrid);
    
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
          cell.textContent = itemProps[j];
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
  
  //console.log(selectedItems[0].price);
  
}

function setSauceSelection(cell) {
  const item = sauceList[cell.id];
  selectedItems[1] = item;
  //console.log(selectedItems[1]);
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