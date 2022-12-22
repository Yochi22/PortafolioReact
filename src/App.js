import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import {About} from "./components/About";
import {Projects} from "./components/Projects";
import  {Habilidades} from "./components/Habilidades";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Habilidades />
      
      <SocialLinks />
    </div>
  );
}

export default App;
