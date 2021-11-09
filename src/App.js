import "./App.css";
import Navigation from "./components/navigationBar/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Technologies from "./components/technologies/Technologies";
import Portfolio from "./components/portfolio/Portfolio";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleAnimation
        style={{ height: "96vh" }}
        background={{ r: 1, g: 50, b: 67, a: 1 }}
        particleSpeed={0.1}
        particleRadius={1.5}
        color={{ r: 255, g: 255, b: 0, a: 255 }}
      />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
