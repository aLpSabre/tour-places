import "./header.css"
function Header() {
  return (
    <header class="container-fluid p-0">
      <nav>
        <ul className="p-0">
          <li><a href="#">About Us</a></li>
          <li><a href="#">For You</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Vlog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header