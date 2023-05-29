import React, { Component } from 'react';

import Helmet from 'react-helmet';
import Navigation from './components/Navigation';
import Footer from './components/Footer'; 

const style = "/static/styles/bulma.min.css";
const logo = '/images/brand/logoMWBlue.svg';  
const logoWhite = '/images/brand/logoMWWhite.svg';  

class Page extends Component {    
  
  render() { 

    const title = `${this.props.title} | Bespoke Software London | MethodWorx`;

    return ( 
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="theme-color" content="#008f68" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href={style} rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
          <link rel="manifest" href="/public/site.webmanifest"></link>

        </Helmet>
        
        <Navigation logo={logo}/>
        {this.props.children}
        <Footer logo={logoWhite} />
      </>
    );
  }
}

export default Page;
