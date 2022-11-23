<link rel="stylesheet" href="view/stylesheet/style.css">
<body class="new-category-product">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a href="login.php">Logout</a>
</nav>
<h1>Create new Product</h1>
<table class="new-category-product">
    <tr>
        <td class="new-category-product">
            <br>
            <label for="sku-field">sku</label>
            <br>
            <input class="sku" type="text" id="sku-field">
            <br>
            <br>
            <label for="active-field">Active</label>
            <br>
            <input type="number" id="active-field">
            <br>
            <br>
            <label for="category-field">Category_id</label>
            <br>
	        <select id="category-field">
	        <option value="">(Null)</option>
	        </select>
            <br>
            <br>
            <label for="name-field">Name</label>
            <br>
            <input type="text" id="name-field">
            <br>
            <br>
            <label for="image-field">Image</label>
            <br>
            <input type="link" id="image-field">
            <br>
            <br>
            <label for="description-field">Description</label>
            <br>
            <input type="text" id="description-field">
            <br>
            <br>
            <label for="price-field">Price</label>
            <br>
            <input type="number" id="price-field">
            <br>
            <br>
            <label for="stock-field">Stock</label>
            <br>
            <input type="number" id="stock-field">
            <br>
        </td>
    </tr>
</table>

<br>
<button class="finish" id="product-button">Finish</button>


<script src="controller/new_product.js"></script>