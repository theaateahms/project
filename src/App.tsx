import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CreateEventPage } from './pages/CreateEventPage';
import { ManageEventsPage } from './pages/ManageEventsPage';
import { PrivateRoute } from './components/auth/PrivateRoute';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route 
          path="/my-events" 
          element={
            <PrivateRoute>
              <ManageEventsPage />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  );
}