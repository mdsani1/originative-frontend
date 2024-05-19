import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhoWeAre = () => {
  return (
    <div id="who-we-are-section">
        <p className='whoWeAreHeader'>Who we are</p>
        <h1>Crafting Global Digital <br /> Excellence from Bangladesh</h1>

        <hr style={{ color:'#fff', border: '2px solid #fff', width: '35%' }} />

        <p style={{ color: '#fff' }}>
            Originative is a dynamic global agency headquartered in Bangladesh, where we blend creativity, innovation, and expertise to deliver exceptional digital solutions. With a passion for crafting unforgettable experiences, we specialize in UI/UX design, web development, branding, and more.
            <br />
            <br />
            Driven by a team of talented professionals, our mission is to redefine digital excellence and empower businesses worldwide to thrive in the ever-evolving digital landscape. From startups to established enterprises, we tailor our services to meet the unique needs and goals of each client, ensuring unparalleled success and growth.
            <br />
            <br />
            At Originative, we believe in the power of collaboration, integrity, and continuous learning. With a commitment to excellence and a dedication to pushing boundaries, we invite you to embark on a journey of creativity, innovation, and success with us.
        </p>
            <br />
        <div className='d-flex'>
            <a href='' type="button" className="btn header-talk-btn d-flex" style={{ width: '115px' }}>Contact us 
            <FontAwesomeIcon className='pencilIcon' icon={['fas', 'pencil']} />
            </a>

            <a href="" className='btn' style={{ color: '#fff' }}>Explore more</a>
        </div>
    </div>
  );
};

export default WhoWeAre;
