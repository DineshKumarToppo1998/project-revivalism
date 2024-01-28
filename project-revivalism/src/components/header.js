import React from "react";
import "./header.css";

function Header() {
    return (
  <div class = "Header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" />
  <header>
  <div class="header_top_bar">
    <div class="header-right">
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search"></input>
        </form>
      </div>
      <a class="active" href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="login.html">
      <i class="fas fa-user"></i>
      </a>
    </div>
  </div>
</header>
</div>
    );
  }

export default Header;