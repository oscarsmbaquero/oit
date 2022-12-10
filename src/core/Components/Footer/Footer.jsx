import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link, Typography } from '@mui/material';
import { IntlProvider, FormattedMessage} from "react-intl";

export default function App() {

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.primary"
        align="center"
        {...props}
      >
       
        <Link href="https://github.com/oscarsmbaquero">
        {"Copyright © "}&nbsp;OIT&nbsp; {new Date().getFullYear()}
        </Link>{" "}
        
        {"."}
      </Typography>
    );
  }


  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span><FormattedMessage id="app.footer"/></span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='danger' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
      </section>
      <div className='text-center p-4' style={{color:'whitesmoke' }}>
      <Copyright />
      </div>
    </MDBFooter>
  );
}