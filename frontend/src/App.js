import "./App.css"
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AuthPage from "./pages/Auth/AuthPage";




function App() {




  return (
    <div className="App">
        <div className="blur " style={{top: '-13%', right: '0'}}></div>
        <div className="blur " style={{top: '36%', left: '-8rem'}}></div>
        {/* <HomePage/> */}
        <ProfilePage/>
          {/* <AuthPage/> */}
    </div>
  );
}

export default App;
