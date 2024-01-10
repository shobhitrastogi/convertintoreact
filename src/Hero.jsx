import React from 'react'
import Topbar from './components/Topbar'
import Main from './components/Main';
import Footer from './components/Footer';

const Hero = () => {
  return (
  <>
    <div id="wrap">  
       <Topbar />
       <Main />
      <Footer />
    </div>
  </>
  )
}

export default Hero