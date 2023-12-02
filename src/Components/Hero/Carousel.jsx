

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
    {   id:1,
        src: "./assets/carousel2.jpg"},{
        id:2,
        src: "./assets/carousel12.jpg"},{
        id:3,
        src: "./assets/carousel3.jpg"
    }
]

function Slider() {
    return (
        <Carousel 
            infiniteLoop
            showStatus={false} showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            
            >
            {
                images.map((img) => {
                    return (
                        <div key={img.id} style={{ height: "600px", width: "100%"}}>
                            <img style={{height: "100%",objectFit: "cover",width: "100%"}}
                                src={img.src} alt="hand-bags"
                            />
                        </div>
                    )
                })
            }

        </Carousel>
    )
}

export default Slider