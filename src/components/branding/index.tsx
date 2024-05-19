"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Branding = () => {

useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
        const copy = logosSlide.cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }
    }, []);

  return (
    <div id="branding-section" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="logos">
        <div className="logos-slide">
            <img src="./logos/1.png" />
            <img src="./logos/2.png" />
            <img src="./logos/1.png" />
            <img src="./logos/3.png" />
            <img src="./logos/1.png" />
            <img src="./logos/4.png" />
            <img src="./logos/1.png" />
            <img src="./logos/5.png" />

        </div>
        </div>
    </div>
  );
};

export default Branding;
