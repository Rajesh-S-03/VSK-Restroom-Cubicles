import React from 'react'
import ComparisonSlider from "./Comparision_slider";
import Cubicles1 from "./Cubicles1";
import Cubicles2 from "./Cubicles2";
import Cubicles3 from "./Cubicles3";
import Cubicles4 from "./Cubicles4";
import CubicleMosaic from "./CubicleMosaic";
import HorizontalCards from "./HorizontalCards";

const Cubicles = () => {
  return (
        <>
    <Cubicles1/>
    <Cubicles2/>
    <Cubicles3/>
    <Cubicles4/>
    <CubicleMosaic/>
    <HorizontalCards/>
    {/* <ComparisonSlider/> */}

    </>
  )
}

export default Cubicles