import Hero from "./Components/Hero.jsx"
import Navbar from "./Components/navbar.jsx"
import ProductViewer from "./Components/ProductViewer.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}
export default App
