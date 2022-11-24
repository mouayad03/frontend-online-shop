var productsTable = document.getElementById("products-table");
var productResponse = [ ];

var productRequest = new XMLHttpRequest();
productRequest.open("GET", "API/V1/Products");
productRequest.onreadystatechange = onCategoryResponsed;
productRequest.send();

function onCategoryResponsed() {
  if (productRequest.readyState < 4) {
    return;
  }

  productResponse = JSON.parse(productRequest.responseText);

  for (var i = 0; i < productResponse.length; i++) {
    var productRow = document.createElement("tr");
    productsTable.appendChild(productRow);
  
    var skuCell = document.createElement("td");
    skuCell.innerText = productResponse[i].sku;
    productRow.appendChild(skuCell);

    var activeCell = document.createElement("td");
    activeCell.innerText = productResponse[i].active;
    productRow.appendChild(activeCell);

    var categoryIdCell = document.createElement("td");
    categoryIdCell.innerText = productResponse[i].category_id;
    productRow.appendChild(categoryIdCell);

    var nameCell = document.createElement("td");
    nameCell.innerText = productResponse[i].name;
    productRow.appendChild(nameCell);

    var imageCell = document.createElement("td");
    imageCell.innerText = productResponse[i].image;
    productRow.appendChild(imageCell);

    var descriptionCell = document.createElement("td");
    descriptionCell.innerText = productResponse[i].description;
    productRow.appendChild(descriptionCell);

    var priceCell = document.createElement("td");
    priceCell.innerText = productResponse[i].price;
    productRow.appendChild(priceCell);

    var stockCell = document.createElement("td");
    stockCell.innerText = productResponse[i].stock;
    productRow.appendChild(stockCell);

    var deleteAndEditCell = document.createElement("td");
    productRow.appendChild(deleteAndEditCell);
    deleteAndEditCell.className = "delete-and-edit-td";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "edit-and-delete-button";
    deleteButton.setAttribute("delete-product-id", productResponse[i].product_id);
    deleteButton.addEventListener("click", onDeleteButtonPressed);
    deleteAndEditCell.appendChild(deleteButton);
  
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit-and-delete-button"
    editButton.setAttribute("edit-product-id", productResponse[i].product_id);
    editButton.addEventListener("click", onEditButtonPressed);
    deleteAndEditCell.appendChild(editButton);
  }
}

function onDeleteButtonPressed(event) {
  deleteRequest = new XMLHttpRequest();
  deleteRequest.open("Delete", "API/V1/Product/" + event.currentTarget.getAttribute("delete-product-id"));
  deleteRequest.onreadystatechange = onCategoryDeleteResponsed;
  deleteRequest.send();
}

function onCategoryDeleteResponsed() {
  if (deleteRequest.readyState < 4) {
    return;
  }
  alert("Deleted");
}

function onEditButtonPressed(event) {
  editRequest = new XMLHttpRequest();
  editRequest.open("PUT", "API/V1/Product/" + event.currentTarget.getAttribute("edit-product-id"));
  editRequest.onreadystatechange = onEditResponsed;
  editRequest.send(JSON.stringify(categoryDate));  
}

function onEditResponsed(event) {
  if (editRequest.readyState < 4) {
    return;
  }
  alert("Updated");
}