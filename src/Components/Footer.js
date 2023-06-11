import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <MDBFooter style={{ backgroundColor: '#8bc34a' }} className='text-center text-lg-start '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Follow Us On Our Social Media Accounts:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               
                SMART VERTICAL AGRICULTURE
              </h6>
              <p>
              You can reach detailed information about our company from the About Us section, you can reach us from the communication section to contact us.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>PRODUCTS</h6>
              <p>
                <span className='text-reset'>
                  Floor Type
                </span>
              </p>
              <p>
              <span className='text-reset'>
                  Wall Type
                </span>
              </p>
              <p>
              <span className='text-reset'>
                  Shelf Type
                </span>
              </p>
           
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>FAST ACCESS</h6>
              <p>
                <a href='/' className='text-reset'>
                  HOME
                </a>
              </p>
              <p>
                <a href='/Statistic' className='text-reset'>
                  Statistic
                </a>
              </p>
              <p>
                <a href='/About' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/Contact' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact:</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                İstanbul/TURKIYE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                akillidikeytarim@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:  <b>Smart Vertical Agriculture </b>
      
      </div>
    </MDBFooter>
      );
    }