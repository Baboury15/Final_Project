import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="fixed-bottom ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Us</h5>
            <p>
              For further information you can write us on the links provided
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list">
              <a href="https://www.instagram.com/lehmancuny/"> Instagram </a>
              </li>
              <li className="list">
              <a href="https://www.facebook.com/LehmanCUNY/"> Facebook </a>
              </li>
              <li className="list">
              <a href="https://twitter.com/LehmanCollege"> Twitter </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;