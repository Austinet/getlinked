import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Contact = () => {
  return (
    <>
    <Header />
    <main>
      <section id='contact'>
        <div className="contact-container">
          <div className="contact-details">
            <h2>Get in touch</h2>
            <p>
              Contact <br />
              Information
            </p>
            <address>
              27, Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </address>
            <p>Call us: 07067981819</p>
            <p>
              we are open from Monday-Friday <br />
              08:00am-05:00pm
            </p>
            <div className="socials">
              <h3>Share on</h3>
              {/* <ul>
                <li>
                  <Link><img src={instagram} alt="Instagram icon" /></Link>
                </li>
                <li>
                  <Link><img src={x} alt="X icon" /></Link>
                </li>
                <li>
                  <Link><img src={facebook} alt="Facebook icon" /></Link>
                </li>
                <li>
                  <Link><img src={linkedIn} alt="LinkedIn icon" /></Link>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="contact-form">
            <h2>
              Questions or need assistance? <br />
              Let us know about it!
            </h2>
            <form action="">
              <input type="text" placeholder='First Name'/>
              <input type="email" placeholder='Mail'/>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'>

              </textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>

</>
  )
}

export default Contact