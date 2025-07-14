import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Vendors from './pages/Vendors'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { InventoryPage } from './pages/InventoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App 