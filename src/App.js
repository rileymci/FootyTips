import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Match from './Match';
import Header from './Header';
import Layout from "./Layout";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Match />} />
        <Route path={'/login'} element={<div>login</div>} />
        </Route>
      </Routes>
    
  );
}

export default App;
