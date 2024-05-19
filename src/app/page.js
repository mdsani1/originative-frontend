"use client";
import Head from 'next/head';
import { Container, Button } from 'react-bootstrap'; // Import Container and Button from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Header from "../components/header";
import Hero from "../components/hero";
import WhoWeAre from "../components/who-we-are";
import Branding from "../components/branding";
import Service from "../components/service";
import HowWeWork from "../components/how-we-work";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

export default function Home() {
  
  return (
    <Container>
      <div className="main-section">
        <div className="background-container">
          <Header/>
          <Hero/>
        </div>
      </div>
      <WhoWeAre/>
      <Branding/>
      <Service/>
      <HowWeWork/>
    </Container>
  );
}
