import {Home} from "./components/pages/Home.jsx";
import {Services} from "./components/pages/Services.jsx";
import {Feature} from "./components/pages/Feature.jsx";
import {Footer} from "./components/Footer.jsx";
import {Navbar} from "./components/Navbar.jsx";



function App() {

  return (
    <div>
       <Navbar />
        <Home />
        <Services />
        <Feature />
        <Footer />

    </div>
  )
}

export default App
