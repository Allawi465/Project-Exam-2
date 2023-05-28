import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

/**
 * A layout component that renders the header and content sections
 * @component
 * @property {function} Header render the Header component
 * @property {function} Outlet render the content sections
 * @property {function} Footer render the Footer component
 * @returns {React.ReactElement} return Layout component
 * @example
 * <Layout />
 */

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
