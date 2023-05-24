import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css"
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AuthPage from "./pages/Auth/AuthPage";
import SignUp from "./pages/Auth/RegisterPage";
import Login from "./pages/Auth/LoginPage";

function App() {

  const user = useSelector((state => state.auth.authData))
  console.log(user);


  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={user ? <Navigate to = 'home'/> : <Navigate to = 'login'/>} />
      <Route path="/home" element={user? <HomePage/> : <Navigate to = '../login'/>} />
      {/* <Route path="/profile" element={<ProfilePage/>} /> */}
      <Route path="/login" element={user? <Navigate to = '../home'/>:<AuthPage> <Login/> </AuthPage>} />
      <Route path="/register" element={user? <Navigate to = '../home'/>:<AuthPage> <SignUp/> </AuthPage>} />
    </Routes>


    </div>
        </>
  );
}

export default App;
