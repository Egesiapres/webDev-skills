// stateless functional component
// instead of using a class for this component, we're gonna use a f
// stateless because being not a class, it has no state
// it depends on you
// shortcut: sfc
// in sfc i have to remove the this (from this.props.totalCounters), and i have to add the argument, in this case props, between () of the arrow f

// arguments destructuring
// simply state in both the occurencies only the prop name, without this.props

// in sfc you cannot use lifecycle hooks
// because here i have a single function
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
