import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Match from './Match';
import Header from './Header';
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./pages/UserContext";

function App() {
  return (
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}> 
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>

    
  );
}

export default App;
