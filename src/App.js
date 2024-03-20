import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login-success" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
