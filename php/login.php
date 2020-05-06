<?php
require 'header.php'; 
?>

  <link rel="stylesheet" type="text/css" href="../css/login_register.css">
  </head>
<body>
<nav>
      <ul id="navigation">
      <li><a href="../index.php">LearnC#</a></li>
        <li><a href="structure.php">Basic Structure</a></li>
        <li><a href="output.php">Output</a></li>
        <li><a href="variables.php">Variable types</a></li>
        <li><a href="input.php">Input from user</a></li>
        <li><a href="junctions.php">Junctions</a></li>
        <li><a href="arrays.php">Arrays</a></li>
        <li><a href="methods.php">Methods</a></li>
        <li><a href="structs.php">Structs</a></li>
        <li><a href="forum.php">Forum</a></li>
        <li><a class="active"  href="login.php">Login</a></li>
      </ul>
    </nav>
    <section class="loginregister">
      <?php
            if (isset($_GET['error'])) 
            {
              if($_GET['error'] == "sqlerror"){
                echo '<p class="signuperror">You cant Log in Right now. Try it Later</p>';
              }
              else if($_GET['error'] == "wrongpwd"){
                echo '<p class="signuperror">Invalid Password</p>';
              }
              else if($_GET['error'] == "wronguid"){
                echo '<p class="signuperror">The Username or E-Mail is false!</p>';
              }
            }
        if(isset($_SESSION['userId'])){
          echo '
          <form action="logic/logout.logic.php" mehtod="post">
          <button type="submit" name="logout-submit">Logout</button>
          </form>
          ';
        }
        else{
          echo'
          <form action="logic/login.logic.php" method="POST">
          <input name="mailuid" placeholder="username">
          <input name="pwd" type="password" placeholder="password">
          <button type="submit" name="login-submit">Login</button>
          </form>
          <a href="register.php">Dont Have an Account yet? Register now!</a>
          ';
        }

      ?>
    </section>

<?php
require 'footer.php'; 
?>

