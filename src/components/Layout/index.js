import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
  return <>
  <div class="page-wrapper">
  <Header />
  { children }
  <Footer />
  </div>
  </>;
};

export default Layout;
