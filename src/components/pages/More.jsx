import React from 'react'

import Trailer from "../../res/TRAILER.mp4"

function More() {
  return (
    <div className='page fixed-page'>
      <h1>More</h1>
      <h3>Q/A</h3>
      <h6>Most asked questions: </h6>
      <ul className='qa'>
        <li>Q: When I lauch the game this message shows up: "The installed version of the NVIDIA graphivs driver has known issues in D3D12."</li>
        <li>A: You graphics driver may be older. You can download the driver at <a href='https://www.nvidia.com/en-us/'>Nvidia's Official Site</a></li>
      </ul>
      <ul className='qa'>
        <li>Q: Is the game free?"</li>
        <li>A: No, the game costs 1,99$.</li>
      </ul>
      <ul className='qa'>
        <li>Q: Where can I play the game?"</li>
        <li>A: The game is published on <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Steam</a>.</li>
      </ul>
    </div>
  )
}

export default More