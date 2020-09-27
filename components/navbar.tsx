import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <a className="navbar-brand" href="#">
      BitzPrice
    </a>

    <div className=" navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
