import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import { Layout } from './components';
import ApiProvider from './api/index';
import {
  Home,
  VenueById,
  Profile,
  RouteNotFound,
  Booking,
  Update,
  Create,
} from './pages';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div>
      <HelmetProvider>
        <ApiProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="venue/:id" element={<VenueById />} />
              <Route path="booking/:id" element={<Booking />} />
              <Route path="profile/:name" element={<Profile />} />
              <Route path="create" element={<Create />} />
              <Route path="update/:id" element={<Update />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </ApiProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
