function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand" href="#">
          🍛 Mahesh's Biryani
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link text-white" href="#">Home</a>
          <a className="nav-link text-white" href="#">Veg</a>
          <a className="nav-link text-white" href="#">Non-Veg</a>
          <a className="nav-link text-white" href="#">Offers</a>
          <a className="nav-link text-white" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;