import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader"> 
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />  
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
          <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

          <Router>
            <Nav />
            <MoveToTop />
            <Home/>
            <About/>
            <Work/>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
