import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import './App.css'
import Pc from "./Components/Pc";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
