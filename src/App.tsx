import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      
    </BrowserRouter>
  );
}
