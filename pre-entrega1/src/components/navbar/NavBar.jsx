import CartWidget from "../cartWidget";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary-subtle border-body">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Tienda online
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Consolas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Accesorios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Juegos
                </a>
              </li>
            </ul>
          </div>
        </div>
        {<CartWidget />}
      </nav>
    </>
  );
};

export default NavBar;
