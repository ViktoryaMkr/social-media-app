import "./App.css"
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AuthPage from "./pages/Auth/AuthPage";
import Navbar from "./components/Navbar/Navbar";



function App() {




  return (
    <>
    <div className="App">
        {/* <div className="blur " style={{top: '80%', left: '-8rem'}}></div>
        <div className="blur " style={{top: '-13%', right: '0'}}></div> */}

        <HomePage/>

        {/* <ProfilePage/> */}
          {/* <AuthPage/> */}

    </div>
        </>
  );
}

export default App;
