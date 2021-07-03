// import logo from './logo.svg';
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

import shape_02 from "./assets/Shape_02.png";
import shape_02_2x from "./assets/Shape_02@2x.png";

import "./App.css";

function App() {
  return (
    <div className="">
      <div className="bg-gradient-to-tr from-primary to-primary-light">
        <div className="App">
          <Menu />
          <div className="pt-16">
            <Hero />
          </div>
        </div>
        <div className="">
          <img className="md:hidden w-full" src={shape_02} alt="" />
        </div>
        <div className="">
          <img className="hidden md:block w-full" src={shape_02_2x} alt="" />
        </div>
      </div>
      <div className="App">
        <Packages />
      </div>
      <div className="bg-footer-pattern bg-right bg-cover pt-0">
        <div className="App">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
