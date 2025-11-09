import Hero from "./Components/Hero.jsx"
import Navbar from "./Components/navbar.jsx"
import ProductViewer from "./Components/ProductViewer.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./Components/Showcase.jsx"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </main>
    )
}
export default App
