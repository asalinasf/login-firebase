import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import SignUp from "../components/Signup/SignUp";
import Login from "../components/login/Login";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

const MyRoutes = () => {
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName} />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
