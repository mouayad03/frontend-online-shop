<link rel="stylesheet" href="view/stylesheet/style.css">
<nav>
    <a href="index.html">Home</a>
    <a href="products.php">Product</a>
    <a class="active" href="categorys.php">Category</a>
    <a class="sign-in" href="login.php">Login</a>
</nav>
<h1>Categorys</h1>
<table id="categorys-table">
    <tr id="table-row">
        <th id="active-header">Active</th>
        <th id="name-header">Name</th>
    </tr>
    <tr>
        <td id="name-td">mouayad</td>
        <td id="active-td">1</td>
    </tr>
</table>

<div id="result-view"></div>

<a href="new_category.php"><button id="new-category">Create a new Category</button></a>
<script src="controller/categorys.js"></script>
