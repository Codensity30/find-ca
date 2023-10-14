import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Landing/Home";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
