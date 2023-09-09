
import React from 'react'
import Portfoliocard from './Portfoliocard'
import homeCardImg from "../assets/img/portfolio/cabin.png"
import cakeCardImg from "../assets/img/portfolio/cake.png"
import circusCardImg from "../assets/img/portfolio/circus.png"
import gameCardImg from "../assets/img/portfolio/game.png"
import safeCardImg from "../assets/img/portfolio/safe.png"
import submarineCardImg from "../assets/img/portfolio/submarine.png"

function Portfolio() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start pb-16 bg-themedarkblue'>
        <h1 className='pt-8 text-5xl font-bold text-white'>
            PORTFOLIO
        </h1>
        <div className="cards flex flex-wrap gap-10 items-center justify-center mt-16">
            <Portfoliocard
            imgsrc={homeCardImg}
            />
            <Portfoliocard
            imgsrc={cakeCardImg}
            />
            <Portfoliocard
            imgsrc={circusCardImg}
            />
            <Portfoliocard
            imgsrc={gameCardImg}
            />
            <Portfoliocard
            imgsrc={safeCardImg}
            />
            <Portfoliocard
            imgsrc={submarineCardImg}
            />
        </div>
    </div>
  )
}

export default Portfolio