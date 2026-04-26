import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css"
import Confirmation from "./pages/Confirmation";
import Booking from "./pages/Booking";
import AddEvent from "./components/AddEvent"
import Bookings from "./pages/Bookings"
import About from "./pages/About";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/bookings" element={<Bookings />} />


      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/add" element={<AddEvent />} />
      <Route path="/about" element={<About />} />
      

    </Routes>
  )
}

export default App
