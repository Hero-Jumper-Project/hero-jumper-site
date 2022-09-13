import React from 'react'

function Contact() {
  return (
    <div className='page fixed-page'>
        <h1>Contact</h1>
        <p>If you want to contact with one of our developers, then use one of these links:</p>

        <a href='https://www.youtube.com/channel/UCezhDQJpaGnX-u_x2kGSAkA'><button className='btn-danger'>Youtube</button></a>
        <a href='https://twitter.com/jumper_hero'><button className='btn-primary'>Twitter</button></a>
        <a href='https://discord.gg/TTYemjTNkX'><button className='btn-primaryblue'>Discord</button></a>
        <a href='https://www.tiktok.com/@official_hero_jumper'><button className='btn-purple'>TikTok</button></a>
        <button className='btn-colorful'>Or By Gmail (herojumpersocialmedias9162@gmail.com)</button>
    </div>
  )
}

export default Contact