import './Slider.css';
import React from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';


export default function Slider() {
    const [slideIndex, setSlideIndex] = React.useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(prevState => prevState + 1);
        } else setSlideIndex(1);
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(prevState => prevState - 1);
        } else setSlideIndex(dataSlider.length);

    }

    function moveDot(index) {
        setSlideIndex(index);
    }

    return (
        <div className="slider--container">
            {dataSlider.map(function(item, index) {
                return (
                    <div key={item.id} className= {slideIndex === index + 1 ? "slider--slideContainer active-anim" : "slider--slideContainer"}>
                        <img src={process.env.PUBLIC_URL + `img/img${index + 1}.jpg`} className="slider--slide" />
                    </div>
                )
            })}
            <BtnSlider moveSlide = {nextSlide} direction = {"next"}/>
            <BtnSlider moveSlide = {prevSlide} direction = {"previous"}/>

            <div className='slider--dots'>
                {Array.from({length: dataSlider.length}).map((item, index) => <div 
                className= {slideIndex === index + 1 ? 'slider--dot active--dot' : 'slider--dot'}
                key={`dot${index}`}
                onClick={() => moveDot(index + 1)}
                ></div>)}
            </div>
        </div>
    );
}

