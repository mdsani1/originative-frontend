import React from 'react';
import Image from "next/image";
import Link from 'next/link'; // Import Link for navigation
import './Header.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
    <div className="container-fluid d-flex justify-content-between">
      <div>
        <a className="navbar-brand" href="#">
        <Image
              src="/originative-logo.png"
              alt="Logo"
              width={100}
              height={24}
              priority
            />
        </a>
      </div>

      <div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Agency</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Home</a></li>
              <li><a className="dropdown-item" href="#">Agency</a></li>
            </ul>
          </li> */}
          <div className="nav-item dropdown">
          <button className="nav-link dropdown-toggle dropbtn">Service</button>
          <div className="dropdown-menu dropdown-content">
              <li><a className="dropdown-item" href="#">Home</a></li>
              <li><a className="dropdown-item" href="#">Agency</a></li>
          </div>
        </div>
          <li className="nav-item">
            <a className="nav-link" href="#">Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      </div>

      <div>
        <button type="button" className="btn header-talk-btn d-flex">Let's talk 
        <img src="/pencil.png" alt="" className='pencilIcon'/>
        </button>
      </div>

    </div>
  </nav>
  );
};

export default Header;
