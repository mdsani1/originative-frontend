import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Import Link for navigation
import './Hero.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFreeCodeCamp, faDev, faReact, faVuejs, faAngular, faNode, faWordpress, faAws, faDocker, faAndroid } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="text-center" style={{ marginTop: '70px' }}>
        <div>

        <div className='text-center hero-section'>
          <div>
          <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&display=swap" rel="stylesheet" />
          <h1 className="text-uppercase text-center hero-text d-flex">Originative Guides
              <div style={{ marginLeft: '20px' }}>
                <div id='viewBtnSection'>
                    <div id='viewBtn'>
                      <button className='btn btnRight'>
                        <div className='d-flex justify-items-center'>
                        <FontAwesomeIcon className='rightBtn' icon="fa-solid fa-arrow-right" /> <span className='pt-1'>View our works</span>
                        </div>
                      </button>
                    </div>
                </div>
              </div>
          </h1>
          <div className='d-flex'>
            <h1 className='text-uppercase mt-3' style={{ marginRight: '5px' }}> your brand's im </h1>
            <a className="navbar-brand" href="#">
              <Image
                src="/musk img.png"
                alt="Logo"
                width={100}
                height={60}
                priority
              />


            </a>
            <h1 className='text-uppercase mt-3' style={{ marginLeft: '5px' }}>digital evolution</h1>
          </div>
          <h1 className='text-uppercase mt-3'>with seamless navigation</h1>
          </div>
        </div>

          <div>
            <div className="marquee marquee--8 mt-4">
              <img className="marquee__item" src="/hero-slider/1.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/2.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/1.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/2.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/1.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/2.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/1.png" alt=""/>
              <img className="marquee__item" src="/hero-slider/2.png" alt=""/>
            </div>

            <div className='d-flex justify-content-between mt-4'>
              <div className='d-flex'>
                <p><img src="/thumbs-up.png" alt="" /> <span>100% Client Satisfaction</span></p>
                <p style={{ marginLeft: '40px' }}><img src="/question.png" alt="" /> <span>100% Client Satisfaction</span></p>
                <p style={{ marginLeft: '40px' }}><img src="/user-love-01.png" alt="" /> <span>100% Client Satisfaction</span></p>
              </div>

              <div>
                <a href=""><img src="/browser.png" alt="" /></a>
                <a href="" style={{ paddingLeft: '15px' }}><img src="/linkedin.png" alt="" /></a>
                <a href="" style={{ paddingLeft: '15px' }}><img src="/instragram.png" alt="" /></a>
                <a href="" style={{ paddingLeft: '15px' }}><img src="/facebook.png" alt="" /></a>
                <a href="" style={{ paddingLeft: '15px' }}><img src="/twitter.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
