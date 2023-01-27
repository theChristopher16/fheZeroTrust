import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const Layout = ({children}) => {
    return (
        <>
        <Toolbar />
        {children}
        </>
    );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
