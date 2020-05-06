<?php
require 'header.php';
?>

  </head>
<body>
  <nav>
    <ul id="navigation">
      <li><a href="../index.php">LearnC#</a></li>
      <li><a href="structure.php">Basic Structure</a></li>
      <li><a href="variables.php">Variable types</a></li>
      <li class="dropdown">
        <a class="dropbtn" href="#OI">OI</a>
        <div class="dropdown-content">
          <a href="output.php">Output</a>
          <a href="input.php">Input from user</a>
        </div>
      </li>
      <li><a href="selections.php">Selections</a></li>
      <li><a href="arrays.php">Arrays</a></li>
      <li><a href="methods.php">Methods</a></li>
      <li><a href="structs.php">Structs</a></li>
      <li class="active"><a href="forum.php">Structs</a></li>
      <li><a href="login.php">Structs</a></li>
    </ul>
  </nav>
        <main>
            <?php
                if(isset($_SESSION['userId'])){
                    echo '<p> You are logged in! </p>';
                }
                else{
                    echo '<p> You are logged out! </p>';
                }
            ?>
        </main>

<?php
require 'footer.php';
?>
