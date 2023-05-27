import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css"
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AuthPage from "./pages/Auth/AuthPage";
import SignUp from "./pages/Auth/RegisterPage";
import Login from "./pages/Auth/LoginPage";

function App() {

  const isLoggedIn = useSelector((state => state.auth.authData))


  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to='home' /> : <Navigate to='login' />} />
          <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to='/login' replace />} />
          <Route path="/profile/:id" element={isLoggedIn ? <ProfilePage /> : <Navigate to='login' />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to='/home' replace /> : <AuthPage> <Login /> </AuthPage>} />
          <Route path="/register" element={isLoggedIn ? <Navigate to='/home' replace /> : <AuthPage> <SignUp /> </AuthPage>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
