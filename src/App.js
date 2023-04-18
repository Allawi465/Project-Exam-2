
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import { Layout } from './components//index';
import { Home, RouteNotFound } from './pages';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
