import NavBar from '../navbar';

/**
 * The header component render the navigation bar
 * @function
 * @property {function} NavBar render the navbar component
 * @returns {React.ReactElement} return Header component
 * @example
 * <Header>
 *   <NavBar />
 * </Header>
 */

function Header() {
  return (
    <header style={{ minHeight: '71px' }}>
      <NavBar />
    </header>
  );
}

export default Header;
