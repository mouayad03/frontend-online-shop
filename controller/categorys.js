var categorysTable = document.getElementById("categorys-table");
var categoryRow = document.getElementById("table-row");
var nameHeader = document.getElementById("name-header");
var activeHeader = document.getElementById("active-header");
var nameCell = document.getElementById("name-td");
var activeCell = document.getElementById("active-td");
var outputView = document.getElementById("result-view");

var categoryRequest = new XMLHttpRequest();
categoryRequest.open("GET", "API/V1/Categorys");
categoryRequest.onreadystatechange = onCategoryResponsed;
categoryRequest.send();

function onCategoryResponsed(event) {
  if (categoryRequest.readyState < 4) {
    return;
  }
    
  for (var i = 0; i < categoryRequest.length; i++) {
    var category = categoryRequest[i];
  
    nameCell.innerText = category.value;
    categoryRow.appendChild(nameCell);
  
    activeCell.innerText = category.active;
    categoryRow.appendChild(activeCell);
  
    categorysTable.appendChild(categoryRow);
  }
  
  document.body.appendChild(categorysTable);
}
