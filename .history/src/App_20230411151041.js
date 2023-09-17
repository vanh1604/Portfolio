import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
