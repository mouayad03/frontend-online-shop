<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a href="categorys.php">Category</a>
    <a href="login.php">Logout</a>
</nav>
<h1>Create new Category</h1>
<div class="field">
    <label for="name-field">Name</label>
    <input type="text" id="name-field">
    <br>
</div>

<div class="field">
    <br>
    <label for="active-field">Active</label>
    <input type="number" id="active-field">
    <br>
</div>

<div class="field">
    <br>
    <a href="categorys.php"><button id="finish-button" type="submit">Finish</button></a>
</div>

<script src="controller/new_category.js"></script>