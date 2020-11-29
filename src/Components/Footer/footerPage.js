import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="oxford blue" className="font-small pt-4 mt-4">

            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:  DracosLabs
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;
