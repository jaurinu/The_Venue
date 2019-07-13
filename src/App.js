import React from 'react';
import './styles.css';

import Header from './component/header_footer/header';
import Featured from './component/featured';
import VunueNfo from './component/venueNfo/index';
import Highlight from './component/Highlights/index';
import Index from './component/pricing';
// import Location from './component/location';
// import Footer from './component/header_footer/footer';

function App() {
  return (
    <div className="App" style={{ height:'1500px', background:'cornflowerblue'}}>
      <Header />
      <Featured />
      <VunueNfo />
      <Highlight />
      <Index />
      {/* <Location /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
