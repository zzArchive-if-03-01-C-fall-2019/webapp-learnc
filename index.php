<?php
session_start();
?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>LearnC#</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/mainpage.css">
  </head>
  <body>
    <nav>
      <ul id="navigation">
        <li class="active"><a href="index.php">LearnC#</a></li>
        <li><a href="php/structure.php">Basic Structure</a></li>
        <li><a href="php/variables.php">Variable types</a></li>
        <li class="dropdown">
          <a class="dropbtn" href="#OI">OI</a>
          <div class="dropdown-content">
            <a href="php/output.php">Output</a>
            <a href="php/input.php">Input from user</a>
          </div>
        </li>
        <li><a href="php/selections.php">Selections</a></li>
        <li><a href="php/arrays.php">Arrays</a></li>
        <li><a href="php/methods.php">Methods</a></li>
        <li><a href="php/structs.php">Structs</a></li>
        <li><a href="php/forum.php">Forum</a></li>
        <li><a href="php/login.php">Login</a></li>
      </ul>
    </nav>
    <article>
      <h1 class="maintitle">Welcome to LearnC#</h1>
      <section>
        <div class="parallax">
          <h2 class="about_us_title">About us</h2>
          <p class="about_us_text">On this website you can learn the basics of the programming-language C#,
          which you can program on editors like visual studio code or visual studio.
          You will learn here the structure of a C#-program, how you can write and issue something in a terminal,
          process data and learn what types of data there are. You will find here exact descriptions, which will help you.
          Have fun at the programming.</p>
        </div>
      </section>

      <section>
        <h2>Here's a list of the topics that will be discussed in this short summary of the basics of C#</h2>
        <ol>
          <li>Basic structure of a C# program</li>
          <li>Different Variable types and their usage</li>
          <li>Basic output</li>
          <li>Getting Input from the user</li>
          <li>Selections and logical Operators</li>
          <li>Arrays</li>
          <li>Methods and their usages</li>
          <li>Structs</li>
        </ol>
      </section>
      <a id="changelog_btn" href="php/changelog.php">Changelog</a>
    </article>
  </body>
</html>
