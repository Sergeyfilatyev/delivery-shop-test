import { Link, NavLink, Outlet } from "react-router-dom";
export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={"/"}>Food Delivery App</Link>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Shops</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Food Delivery App</h1>
        <Outlet>{children}</Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
};
