import React from 'react'
import { Parallax } from 'react-parallax'

import Logo from "../../res/logo.png"

import './Page.scss'

function Home() {
  return (
    <div className='page'>
        <div className='container'>
            <div className='background-img'><img className='logo' src={Logo} alt='logo'></img></div>
        </div>

        <div className='content'>
            <h1>Hero Jumper</h1>
            <p>Hero Jumper is sandbox game where you can destroy objects and do whatever you want.
                In this game you can build you dream chaos.
                With the destruction physics you can pretty much destroy anything you can think about.
            </p>
        </div>
    </div>
  )
}

export default Home