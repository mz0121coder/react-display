import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
import ContactMe from "./screens/contactMe/ContactMe";

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
        color={{ r: 158, g: 217, b: 249, a: 255 }}
      />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
