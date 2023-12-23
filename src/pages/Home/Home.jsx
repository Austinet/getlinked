// import React from 'react'
import { Link } from "react-router-dom";
import boy from "../../assets/images/home/boy.png";
import vector from "../../assets/images/home/vector_4.png";
import countdown from "../../assets/images/home/countdown_time.png";
import lightBulb from '../../assets/images/home/light_bulb.png'
import ladySitting from '../../assets/images/home/lady_sitting.png'
import "./home.css";
import Criteria from "../../components/Criteria/Criteria";
import Faq from "../../components/Faq/Faq";
import Timeline from "../../components/Timeline/Timeline";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
     <Header />
      <main>
        <section id="banner">
          <div className="banner-wrapper w-80">
            <div className="banner-header">
              <h2>Igniting a Revolution in HR innovation</h2>
              <img src={vector} alt="Vector" />
            </div>
            <div className="banner-container">
              <div className="banner-details">
                <h1>
                  getlinked Tech <br />
                  Hackathon <span>1.0</span>
                </h1>
                <p>
                  Participate in getlined tech Hacathon 2023 stand a chance to
                  win a Big prize
                </p>
                <Link to="/register" className="btn-gradient">
                  Register
                </Link>
                <img src={countdown} alt="Countdown" />
              </div>
              <div className="banner-image">
                <img src={boy} alt="Boy putting on a VR shade" />
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="about-container w-80">
            <div className="about-image">
              <img src={lightBulb} alt="Light bulb" />
            </div>
            <div className="about-details">
              <h2>
                Introduction to getlinked <br />
                <span>tech Hackathon 1.0</span>
              </h2>
              <p>
                Our tech Hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                desgn maverck, or a concept wizard, you&apos;ll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
          </div>
        </section>
        <section id="guidelines">
          <div className="guidelines-container w-80">
            <div className="guidelines-details">
              <h2>
                Rules and <br />
                <span>Guidelines</span>
              </h2>
              <p>
                Our tech Hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you&apos;re a coding genius, a 
                desgn maverck, or a concept wizard, you&apos;ll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
            <div className="guidelines-image">
              <img src={ladySitting} alt="A lady sitting and writing" />
            </div>
          </div>
        </section>
        <Criteria />
        <Faq />
        <Timeline />
      </main>
    </>
  );
};

export default Home;
