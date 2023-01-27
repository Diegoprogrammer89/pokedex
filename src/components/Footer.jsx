import React from 'react'
import PokeBall from '/PokeBall.png'
import SuperBall from '/SuperBall.png'
import UltraBall from '/UltraBall.png'
import MasterBall from '/MasterBall.png'
import SafariBall from '/SafariBall.png'
import NidoBall from '/NidoBall.png'
import GSBall from '/GSBall.png'


const Footer = () => {
  return (
    <article className='footer'>
        <footer>
            <div className='footer-img'>
              <img src={SuperBall} alt="" />
              <img src={SafariBall} alt="" />
              <img src={UltraBall} alt="" />
              <img src={PokeBall} alt="" />
              <img src={NidoBall} alt="" />
              <img src={MasterBall} alt="" />
              <img src={GSBall} alt="" />
            </div>
        </footer>
    </article>
  )
}

export default Footer