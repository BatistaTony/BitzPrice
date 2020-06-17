import Link from "next/link";

const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <a class="navbar-brand" href="#">
      BitzPrice
    </a>

    <div class=" navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <Link href="/">
            <a class="nav-link">Home</a>
          </Link>
        </li>

        <li class="nav-item">
          <Link href="/about">
            <a class="nav-link">About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
