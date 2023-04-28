
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import { Layout } from './components//index';
import { Home, VenueById, Profile, RouteNotFound } from './pages';
import { HelmetProvider } from 'react-helmet-async';
import ApiProvider from './api/auth';

function App() {
  return (
    <div>
      <HelmetProvider>
        <ApiProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="venue/:id" element={<VenueById />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </ApiProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
