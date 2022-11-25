<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a class="active" href="categorys.php">Category</a>
    <a class="sign-in" href="login.php">Login</a>
</nav>
<h1>Categorys</h1>
<!--Here is the table created for the list of the categorys.-->
<table class="products-categorys-table" id="categorys-table">
    <tr>
        <th class="products-categorys-header">Name</th>
        <th class="products-categorys-header">Active</th>
        <th class="products-categorys-header">Delete/Edit</th>
    </tr>
</table>
<br>
<br>

<!--Here is the Button created and definted -->
<a href="new_category.php"><button class="create-new" id="new-category">Create a new Category</button></a>

<!--Here will the php connected with the JavaScript-->
<script src="controller/categorys.js"></script>
