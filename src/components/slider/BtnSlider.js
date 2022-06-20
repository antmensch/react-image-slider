import React from "react";
import "./Slider.css";
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider(props) {
    const arrow = props.direction === "next" ? rightArrow : leftArrow;
    return (
        <button className={props.direction === "next" ?  'btnSlider--button next' : 'btnSlider--button prev'} onClick={props.moveSlide}>
            <img className="btnSlider--arrow" src={arrow} />
        </button>
    );
}