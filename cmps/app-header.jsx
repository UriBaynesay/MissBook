const { NavLink,withRouter  } = ReactRouterDOM;

function _AppHeader() {
  return (
    <header className="flex ">
      <h1>Books App</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book">Book List</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader)