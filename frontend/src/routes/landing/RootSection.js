import React, { useEffect,useState,useRef } from "react";
import Header from "./Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import PizzaMenuPreview from "./PizzaMenuPreview";
import MenuPricingPreview from "./MenuPricingPreview";
import Gallery from "./Gallery";
import StatsPreview from "./StatsPreview";
import MenuSlider from "./MenuSlider";
import BlogPreview from "./BlogPreview";
import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./ContactLanding";
// import vantaHalo from "vanta/src/vanta.halo";


const RootSection = () => {



  useEffect(() => {
    document.title = "4:20";
    ResetLocation();
  }, []);


  // const [vantaEffect, setVantaEffect] = useState(null)
  // const myRefH = useRef(null)
  // useEffect(() => {
    
  //   if (!vantaEffect) {
      
  //     setVantaEffect(vantaHalo({
  //       el: myRefH.current,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       maxHeight: 15000.000,
  //       baseColor: 0x220022,
  //       backgroundColor: 0xd0d1b,
  //       amplitudeFactor: 3.00
       
  //     }))
      
  //   }
  //   return () => {
  //      if (vantaEffect) {
  //                       vantaEffect.destroy() ;
  //                       console.log('halo destroyed');
  //                       // vantaEffect.destroy()
  //                        }
  //   }
  // }, 
  
  // [vantaEffect]
  // )
  return (
    
    
      
    <React.Fragment>
      
      <Header />
      
      <WelcomeSection />
      {/* <div ref={myRefH} > */}
      <ContactUsLanding />
      {/* </div> */}
      <OurServices />
      <PizzaMenuPreview />
      <MenuPricingPreview />
      <Gallery />
      {/* <StatsPreview /> */}
      <MenuSlider />
      {/* <Newsletter /> */}
      {/* <BlogPreview /> */}
      <ContactLanding />
      <ScrollButton />
     
    </React.Fragment>
   
    
  );
}

export default RootSection;
