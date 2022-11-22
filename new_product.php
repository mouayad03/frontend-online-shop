<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a href="login.php">Logout</a>
</nav>
<h1>Create new Product</h1>
<div class="field">
    <label for="sku-field">sku</label>
    <input type="number" id="sku-field">
    <br>
</div>

<div class="field">
    <br>
    <label for="active-field">Active</label>
    <input type="number" id="active-field">
    <br>
</div>

<div class="field">
	<label for="category-field">Category_id</label>
	<select id="category-field">
	<option value="">(Null)</option>
	</select>
</div>

<div class="field">
    <label for="name-field">Name</label>
    <input type="text" id="name-field">
    <br>
</div>

<div class="field">
    <label for="image-field">Image</label>
    <input type="link" id="image-field">
    <br>
</div>

<div class="field">
    <label for="description-field">Description</label>
    <input type="text" id="description-field">
    <br>
</div>

<div class="field">
    <br>
    <label for="price-field">Price</label>
    <input type="number" id="price-field">
    <br>
</div>

<div class="field">
    <br>
    <label for="stock-field">Stock</label>
    <input type="number" id="stock-field">
    <br>
</div>

<div class="field">
    <br>
    <a href="products.php"><button id="finish-button" type="submit">Finish</button></a>
</div>

<script src="controller/new_product.js"></script>