import React from 'react'
import './HeroOneComponent.css'; 

const HeroOneComponent = () => {
    return (
        <section className="hero-slider-wrapper home-one-slider">
            <div className="hero-shape">
                <img src={require("../../assets/shape/aab.png")} alt="" className="shape cloud1" />
                <img src={require ("../../assets/shape/rmc.png") } alt="" className="shape shape2" />
                <img src={require ("../../assets/shape/dotmr.png") } alt="" className="shape shape3" />
                <img src={require ("../../assets/shape/plusgs.png") } alt="" className="shape shape4" />
                <img src={require ("../../assets/shape/plusb.png") } alt="" className="shape shape5" />
                <img src={require ("../../assets/shape/plusg.png") } alt="" className="shape shape6" />
                <img src={require ("../../assets/shape/plusgs.png") } alt="" className="shape shape7" />
                <img src={require ("../../assets/shape/plusr.png") } alt="" className="shape shape8" />
                <img src={require ("../../assets/shape/sgdot.png") } alt="" className="shape shape9" />
                <img src={require ("../../assets/shape/xsrdot.png") } alt="" className="shape shape10" />
                <img src={require ("../../assets/shape/sgdot.png") } alt="" className="shape shape11" />
                <img src={require ("../../assets/shape/dotmr.png") } alt="" className="shape shape13" />
                <img src={require("../../assets/shape/aab.png")} alt="" className="shape cloud2" />
                <img src={require("../../assets/shape/aab.png")} alt="" className="shape cloud3" />
            </div>
        </section>
    )
}

export default HeroOneComponent
