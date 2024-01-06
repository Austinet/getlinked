import About from "../components/About"
import Criteria from "../components/Criteria"
import Faqs from "../components/Faqs"
import Footer from "../components/Footer"
import Guidelines from "../components/Guidelines"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import PrivacyPolicy from "../components/PrivacyPolicy"
import Prizes from "../components/Prizes"
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
          <Prizes />
          <Partners />
          <PrivacyPolicy />
        </main>
        <Footer />
    </>
  )
}

export default Home