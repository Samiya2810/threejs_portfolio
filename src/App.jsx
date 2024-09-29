import Navbar from "./section/Navbar.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Project from "./section/Project.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import Social from "./section/Social.jsx";
import Experience from "./section/Experience.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <Social/>
            <About/>
           <Project/>
            <Contact/>
            <Footer/>

        </main>
    )
}
export default App;
