import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {
  return (
    <div id="service">
        <p className='serviceHeader'>Services we offer</p>
        <div className="row">
          <div className="col-md-9">
            <h1 className='sub-title'>Discover Our Range of Tailored <br /> Services</h1>
          </div>
          <div className="col-md-3">
            <p style={{ color: '#595959' }}>Explore our range of services <br /> designed to elevate your digital <br /> presence. Contact us to schedule a <br />consultation and kickstart your <br /> journey towards success.</p>
          </div>
        </div>

        <table className='table' style={{ marginTop: '40px' }}>
          <tbody>
            <tr>
              <td style={{ width: '5%', textAlign: 'center', borderTop: '2px solid #c9c7c7' }}>
                <h5 style={{ paddingTop: '5px' }}>01</h5>
              </td>
              <td style={{ width: '63%', borderTop: '2px solid #c9c7c7' }}>
                <h1>UI/UX Design</h1>
              </td>
              <td style={{ textAlign: 'right', borderTop: '2px solid #c9c7c7' }}>
                <img className="" src="/hero-slider/1.png" alt="" style={{ width: '200px', height: '150px', borderRadius: '16px' }}/>
                <a href="" className='serviceBtn'><img src="./click button.png" alt="" /></a>
              </td>
            </tr>
            
            <tr>
              <td style={{ width: '5%', textAlign: 'center' }}>
                <h5 style={{ paddingTop: '5px' }}>02</h5>
              </td>
              <td style={{ width: '63%' }}>
                <h1>Web Design</h1>
              </td>
              <td style={{ textAlign: 'right' }}>
                <img className="" src="/hero-slider/2.png" alt="" style={{ width: '200px', height: '150px', borderRadius: '16px' }}/>
                <a href="" className='serviceBtn'><img src="./click button.png" alt="" /></a>
              </td>
            </tr>

            <tr>
              <td style={{ width: '5%', textAlign: 'center' }}>
                <h5 style={{ paddingTop: '5px' }}>03</h5>
              </td>
              <td style={{ width: '63%' }}>
                <h1>MVP/Product Development</h1>
              </td>
              <td style={{ textAlign: 'right' }}>
                <img className="" src="/hero-slider/1.png" alt="" style={{ width: '200px', height: '150px', borderRadius: '16px' }}/>
                <a href="" className='serviceBtn'><img src="./click button.png" alt="" /></a>
              </td>
            </tr>

            <tr>
              <td style={{ width: '5%', textAlign: 'center' }}>
                <h5 style={{ paddingTop: '5px' }}>04</h5>
              </td>
              <td style={{ width: '63%' }}>
                <h1>Brand Design</h1>
              </td>
              <td style={{ textAlign: 'right' }}>
                <img className="" src="/hero-slider/1.png" alt="" style={{ width: '200px', height: '150px', borderRadius: '16px' }}/>
                <a href="" className='serviceBtn'><img src="./click button.png" alt="" /></a>
              </td>
            </tr>
          </tbody>
        </table>
        
    </div>
  );
};

export default Service;
