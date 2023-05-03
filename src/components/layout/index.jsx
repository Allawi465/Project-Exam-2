import React from 'react';
import Header from './header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
