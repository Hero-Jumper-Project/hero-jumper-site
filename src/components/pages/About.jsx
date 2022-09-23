import React from 'react'
import { Carousel } from 'react-bootstrap'

import Screnshot1 from '../../res/SCREENSHOT1.png'
import Screnshot2 from '../../res/SCREENSHOT2.png'
import Screnshot3 from '../../res/SCREENSHOT3.png'
import Screnshot4 from '../../res/SCREENSHOT4.png'
import Screnshot5 from '../../res/SCREENSHOT5.png'

function About() {
    return (
        <div className='page fixed-page'>
            <h1>About</h1>
            <p>Hero Jumper is sandbox game where you can destroy objects and do whatever you want.
                In this game you can build you dream chaos.
                With the destruction physics you can pretty much destroy anything you can think about.</p>
            <h3>Screenshots</h3>
            <div className='screenshots'>
                <Carousel className='screenshots'>
                    <Carousel.Item>
                        <img
                            className="d-block h-0 w-100 screenshot"
                            src={Screnshot1}
                            alt="First slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 screenshot"
                            src={Screnshot2}
                            alt="Second slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 screenshot"
                            src={Screnshot3}
                            alt="Third slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 screenshot"
                            src={Screnshot4}
                            alt="Fourth slide"
                            />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 screenshot"
                            src={Screnshot5}
                            alt="Fifth slide"
                            />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default About