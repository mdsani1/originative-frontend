import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Import Link for navigation
import './style.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faFreeCodeCamp, faDev, faReact, faVuejs, faAngular, faNode, faWordpress, faAws, faDocker, faAndroid } from "@fortawesome/free-brands-svg-icons";

const HowWeWork = () => {
  return (
    <div id="who-we-are-section">
        <p className='whoWeAreHeader'>How we work</p>
        <div className="row">
          <div className="col-md-9">
            <h1 className=''>Our Comprehensive and <br /> Customized Work Process</h1>
          </div>
          <div className="col-md-3">
            <p style={{ color: '#ddd' }}>Our process is simple. We start with <br /> your needs, create engaging  experiences, research, experiment <br /> with ideas, and use your feedback to <br /> guide us.</p>
          </div>
        </div>

            <br />
        {/* <div className='d-flex'>
            <a href='' type="button" className="btn header-talk-btn d-flex" style={{ width: '115px' }}>Contact us 
            <FontAwesomeIcon className='pencilIcon' icon={['fas', 'pencil']} />
            </a>

            <a href="" className='btn' style={{ color: '#fff' }}>Explore more</a>
        </div> */}
    </div>
  );
};

export default HowWeWork;
