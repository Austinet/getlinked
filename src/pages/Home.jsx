import About from "../components/About"
import Criteria from "../components/Criteria"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"
import Guidelines from "../components/Guidelines"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Timeline from "../components/Timeline"

const Home = () => {
  return (
    <>
        <Header />
        <main>
          <Hero/>
          <About />
          <Guidelines />
          <Criteria />
          <Faqs />
          <Timeline />
        </main>
        <Footer />
    </>
  )
}

export default Home