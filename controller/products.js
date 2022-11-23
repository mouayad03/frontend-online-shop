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
  }
}
