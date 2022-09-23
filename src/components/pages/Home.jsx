import React from 'react'
import { Parallax } from 'react-parallax'

import Logo from "../../res/logo.png"

import VoronoiDiagram from "../../res/VORONOIDIAGRAM.svg.png"

import './Page.scss'

function Home() {
  return (
    <div className='page'>
      <div className='container'>
        <div className='background-img'><img className='logo' src={Logo} alt='logo'></img></div>
      </div>

      <div className='content'>
        <div className='content-sub'>
          <h1 className='content-header'>Hero Jumper.</h1>
          <p>Hero Jumper is sandbox game where you can destroy objects and do whatever you want.
            In this game you can build you dream chaos.
            With the destruction physics you can pretty much destroy anything you can think about.
          </p>
        </div>

        <div className='content-sub'>
          <h1 className='content-header'>Destruction</h1>
          <p>The game's main mechanic is the destruction. Using Voronoi Pattern, the mesh that is hit by the player is destroyed
            <div className='voronoi-diagram'>
              <img src={VoronoiDiagram} alt="voronoi-diagram"></img>
              <h5>(Example Of Voronoi Diagram)</h5>
            </div>
          </p>
        </div>
        
        <div className='content-sub'>
          <h1 className='content-header'>Multiplayer</h1>
          <p>Destroy with your friends and break the entire map. With the multiplayer in the game you can play with other players.
          </p>
          <p>Please note that the multiplayer is in early access and it may have some bugs. If you find any bug, report it on our email in <a href='\contact'>Contact Page</a>.</p>
        </div>
        
        <div className='content-sub'>
          <h1 className='content-header'>Singleplayer</h1>
          <p>If you prefer solo, there you have it. The singleplayer mode is the same as the multiplayer, but no one can join your world and you play the game only by yourself.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home